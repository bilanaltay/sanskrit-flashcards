-- Profiles tablosu: Kullanıcı profil bilgilerini tutmak için
-- auth.users tablosu ile senkronize çalışır (email, isim, avatar vb.)
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  
  primary key (id)
);

-- Row Level Security (RLS) Politikaları
-- Veri güvenliği için bu politikalar önemlidir
alter table public.profiles enable row level security;

create policy "Herkes profilleri görebilir"
  on public.profiles for select
  using ( true );

create policy "Kullanıcılar kendi profillerini güncelleyebilir"
  on public.profiles for update
  using ( auth.uid() = id );

create policy "Kullanıcılar kendi profillerini ekleyebilir"
  on public.profiles for insert
  with check ( auth.uid() = id );

-- Trigger: Yeni kullanıcı kayıt olduğunda otomatik profil oluşturma
-- Bu fonksiyon her yeni user eklendiğinde (Google veya Magic Link ile) çalışır
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

-- Trigger'ı auth.users tablosuna bağlama
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Storage (Opsiyonel): Eğer kart resimleri yüklenecekse
-- insert into storage.buckets (id, name) values ('card-images', 'card-images');
