import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const ErrorStateExample = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false);

    return (
        <form className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0]">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                hasError={hasError}
            />
            <input
                type="email"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onInvalid={() => setHasError(true)}
                placeholder="Type something..."
                className="w-64 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)]"
            />
            <button
                type="submit"
                className="mt-2 w-64 rounded-2xl bg-[#374151] py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#1f2937] hover:shadow-[0_4px_16px_rgba(55,65,81,0.35)] active:scale-[0.98]"
            >
                Login
            </button>
        </form>
    );
};

export default ErrorStateExample; 