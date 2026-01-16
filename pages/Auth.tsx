import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '../components/MobileLayout';

const Auth: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/decks');
    };

    return (
        <MobileLayout className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-noto-sans relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay bg-paper-pattern"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-auth opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-auth opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 overflow-y-auto no-scrollbar">
                <div className="text-center mb-10 flex flex-col items-center shrink-0">
                    <div className="w-24 h-24 mb-4 relative">
                        <svg className="w-full h-full stroke-gray-800 dark:stroke-gray-200 fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
                            <path className="mudra-line" d="M50 85 C 40 85, 30 80, 25 70 L 25 50 C 25 45, 28 40, 30 35 L 35 20 C 36 15, 40 12, 45 15 C 48 17, 48 22, 47 25 L 45 35 M 45 35 L 50 15 C 51 10, 56 8, 60 10 C 63 12, 63 17, 62 20 L 58 35 M 58 35 L 65 20 C 66 15, 71 13, 75 15 C 78 17, 78 22, 77 25 L 70 45 L 75 45 C 80 45, 85 50, 85 55 L 85 65 C 85 75, 75 85, 65 85 Z"></path>
                            <circle className="fill-primary-auth stroke-none" cx="50" cy="50" r="1"></circle>
                        </svg>
                    </div>
                    <h1 className="font-dancing text-5xl text-primary-auth mb-2">Mudra</h1>
                    <p className="font-cormorant text-xl italic text-gray-600 dark:text-gray-400">मुद्रा</p>
                    <p className="text-sm mt-2 text-text-secondary dark:text-text-secondary-dark tracking-wide uppercase text-[10px]">Ancient Wisdom • Modern Learning</p>
                </div>
                <div className="bg-card-light dark:bg-card-dark rounded-xl paper-shadow-auth p-8 w-full border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 shrink-0">
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-8">
                        <button className="flex-1 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-700 shadow-sm text-primary-auth transition-all duration-200">Log In</button>
                        <button className="flex-1 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200">Sign Up</button>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-cormorant font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 text-lg">mail_outline</span>
                                </div>
                                <input className="block w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:border-primary-auth focus:ring-0 sm:text-sm transition-colors placeholder-gray-400 dark:placeholder-gray-600 dark:text-white" id="email" placeholder="yogi@example.com" type="email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-cormorant font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 text-lg">lock_outline</span>
                                </div>
                                <input className="block w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-transparent focus:border-primary-auth focus:ring-0 sm:text-sm transition-colors placeholder-gray-400 dark:placeholder-gray-600 dark:text-white" id="password" placeholder="••••••••" type="password" />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                    <span className="material-icons text-gray-400 text-lg hover:text-gray-600">visibility_off</span>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <a className="text-xs text-primary-auth hover:text-primary-auth-dark font-medium" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-auth hover:bg-primary-auth-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-auth transition-transform transform active:scale-95" type="submit">
                            Begin Journey
                        </button>
                    </form>
                    <div className="relative mt-8 mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-card-light dark:bg-card-dark text-gray-500 dark:text-gray-400 font-cormorant italic">or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" type="button">
                            <img alt="Google logo" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk42XKQYcXjhAd9s1oNIRtwIgjmxY96vS1gXVg-3JHtIfJ_T4V20aBA_jfcDh9bD9qCNIgQmOhAiGWhY_VeApyTRHpZrEoXlTUcW5h1oeR-X44q7zoU2TCYgCTbDy4uzFZ9OC08fJRnrdCd6WjndFLifpUw9ADY2EkCUCHrkBMGRufw7nTgosf6iAbtqumDIi47nx0zfldW9Ngq_zy3rEVxH4DSVkKymdSLoBGXEsrYB1r4I4piGcC9PT-Y1WqK4Z717D3ffe4zoU" />
                            Google
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" type="button">
                            <img alt="GitHub logo" className="h-5 w-5 mr-2 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB9p4-jjJcl0RSWviGn55A6EsuTaG8u-8S0FmrYGFw0Mzl3rVXWATb3g5oNbTTU_6oOB6gZ9Ay28Gb8hH97-dr6gORO031JhGTXiFMa2k_tzk9GGc2-QWErYhVqvnZV_xgYeP3TXZ84e_8H2NuqruIq_IQUJQVEwM5mdC3L5oVhKVuXrteRYJNTg_eyU5O7iQFqMrkuPz12gGQ5oxUfLIvtF0BBGrVpRgJkoqK-z-tP8Z8MNkHLdH9903lqUTyWM64muWdlosXa4w" />
                            Apple
                        </button>
                    </div>
                </div>
                <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-500 shrink-0">
                    By continuing, you agree to our
                    <a className="font-medium text-primary-auth hover:text-primary-auth-dark underline decoration-dotted ml-1" href="#">Terms of Service</a>
                    <span className="mx-1">and</span>
                    <a className="font-medium text-primary-auth hover:text-primary-auth-dark underline decoration-dotted" href="#">Privacy Policy</a>.
                </p>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-20 pointer-events-none">
                <svg className="stroke-gray-900 dark:stroke-white fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M2 15 V 2 H 15" strokeWidth="2"></path>
                </svg>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <svg className="stroke-gray-900 dark:stroke-white fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M25 2 H 38 V 15" strokeWidth="2"></path>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-20 pointer-events-none">
                <svg className="stroke-gray-900 dark:stroke-white fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M2 25 V 38 H 15" strokeWidth="2"></path>
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-20 pointer-events-none">
                <svg className="stroke-gray-900 dark:stroke-white fill-none" height="40" viewBox="0 0 40 40" width="40">
                    <path d="M25 38 H 38 V 25" strokeWidth="2"></path>
                </svg>
            </div>
        </MobileLayout>
    );
};

export default Auth;
