import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Auth: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle login vs signup logic
        navigate('/decks');
    };

    return (
        <MobileLayout className="bg-paper font-sans text-ink relative overflow-hidden">
            {/* Decorative Background Blurs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            
            {/* Main Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 overflow-y-auto no-scrollbar">
                {/* Logo & Branding */}
                <div className="text-center mb-8 flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 mb-4 relative">
                        <svg
                            className="w-full h-full  stroke-ink fill-none stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 100 100"
                        >
                            <g className="mudra-line">
                                <path d="M50 20 C60 40 70 55 50 85 C30 55 40 40 50 20 Z" />
                                <path d="M50 85 C40 65 30 55 35 40" />
                                <path d="M50 85 C60 65 70 55 65 40" />
                                <path d="M50 85 C35 70 20 60 25 45" />
                                <path d="M50 85 C65 70 80 60 75 45" />
                                <circle cx="50" cy="92" r="1.5" className="fill-current stroke-none" />
                                <circle cx="45" cy="90" r="1" className="fill-current stroke-none" />
                                <circle cx="55" cy="90" r="1" className="fill-current stroke-none" />
                            </g>
                        </svg>
                    </div>
                    <h1 className="font-dancing text-5xl text-primary-auth mb-2">Mudra</h1>
                    <p className="font-cormorant text-xl italic text-black">मुद्रा</p>
                    <p className="text-sm mt-2 text-black tracking-wide uppercase text-[10px]">Ancient Wisdom • Modern Learning</p>
                </div>

                {/* Auth Card */}
                <div className="bg-surface-card rounded-2xl shadow-card p-6 w-full border border-border-subtle shrink-0">
                    {/* Tab Switcher */}
                    <div className="flex bg-paper-dark rounded-xl p-1 mb-6">
                        <button 
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${isLogin ? 'bg-surface-card shadow-sm text-primary' : 'text-subtle hover:text-ink'}`}
                        >
                            Giriş Yap
                        </button>
                        <button 
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${!isLogin ? 'bg-surface-card shadow-sm text-primary' : 'text-subtle hover:text-ink'}`}
                        >
                            Kayıt Ol
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="name">İsim</label>
                                    <input 
                                        className="block w-full px-3 py-3 border border-border-subtle rounded-xl bg-paper-dark focus:border-primary focus:ring-2 focus:ring-primary/20 text-base transition-all placeholder:text-subtle" 
                                        id="name" 
                                        placeholder="Ali" 
                                        type="text" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="surname">Soyisim</label>
                                    <input 
                                        className="block w-full px-3 py-3 border border-border-subtle rounded-xl bg-paper-dark focus:border-primary focus:ring-2 focus:ring-primary/20 text-base transition-all placeholder:text-subtle" 
                                        id="surname" 
                                        placeholder="Yılmaz" 
                                        type="text" 
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="email">E-posta</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-subtle text-[20px]">mail</span>
                                </div>
                                <input 
                                    className="block w-full pl-10 pr-4 py-3 border border-border-subtle rounded-xl bg-paper-dark focus:border-primary focus:ring-2 focus:ring-primary/20 text-base transition-all placeholder:text-subtle" 
                                    id="email" 
                                    placeholder="ornek@email.com" 
                                    type="email" 
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="password">Şifre</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-subtle text-[20px]">lock</span>
                                </div>
                                <input 
                                    className="block w-full pl-10 pr-10 py-3 border border-border-subtle rounded-xl bg-paper-dark focus:border-primary focus:ring-2 focus:ring-primary/20 text-base transition-all placeholder:text-subtle" 
                                    id="password" 
                                    placeholder="••••••••" 
                                    type="password" 
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                    <span className="material-symbols-outlined text-subtle text-[20px] hover:text-ink transition-colors">visibility_off</span>
                                </div>
                            </div>
                            {isLogin && (
                                <div className="flex justify-end mt-2">
                                    <a className="text-xs text-primary hover:text-primary-intro-dark font-medium transition-colors" href="#">Şifremi Unuttum</a>
                                </div>
                            )}
                        </div>
                        <button 
                            className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-sm text-base font-semibold text-white bg-primary hover:bg-primary-intro-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98] mt-2" 
                            type="submit"
                        >
                            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative mt-6 mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border-subtle" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-4 bg-surface-card text-subtle font-medium">veya</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <button 
                        className="flex items-center justify-center w-full px-4 py-3 border border-border-subtle rounded-xl bg-paper-dark text-sm font-medium text-ink hover:bg-paper-texture transition-colors" 
                        type="button"
                    >
                        <img 
                            alt="Google logo" 
                            className="h-5 w-5 mr-3" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk42XKQYcXjhAd9s1oNIRtwIgjmxY96vS1gXVg-3JHtIfJ_T4V20aBA_jfcDh9bD9qCNIgQmOhAiGWhY_VeApyTRHpZrEoXlTUcW5h1oeR-X44q7zoU2TCYgCTbDy4uzFZ9OC08fJRnrdCd6WjndFLifpUw9ADY2EkCUCHrkBMGRufw7nTgosf6iAbtqumDIi47nx0zfldW9Ngq_zy3rEVxH4DSVkKymdSLoBGXEsrYB1r4I4piGcC9PT-Y1WqK4Z717D3ffe4zoU" 
                        />
                        Google ile Devam Et
                    </button>
                    
                    {/* Terms - Slightly adjusted for space */}
                    <p className="mt-6 text-center text-[10px] text-subtle shrink-0">
                        Devam ederek 
                        <a className="font-medium text-primary hover:text-primary-intro-dark mx-1" href="#">Kullanım Şartları</a>
                        ve
                        <a className="font-medium text-primary hover:text-primary-intro-dark ml-1" href="#">Gizlilik Politikası</a>'nı kabul edersiniz.
                    </p>
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 p-4 opacity-15 pointer-events-none">
                <svg className="stroke-ink fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M2 15 V 2 H 15" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none">
                <svg className="stroke-ink fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M25 2 H 38 V 15" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-15 pointer-events-none">
                <svg className="stroke-ink fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M2 25 V 38 H 15" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-15 pointer-events-none">
                <svg className="stroke-ink fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M25 38 H 38 V 25" strokeWidth="2" />
                </svg>
            </div>
        </MobileLayout>
    );
};

export default Auth;
