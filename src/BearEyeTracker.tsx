import SnowBearNoEyes from "./icons/SnowBearNoEyes";
import Sunglasses from "../assets/images/sunglasses.png";
import type { BearEyeTrackerProps } from "./types/types";
import { BearEye } from "./components/BearEye";
import { BearEyebrow } from "./components/BearEyebrow";
import { useInputFocus } from "./hooks/useInputFocus";
import { usePupilTracker } from "./hooks/usePupilTracker";
import { calculateBearLayout } from "./utils/calculateBearLayout ";
import { useLayoutEffect, useState } from "react";


const BearEyeTracker = ({
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
export default BearEyeTracker; 