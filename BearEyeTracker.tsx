// import SnowBearNoEyes from "./icons/SnowBearNoEyes";
// import Sunglasses from "./assets/images/sunglasses.png";
// import type { BearEyeTrackerProps } from "./src/types/types";
// import { BearEye } from "./src/components/BearEye";
// import { BearEyebrow } from "./src/components/BearEyebrow";
// import { useInputFocus } from "./src/hooks/useInputFocus";
// import { usePupilTracker } from "./src/hooks/usePupilTracker";
// import { calculateBearLayout } from "./src/utils/calculateBearLayout ";


// export const BearEyeTracker = ({
//     inputRefs,
//     inputValues,
//     passwordRef,
//     isPasswordHidden = true,
//     hasError = false,
//     size = 176,
//     colors,
//     className,
//     style,
// }: BearEyeTrackerProps) => {

//     const { activeInput, isPasswordFocused } = useInputFocus(inputRefs, passwordRef);
//     const { bearRef, pupilOffset } = usePupilTracker(activeInput, inputValues, size);
//     const layout = calculateBearLayout(size);

//     const isFocused = activeInput !== null;

//     const showSunglasses = isPasswordHidden && isPasswordFocused;
//     const showEyebrows = !showSunglasses && hasError;
//     const showEyes = !hasError;



//     const pupilStyle = isFocused
//         ? { transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, transition: 'transform 0.1s ease-out' }
//         : undefined;

//     return (
//         <div
//             className={className}
//             style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 ...style,
//             }}
//         >
//             <div
//                 ref={bearRef}
//                 style={{
//                     position: 'relative',
//                     width: size,
//                     height: size,
//                     borderRadius: '50%',
//                     backgroundColor: colors?.background ?? '#dde8f0',
//                     marginBottom: '1.5rem',
//                     boxShadow: colors?.shadow ?? '0 8px 32px rgba(0,0,0,0.35)',
//                     overflow: 'hidden',
//                 }}
//             >
//                 <SnowBearNoEyes size={size} bodyColor={colors?.body} lineColor={colors?.line} />

//                 {showEyes && (
//                     <>
//                         <BearEye
//                             top={layout.eyeTop}
//                             left={layout.leftEyeX}
//                             eyeSize={layout.eyeSize}
//                             pupilSize={layout.pupilSize}
//                             pupilStyle={pupilStyle}
//                             borderColor={colors?.eye?.border}
//                             scleraColor={colors?.eye?.sclera}
//                             pupilColor={colors?.eye?.pupil}
//                         />
//                         <BearEye
//                             top={layout.eyeTop}
//                             left={layout.rightEyeX}
//                             eyeSize={layout.eyeSize}
//                             pupilSize={layout.pupilSize}
//                             pupilStyle={pupilStyle}
//                             borderColor={colors?.eye?.border}
//                             scleraColor={colors?.eye?.sclera}
//                             pupilColor={colors?.eye?.pupil}
//                         />
//                     </>
//                 )}

//                 {showSunglasses && (
//                     <img
//                         src={Sunglasses}
//                         style={{
//                             position: "absolute",
//                             width: layout.sunglassesWidth,
//                             top: layout.sunglassesTop,
//                             left: layout.sunglassesLeft,
//                         }}
//                     />
//                 )}

//                 {showEyebrows && (
//                     <>
//                         <BearEyebrow
//                             size={layout.eyebrowWidth}
//                             top={layout.eyebrowTop}
//                             left={layout.leftEyebrowLeft}
//                             color={colors?.eyebrow}
//                         />
//                         <BearEyebrow
//                             size={layout.eyebrowWidth}
//                             top={layout.eyebrowTop}
//                             left={layout.rightEyebrowLeft}
//                             color={colors?.eyebrow}
//                         />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }


// import { useEffect, useState } from "react";
// import SnowBearNoEyes from "./icons/SnowBearNoEyes";
// import Sunglasses from "./assets/images/sunglasses.png";
// import type { BearEyeTrackerProps } from "./src/types/types";
// import { BearEye } from "./src/components/BearEye";
// import { BearEyebrow } from "./src/components/BearEyebrow";
// import { useInputFocus } from "./src/hooks/useInputFocus";
// import { usePupilTracker } from "./src/hooks/usePupilTracker";
// import { calculateBearLayout } from "./src/utils/calculateBearLayout ";

// export const BearEyeTracker = ({
//     inputRefs,
//     inputValues,
//     passwordRef,
//     isPasswordHidden = true,
//     hasError = false,
//     size = 176,        // ✅ ResizeObserver 초기 fallback 값으로만 사용
//     colors,
//     className,
//     style,
// }: BearEyeTrackerProps) => {

//     // ✅ 실제 렌더된 크기 상태 (레이아웃 계산용)
//     const [resolvedSize, setResolvedSize] = useState<number>(size);

//     const { activeInput, isPasswordFocused } = useInputFocus(inputRefs, passwordRef);
//     const { bearRef, pupilOffset } = usePupilTracker(activeInput, inputValues); // ✅ size 제거
//     const layout = calculateBearLayout(resolvedSize); // ✅ resolvedSize 사용

//     // ✅ bearRef의 실제 크기를 ResizeObserver로 감지
//     useEffect(() => {
//         const el = bearRef.current;
//         if (!el) return;

//         const observer = new ResizeObserver(([entry]) => {
//             setResolvedSize(entry.contentRect.width);
//         });

//         observer.observe(el);
//         return () => observer.disconnect();
//     }, [bearRef]);

//     const isFocused = activeInput !== null;

//     const showSunglasses = isPasswordHidden && isPasswordFocused;
//     const showEyebrows = !showSunglasses && hasError;
//     const showEyes = !hasError;

//     const pupilStyle = isFocused
//         ? { transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, transition: 'transform 0.1s ease-out' }
//         : undefined;

//     return (
//         <div
//             className={className}   // ✅ className으로 크기 제어 (w-44, w-full 등)
//             style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 ...style,
//             }}
//         >
//             <div
//                 ref={bearRef}
//                 style={{
//                     position: 'relative',
//                     width: '100%',          // ✅ wrapper 크기에 따라 유동적으로
//                     aspectRatio: '1 / 1',   // ✅ height를 width에 맞게 자동 유지
//                     borderRadius: '50%',
//                     backgroundColor: colors?.background ?? '#dde8f0',
//                     marginBottom: '1.5rem',
//                     boxShadow: colors?.shadow ?? '0 8px 32px rgba(0,0,0,0.35)',
//                     overflow: 'hidden',
//                 }}
//             >
//                 <SnowBearNoEyes size={resolvedSize} bodyColor={colors?.body} lineColor={colors?.line} />

//                 {showEyes && (
//                     <>
//                         <BearEye
//                             top={layout.eyeTop}
//                             left={layout.leftEyeX}
//                             eyeSize={layout.eyeSize}
//                             pupilSize={layout.pupilSize}
//                             pupilStyle={pupilStyle}
//                             borderColor={colors?.eye?.border}
//                             scleraColor={colors?.eye?.sclera}
//                             pupilColor={colors?.eye?.pupil}
//                         />
//                         <BearEye
//                             top={layout.eyeTop}
//                             left={layout.rightEyeX}
//                             eyeSize={layout.eyeSize}
//                             pupilSize={layout.pupilSize}
//                             pupilStyle={pupilStyle}
//                             borderColor={colors?.eye?.border}
//                             scleraColor={colors?.eye?.sclera}
//                             pupilColor={colors?.eye?.pupil}
//                         />
//                     </>
//                 )}

//                 {showSunglasses && (
//                     <img
//                         src={Sunglasses}
//                         style={{
//                             position: "absolute",
//                             width: layout.sunglassesWidth,
//                             top: layout.sunglassesTop,
//                             left: layout.sunglassesLeft,
//                         }}
//                     />
//                 )}

//                 {showEyebrows && (
//                     <>
//                         <BearEyebrow
//                             size={layout.eyebrowWidth}
//                             top={layout.eyebrowTop}
//                             left={layout.leftEyebrowLeft}
//                             color={colors?.eyebrow}
//                         />
//                         <BearEyebrow
//                             size={layout.eyebrowWidth}
//                             top={layout.eyebrowTop}
//                             left={layout.rightEyebrowLeft}
//                             color={colors?.eyebrow}
//                         />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

import SnowBearNoEyes from "./icons/SnowBearNoEyes";
import Sunglasses from "./assets/images/sunglasses.png";
import type { BearEyeTrackerProps } from "./src/types/types";
import { BearEye } from "./src/components/BearEye";
import { BearEyebrow } from "./src/components/BearEyebrow";
import { useInputFocus } from "./src/hooks/useInputFocus";
import { usePupilTracker } from "./src/hooks/usePupilTracker";
import { calculateBearLayout } from "./src/utils/calculateBearLayout ";
import { useLayoutEffect, useState } from "react";


export const BearEyeTracker = ({
    inputRefs,
    inputValues,
    passwordRef,
    isPasswordHidden = true,
    hasError = false,
    colors,
    className,
    style,
}: BearEyeTrackerProps) => {

    const [resolvedSize, setResolvedSize] = useState<number | null>(null);
    const { activeInput, isPasswordFocused } = useInputFocus(inputRefs, passwordRef);
    const { bearRef, pupilOffset } = usePupilTracker(activeInput, inputValues);
    const layout = calculateBearLayout(resolvedSize);

    useLayoutEffect(() => {
    const el = bearRef.current;
    if (!el) return;

    // 마운트 직후 동기적으로 크기 읽기 → 깜빡임 없음
    setResolvedSize(el.getBoundingClientRect().width);

    if (typeof ResizeObserver === 'undefined') return;
    
    // SSR 경우 return 하도록(useLayoutEffect)

    const observer = new ResizeObserver(([entry]) => {
        setResolvedSize(entry.contentRect.width);
    }); 

    observer.observe(el);
    return () => observer.disconnect();
}, []);

    const isFocused = activeInput !== null;

    const showSunglasses = isPasswordHidden && isPasswordFocused;
    const showEyebrows = !showSunglasses && hasError;
    const showEyes = !hasError;



    const pupilStyle = isFocused
        ? { transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, transition: 'transform 0.1s ease-out' }
        : undefined;

    return (
        <div
            className={className}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                ...style,
            }}
        >
            <div
                ref={bearRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    visibility: resolvedSize === null ? 'hidden' : 'visible',
                    backgroundColor: colors?.background ?? '#dde8f0',
                    marginBottom: '1.5rem',
                    boxShadow: colors?.shadow ?? '0 8px 32px rgba(0,0,0,0.35)',
                    overflow: 'hidden',
                }}
            >
                {resolvedSize !== null && (
                    <> 
                    <SnowBearNoEyes size={resolvedSize} bodyColor={colors?.body} lineColor={colors?.line} />

                    {showEyes && (
                        <>
                            <BearEye
                                top={layout.eyeTop}
                                left={layout.leftEyeX}
                                eyeSize={layout.eyeSize}
                                pupilSize={layout.pupilSize}
                                pupilStyle={pupilStyle}
                                borderColor={colors?.eye?.border}
                                scleraColor={colors?.eye?.sclera}
                                pupilColor={colors?.eye?.pupil}
                            />
                            <BearEye
                                top={layout.eyeTop}
                                left={layout.rightEyeX}
                                eyeSize={layout.eyeSize}
                                pupilSize={layout.pupilSize}
                                pupilStyle={pupilStyle}
                                borderColor={colors?.eye?.border}
                                scleraColor={colors?.eye?.sclera}
                                pupilColor={colors?.eye?.pupil}
                            />
                        </>
                    )}

                    {showSunglasses && (
                        <img
                            src={Sunglasses}
                            style={{
                                position: "absolute",
                                width: layout.sunglassesWidth,
                                top: layout.sunglassesTop,
                                left: layout.sunglassesLeft,
                            }}
                        />
                    )}

                    {showEyebrows && (
                        <>
                            <BearEyebrow
                                size={layout.eyebrowWidth}
                                top={layout.eyebrowTop}
                                left={layout.leftEyebrowLeft}
                                color={colors?.eyebrow}
                            />
                            <BearEyebrow
                                size={layout.eyebrowWidth}
                                top={layout.eyebrowTop}
                                left={layout.rightEyebrowLeft}
                                color={colors?.eyebrow}
                            />
                        </>
                    )}
                </>
                )
                    }

            </div>
        </div>
    );
}
