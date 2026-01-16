import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Settings: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MobileLayout className="bg-background-paper bg-texture-settings font-lexend text-text-main pb-10 antialiased overflow-y-auto no-scrollbar relative border-x border-dashed border-border-subtle/50 bg-white/50">
            <header className="sticky top-0 z-20 bg-background-paper/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-border-subtle shrink-0">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors text-text-main"
                >
                    <span className="material-symbols-outlined text-[20px] font-light">arrow_back</span>
                </button>
                <h1 className="text-xl font-cormorant font-bold tracking-wide text-primary-settings uppercase">Ayarlar</h1>
                <div className="w-8"></div>
            </header>
            <div className="flex flex-col px-6 pt-6 shrink-0">
                <div className="mb-8 relative rounded-lg bg-surface-paper shadow-card border border-border-subtle p-6 flex flex-col items-center text-center">
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary-settings/30"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-settings/30"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary-settings/30"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary-settings/30"></div>
                    <div className="relative mb-3">
                        <div className="h-20 w-20 rounded-full bg-cover bg-center border border-border-subtle shadow-sm grayscale-[20%]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJHHHU0zYLc2GsL45cHTdKmsM4HZfe6rQPaZf9eUGSW4-k2idRim9cIfWeqgiYsUutxKnX-vrslD6IYlavLAlzEsC10Z9f7pQ6jJ_x_NZjndfNogXCAzGo1Yhg2GPS4KHvqijP_-RluhHW7mZjuhru3FJNcvbylIWSYwylanNwIkHdcuf5CSfeH4ry-CVMGtvSLudopaf04-qa4pgWppX0VxlVp3Ax8d5usaeJSZFP-eMwuI4JTG1kuCWOohFzmwAjY-BTt4_sgTk")' }}></div>
                        <button className="absolute bottom-0 right-0 bg-white text-primary-settings rounded-full p-1.5 shadow-sm border border-border-subtle hover:bg-primary-settings hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[14px] block">edit</span>
                        </button>
                    </div>
                    <h2 className="text-2xl font-cormorant font-semibold text-text-main">Ali Yılmaz</h2>
                    <p className="text-primary-settings font-cormorant italic text-lg mt-1">Sanskritçe Başlangıç</p>
                    <div className="mt-4 flex items-center justify-center gap-2 px-3 py-1 bg-background-paper rounded-full border border-border-subtle">
                        <span className="material-symbols-outlined text-primary-settings text-[16px]">local_fire_department</span>
                        <span className="text-text-muted text-xs font-medium tracking-wide uppercase">12 Günlük Seri</span>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="px-1 mb-3 text-xs font-bold text-text-muted uppercase tracking-[0.15em] font-lexend">Çalışma Tercihleri</h3>
                    <div className="flex flex-col bg-surface-paper border-y border-border-subtle divide-y divide-border-subtle/50">
                        <button className="flex items-center justify-between p-4 w-full hover:bg-background-paper transition-colors group">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary-settings transition-colors font-light">target</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Günlük Hedef</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-lexend text-primary-settings">20 Kart</span>
                                <span className="material-symbols-outlined text-[18px] text-gray-300">chevron_right</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-between p-4 w-full hover:bg-background-paper transition-colors group">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary-settings transition-colors font-light">school</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Seviye</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-lexend text-primary-settings">Başlangıç</span>
                                <span className="material-symbols-outlined text-[18px] text-gray-300">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="px-1 mb-3 text-xs font-bold text-text-muted uppercase tracking-[0.15em] font-lexend">Uygulama</h3>
                    <div className="flex flex-col bg-surface-paper border-y border-border-subtle divide-y divide-border-subtle/50">
                        <div className="flex items-center justify-between p-4 w-full">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted font-light">dark_mode</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Karanlık Mod</span>
                            </div>
                            <div className="relative inline-block w-10 align-middle select-none">
                                <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 checked:right-0 checked:border-primary-settings right-5 z-10" id="toggle-dark" name="toggle-dark" type="checkbox" />
                                <label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-dark"></label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 w-full">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted font-light">notifications</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Hatırlatıcılar</span>
                            </div>
                            <div className="relative inline-block w-10 align-middle select-none">
                                <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 checked:right-0 checked:border-primary-settings right-5 z-10" id="toggle-notif" name="toggle-notif" type="checkbox" />
                                <label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-notif"></label>
                            </div>
                        </div>
                        <button className="flex items-center justify-between p-4 w-full hover:bg-background-paper transition-colors group">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary-settings transition-colors font-light">language</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Dil</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-lexend text-text-muted">Türkçe</span>
                                <span className="material-symbols-outlined text-[18px] text-gray-300">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="mb-12">
                    <h3 className="px-1 mb-3 text-xs font-bold text-text-muted uppercase tracking-[0.15em] font-lexend">Destek &amp; Hesap</h3>
                    <div className="flex flex-col bg-surface-paper border-y border-border-subtle divide-y divide-border-subtle/50">
                        <button className="flex items-center justify-between p-4 w-full hover:bg-background-paper transition-colors group">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary-settings transition-colors font-light">mail</span>
                                <span className="text-base font-cormorant font-medium text-text-main">Bize Ulaşın</span>
                            </div>
                            <span className="material-symbols-outlined text-[18px] text-gray-300">chevron_right</span>
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center justify-between p-4 w-full hover:bg-red-50/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px] text-primary-settings/80 font-light">logout</span>
                                <span className="text-base font-cormorant font-medium text-primary-settings">Çıkış Yap</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pb-8 gap-3 opacity-60">
                    <div className="h-px w-12 bg-border-subtle"></div>
                    <p className="text-[10px] uppercase tracking-widest text-text-muted font-lexend">Sanskrit Cards v2.4.0</p>
                </div>
            </div>
        </MobileLayout>
    );
};

export default Settings;
