import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const CustomTheme = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4f8]">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                colors={{
                    background: '#e2eaf2',
                    shadow: '0 8px 32px rgba(100,130,160,0.2)',
                    body: '#c8d8e8',
                    line: '#4a6fa5',
                    eyebrow: '#4a6fa5',
                    eye: {
                        border: '#4a6fa5',
                        sclera: '#f0f4f8',
                        pupil: '#2c4a6e',
                    }
                }}
                className="w-64"
            />
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-64 rounded-2xl border-2 border-[#b0c4d8] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#4a6fa5] focus:shadow-[0_0_0_4px_rgba(74,111,165,0.15)]"
            />
        </div>
    );
};

export default CustomTheme;