import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';
import { signOut, supabase } from '../utils/supabaseClient';

const Settings: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('Yükleniyor...');
    const [email, setEmail] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [appLang, setAppLang] = useState(localStorage.getItem('app_language') || 'tr');

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const metadata = user.user_metadata;
                // Prioritize first_name + last_name (Magic Link), fall back to full_name (Google), then email
                const fullName = metadata?.first_name 
                    ? `${metadata.first_name} ${metadata.last_name || ''}`.trim()
                    : metadata?.full_name || user.email?.split('@')[0] || 'Kullanıcı';
                
                setName(fullName);
                setEmail(user.email || '');
                setAvatarUrl(metadata?.avatar_url || '');
            } else {
                setName('Misafir');
                setEmail('');
            }
        };
        getUser();
    }, []);

    return (
        <MobileLayout className="bg-paper-dark font-sans text-ink overflow-y-auto no-scrollbar relative">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur-md px-6 py-5 flex items-center justify-between border-b border-border-subtle shrink-0">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface-card hover:bg-primary-light transition-all duration-200 shadow-sm border border-border-subtle"
                >
                    <span className="material-symbols-outlined text-[22px] text-ink-light">arrow_back</span>
                </button>
                <h1 className="text-xl font-semibold text-ink">Ayarlar</h1>
                <div className="w-11"></div>
            </header>

            <div className="flex flex-col px-6 pt-8 pb-10">
                {/* Profile Card */}
                <div className="mb-10 relative rounded-2xl bg-surface-card shadow-card border border-border-subtle p-8 flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <div 
                            className="h-24 w-24 rounded-full bg-cover bg-center border-2 border-border-subtle shadow-sm flex items-center justify-center bg-paper-dark text-primary font-bold text-3xl" 
                            style={avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : {}}
                        >
                            {!avatarUrl && name.charAt(0).toUpperCase()}
                        </div>
                        <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 shadow-sm hover:bg-primary-intro-dark transition-all">
                            <span className="material-symbols-outlined text-[16px] block">edit</span>
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold text-ink">{name}</h2>
                    <p className="text-subtle text-sm font-medium mt-1">{email}</p>
                    <div className="mt-5 flex items-center justify-center gap-2 px-4 py-2 bg-primary-light rounded-full">
                        <span className="material-symbols-outlined text-primary text-[18px]">local_fire_department</span>
                        <span className="text-ink text-sm font-semibold">12 Günlük Seri</span>
                    </div>
                </div>

                {/* Study Preferences */}
                <div className="mb-8">
                    <h3 className="px-1 mb-4 text-xs font-semibold text-subtle uppercase tracking-wider">Çalışma Tercihleri</h3>
                    <div className="flex flex-col bg-surface-card border border-border-subtle rounded-2xl overflow-hidden shadow-card divide-y divide-border-subtle">
                        <button className="flex items-center justify-between p-5 w-full hover:bg-primary-light/50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-primary">target</span>
                                </div>
                                <span className="text-base font-medium text-ink">Günlük Hedef</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-primary">20 Kart</span>
                                <span className="material-symbols-outlined text-[18px] text-subtle">chevron_right</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-between p-5 w-full hover:bg-primary-light/50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-primary">school</span>
                                </div>
                                <span className="text-base font-medium text-ink">Seviye</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-primary">Başlangıç</span>
                                <span className="material-symbols-outlined text-[18px] text-subtle">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* App Settings */}
                <div className="mb-8">
                    <h3 className="px-1 mb-4 text-xs font-semibold text-subtle uppercase tracking-wider">Uygulama</h3>
                    <div className="flex flex-col bg-surface-card border border-border-subtle rounded-2xl overflow-hidden shadow-card divide-y divide-border-subtle">
                        <div className="flex items-center justify-between p-5 w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-paper-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-ink-light">dark_mode</span>
                                </div>
                                <span className="text-base font-medium text-ink">Karanlık Mod</span>
                            </div>
                            <div className="relative inline-block w-12 align-middle select-none">
                                <input 
                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-stone-300 appearance-none cursor-pointer transition-all duration-300 checked:right-0 checked:border-primary right-6 z-10" 
                                    id="toggle-dark" 
                                    name="toggle-dark" 
                                    type="checkbox" 
                                />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-stone-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-dark"></label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-5 w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-paper-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-ink-light">notifications</span>
                                </div>
                                <span className="text-base font-medium text-ink">Hatırlatıcılar</span>
                            </div>
                            <div className="relative inline-block w-12 align-middle select-none">
                                <input 
                                    defaultChecked 
                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-stone-300 appearance-none cursor-pointer transition-all duration-300 checked:right-0 checked:border-primary right-6 z-10" 
                                    id="toggle-notif" 
                                    name="toggle-notif" 
                                    type="checkbox" 
                                />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-stone-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-notif"></label>
                            </div>
                        </div>
                  <button 
                            onClick={() => {
                                const newLang = appLang === 'tr' ? 'en' : 'tr';
                                setAppLang(newLang);
                                localStorage.setItem('app_language', newLang);
                            }}
                            className="flex items-center justify-between p-5 w-full hover:bg-primary-light/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-paper-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-ink-light">language</span>
                                </div>
                                <span className="text-base font-medium text-ink">Dil / Language</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-subtle uppercase">{appLang === 'tr' ? 'Türkçe' : 'English'}</span>
                                <span className="material-symbols-outlined text-[18px] text-subtle">swap_horiz</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Support & Account */}
                <div className="mb-12">
                    <h3 className="px-1 mb-4 text-xs font-semibold text-subtle uppercase tracking-wider">Destek & Hesap</h3>
                    <div className="flex flex-col bg-surface-card border border-border-subtle rounded-2xl overflow-hidden shadow-card divide-y divide-border-subtle">
                        <button className="flex items-center justify-between p-5 w-full hover:bg-primary-light/50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-paper-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px] text-ink-light">mail</span>
                                </div>
                                <span className="text-base font-medium text-ink">Bize Ulaşın</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] text-subtle">chevron_right</span>
                        </button>
                        <button
                            onClick={async () => {
                                try {
                                    await signOut();
                                    navigate('/auth', { replace: true });
                                } catch (error) {
                                    console.error("Logout failed:", error);
                                }
                            }}
                            className="flex items-center justify-center p-5 w-full hover:bg-red-50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-[20px] text-red-500">logout</span>
                                </div>
                                <span className="text-base font-medium text-red-500">Çıkış Yap</span>
                                <div className="ml-auto">
                                    <span className="material-symbols-outlined text-[18px] text-red-300 group-hover:text-red-500 transition-colors">chevron_right</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col items-center justify-center pb-8 gap-3 opacity-50">
                    <div className="h-px w-16 bg-border-subtle"></div>
                    <p className="text-xs text-subtle font-medium">Sanskrit Flow v2.4.0</p>
                </div>
            </div>
        </MobileLayout>
    );
};

export default Settings;
