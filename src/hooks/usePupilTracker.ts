// import { useEffect, useRef, useState } from "react";
// import { RATIO } from "../constatns/ratio";

// export const usePupilTracker = (
//     activeInput: HTMLInputElement | null, 
//     inputValues: string[], 
//     size: number, 
// ) => {
 
//     const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
//     const bearRef = useRef<HTMLDivElement | null>(null);
   
//     useEffect(() => {
//             if (!bearRef.current) return;
//             if (!activeInput) return;
    
//             const bearRect = bearRef.current.getBoundingClientRect();
//             const bearCenterX = bearRect.left + bearRect.width / 2;
//             const bearCenterY = bearRect.top + bearRect.height / 2;
    
//             const inputRect = activeInput.getBoundingClientRect();
//             const fontSize = parseFloat(getComputedStyle(activeInput).fontSize);
//             const charWidth = fontSize * RATIO.charWidth; 
//             const currentValue = activeInput.value;
            
//             const targetX = inputRect.left + Math.min(currentValue.length * charWidth, inputRect.width - 16) + 8;
//             const targetY = inputRect.top + inputRect.height / 2;
    
//             const dx = targetX - bearCenterX;
//             const dy = targetY - bearCenterY;
//             const angle = Math.atan2(dy, dx);

//             const  maxPupilOffset = size * RATIO.maxPupilOffset; 
    
//             setPupilOffset({
//                 x: Math.cos(angle) * maxPupilOffset,
//                 y: Math.sin(angle) * maxPupilOffset,
//             });
//         }, [activeInput, inputValues, size]);

//         return { bearRef, pupilOffset }; 

// }; 
// import { useEffect, useRef, useState } from "react";
// import { RATIO } from "../constatns/ratio";

// export const usePupilTracker = (
//     activeInput: HTMLInputElement | null, 
//     inputValues: string[], 
//     size: number, 
// ) => {
 
//     const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
//     const bearRef = useRef<HTMLDivElement | null>(null);
   
//     useEffect(() => {
//             if (!bearRef.current) return;
//             if (!activeInput) return;
    
//             const bearRect = bearRef.current.getBoundingClientRect();
//             const bearCenterX = bearRect.left + bearRect.width / 2;
//             const bearCenterY = bearRect.top + bearRect.height / 2;
    
//             const inputRect = activeInput.getBoundingClientRect();
//             const fontSize = parseFloat(getComputedStyle(activeInput).fontSize);
//             const charWidth = fontSize * RATIO.charWidth; 
//             const currentValue = activeInput.value;
            
//             const targetX = inputRect.left + Math.min(currentValue.length * charWidth, inputRect.width - 16) + 8;
//             const targetY = inputRect.top + inputRect.height / 2;
    
//             const dx = targetX - bearCenterX;
//             const dy = targetY - bearCenterY;
//             const angle = Math.atan2(dy, dx);

//             const  maxPupilOffset = size * RATIO.maxPupilOffset; 
    
//             setPupilOffset({
//                 x: Math.cos(angle) * maxPupilOffset,
//                 y: Math.sin(angle) * maxPupilOffset,
//             });
//         }, [activeInput, inputValues, size]);

//         return { bearRef, pupilOffset }; 

// }; 

import { useEffect, useRef, useState } from "react";
import { RATIO } from "../constants/ratio";

export const usePupilTracker = (
    activeInput: HTMLInputElement | null,
    inputValues: string[],
) => {
    const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
    const bearRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!bearRef.current) return;
        if (!activeInput) return;

        const bearRect = bearRef.current.getBoundingClientRect();
        const bearCenterX = bearRect.left + bearRect.width / 2;
        const bearCenterY = bearRect.top + bearRect.height / 2;

        // ✅ bearRef의 실제 크기로 maxPupilOffset 계산 (size prop 불필요)
        const resolvedSize = bearRect.width;

        const inputRect = activeInput.getBoundingClientRect();
        const fontSize = parseFloat(getComputedStyle(activeInput).fontSize);
        const charWidth = fontSize * RATIO.charWidth;
        const currentValue = activeInput.value;

        const targetX = inputRect.left + Math.min(currentValue.length * charWidth, inputRect.width - 16) + 8;
        const targetY = inputRect.top + inputRect.height / 2;

        const dx = targetX - bearCenterX;
        const dy = targetY - bearCenterY;
        const angle = Math.atan2(dy, dx);

        const maxPupilOffset = resolvedSize * RATIO.maxPupilOffset;

        setPupilOffset({
            x: Math.cos(angle) * maxPupilOffset,
            y: Math.sin(angle) * maxPupilOffset,
        });
    }, [activeInput, inputValues]); // ✅ size 의존성 제거

    return { bearRef, pupilOffset };
};