import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const PasswordInteractionExample = () => {

    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);


    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0]">
            <BearEyeTracker
                inputRefs={[passwordRef]}
                inputValues={[password]}
                passwordRef={passwordRef}
                isPasswordHidden={isPasswordHidden}
            />
            <div className="relative w-64">
                <input
                    ref={passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)]"
                >
                </input>
                <button
                    type="button"
                    onClick={() => setIsPasswordHidden(prev => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                    tabIndex={1}
                >
                    {isPasswordHidden ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    )}
                </button>
            </div>

        </div>
    )


};

export default PasswordInteractionExample; 