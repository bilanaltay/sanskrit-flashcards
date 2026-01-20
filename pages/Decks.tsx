import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "../components/MobileLayout";
import { DECKS } from "../constants"; // Keep for card data lookup
import { supabase } from "../utils/supabaseClient";

const Decks: React.FC = () => {
  const navigate = useNavigate();
  const [decks, setDecks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const { data, error } = await supabase
          .from('decks')
          .select('*')
          .order('id');

        if (error) {
          console.error('Error fetching decks:', error);
          return;
        }

        if (data) {
          const mergedDecks = data.map((dbDeck: any) => {
            const localDeck = DECKS[dbDeck.id];
            return {
              id: dbDeck.id,
              title: dbDeck.title,
              description: dbDeck.description,
              version: dbDeck.version,
              themeColor: dbDeck.theme_color,
              defaultLang: dbDeck.default_lang,
              cards: localDeck ? localDeck.cards : [],
            };
          });
          setDecks(mergedDecks);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDecks();
  }, []);

  return (
    <MobileLayout className="bg-paper-dark font-sans text-ink flex flex-col relative">
      {/* Header - clean, modern hierarchy */}
      <header className="flex items-end justify-between px-6 pt-14 pb-6 bg-paper-dark z-10 sticky top-0 shrink-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-[28px] font-semibold text-ink tracking-tight leading-tight">
            Desteler
          </h1>
          <p className="text-sm text-subtle font-medium">
            Sanskritçe kartlarla öğren
          </p>
        </div>
        <button
          onClick={() => navigate("/settings")}
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface-card hover:bg-primary-light transition-all duration-200 shadow-sm border border-border-subtle"
        >
          <span className="material-symbols-outlined text-ink-light text-[22px]">
            settings
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scroll-smooth z-0">
        {/* Search Bar - modern, prominent */}
        <div className="mb-8 flex w-full items-center rounded-xl bg-surface-card border border-border-subtle h-14 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40">
          <div className="flex items-center justify-center pl-5 pr-3 text-subtle">
            <span className="material-symbols-outlined text-[22px]">
              search
            </span>
          </div>
          <input
            className="w-full bg-transparent border-none text-base text-ink placeholder:text-subtle focus:ring-0 focus:outline-none h-full font-sans"
            placeholder="Destelerde ara..."
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-10 w-10 border-[3px] border-primary/20 border-t-primary"></div>
          </div>
        ) : decks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-subtle">
            <span className="material-symbols-outlined text-5xl mb-3">sentiment_dissatisfied</span>
            <p className="text-base font-medium">Deste bulunamadı.</p>
          </div>
        ) : (
          /* Deck List */
          <div className="flex flex-col gap-5">
            {decks.map((deck) => (
              <div
                key={deck.id}
                onClick={() => navigate(`/study/${deck.id}`)}
                className={`group relative flex flex-col bg-gradient-to-br ${deck.themeColor || "from-[#fed9b7] to-[#f07e6e]"} rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden`}
              >
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                
                <div className="relative flex items-center gap-4">
                  {/* Icon Container */}
                  <div className="flex items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm border border-white/30 shadow-sm shrink-0 w-14 h-14">
                    <span className="material-symbols-outlined text-[26px] text-ink">
                      menu_book
                    </span>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <p className="text-xl font-semibold leading-snug text-ink truncate">
                      {deck.title}
                    </p>
                    <p className="text-ink/70 text-sm mt-1 font-medium">
                      {deck.description} • {deck.cards?.length || 0} Kart
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <span className="material-symbols-outlined text-ink/40 group-hover:text-ink/70 group-hover:translate-x-1 transition-all duration-200">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Navigation - modern, floating style */}
      <nav className="absolute bottom-0 left-0 right-0 mx-4 mb-4 bg-surface-card/95 backdrop-blur-xl rounded-2xl border border-border-subtle shadow-float px-6 py-3 flex items-center justify-around z-20">
        <button className="flex flex-col items-center justify-center gap-1.5 text-primary w-16 py-1">
          <span className="material-symbols-outlined text-[26px]">
            grid_view
          </span>
          <span className="text-[11px] font-semibold tracking-wide">
            DESTELER
          </span>
        </button>
        <button
          onClick={() => navigate("/favorites")}
          className="flex flex-col items-center justify-center gap-1.5 text-subtle hover:text-primary transition-colors w-16 py-1 group"
        >
          <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">
            favorite
          </span>
          <span className="text-[11px] font-medium tracking-wide">
            FAVORİLER
          </span>
        </button>
        <button
          onClick={() => navigate("/statistics")}
          className="flex flex-col items-center justify-center gap-1.5 text-subtle hover:text-primary transition-colors w-16 py-1 group"
        >
          <span className="material-symbols-outlined text-[26px] group-hover:-translate-y-0.5 transition-transform">
            bar_chart
          </span>
          <span className="text-[11px] font-medium tracking-wide">
            İSTATİSTİK
          </span>
        </button>
      </nav>
    </MobileLayout>
  );
};

export default Decks;
