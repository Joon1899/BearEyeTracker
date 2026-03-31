import { useEffect, useState } from "react";

export const useInputFocus = (
    inputRefs: React.RefObject<HTMLInputElement | null>[],
    passwordRef?: React.RefObject<HTMLInputElement | null>
) => {

    const [activeInput, setActiveInput] = useState<HTMLInputElement | null>(null);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    useEffect(() => {
        const handlers: Array<{ el: HTMLInputElement; onFocus: () => void; onBlur: () => void; }> = [];

        inputRefs.forEach((ref) => {
            if (!ref.current) return;

            const isPassword = ref === passwordRef;

            const onFocus = () => {
                setActiveInput(ref.current);
                if (isPassword) setIsPasswordFocused(true);
            };
            const onBlur = () => {
                setActiveInput(null);
                if (isPassword) setIsPasswordFocused(false);
            };

            ref.current.addEventListener('focus', onFocus);
            ref.current.addEventListener('blur', onBlur);
            handlers.push({ el: ref.current, onFocus, onBlur });
        });

        return () => {
            handlers.forEach(({ el, onFocus, onBlur }) => {
                el.removeEventListener('focus', onFocus);
                el.removeEventListener('blur', onBlur);
            });
        };
    }, [inputRefs.length, ...inputRefs.map(r => r.current), passwordRef]);
    
    return { activeInput, isPasswordFocused }; 

}