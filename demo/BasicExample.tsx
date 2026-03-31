import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const BasicExample = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0] px-4">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                className="sm:w-48 md:w-64"
            />
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-full max-w-xs sm:max-w-sm rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)]"
            />
        </div>
    );
};

export default BasicExample;
