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
        <MobileLayout className="bg-texture-fav text-ink font-noto-serif relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-auth opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-auth opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 overflow-y-auto no-scrollbar">
                <div className="text-center mb-10 flex flex-col items-center shrink-0">
                    <div className="w-24 h-24 mb-4 relative">
                        <svg
                            className="w-full h-full stroke-gray-800 dark:stroke-gray-200 fill-none stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 100 100"
                        >
                            <g className="mudra-line">
                                {/* Central Petal */}
                                <path d="M50 20 C60 40 70 55 50 85 C30 55 40 40 50 20 Z" />
                                {/* Inner Left */}
                                <path d="M50 85 C40 65 30 55 35 40" />
                                {/* Inner Right */}
                                <path d="M50 85 C60 65 70 55 65 40" />
                                {/* Outer Left */}
                                <path d="M50 85 C35 70 20 60 25 45" />
                                {/* Outer Right */}
                                <path d="M50 85 C65 70 80 60 75 45" />
                                {/* Base Dots */}
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
                    <div className="flex justify-center w-full">
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto" type="button">
                            <img alt="Google logo" className="h-5 w-5 mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk42XKQYcXjhAd9s1oNIRtwIgjmxY96vS1gXVg-3JHtIfJ_T4V20aBA_jfcDh9bD9qCNIgQmOhAiGWhY_VeApyTRHpZrEoXlTUcW5h1oeR-X44q7zoU2TCYgCTbDy4uzFZ9OC08fJRnrdCd6WjndFLifpUw9ADY2EkCUCHrkBMGRufw7nTgosf6iAbtqumDIi47nx0zfldW9Ngq_zy3rEVxH4DSVkKymdSLoBGXEsrYB1r4I4piGcC9PT-Y1WqK4Z717D3ffe4zoU" />
                            Google
                        </button>
                    </div>
                </div>
                <p className="mt-8 text-center text-xs text-black shrink-0">
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
