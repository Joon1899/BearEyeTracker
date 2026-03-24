import SnowBearNoEyes from "./icons/SnowBearNoEyes";
import Sunglasses from "./assets/images/sunglasses.png";
import type { BearEyeTrackerProps } from "./src/types/types";
import { BearEye } from "./src/components/BearEye";
import { BearEyebrow } from "./src/components/BearEyebrow";
import { useInputFocus } from "./src/hooks/useInputFocus";
import { usePupilTracker } from "./src/hooks/usePupilTracker";
import { calculateBearLayout } from "./src/utils/calculateBearLayout ";


export const BearEyeTracker = ({
    inputRefs,
    inputValues,
    passwordRef,
    isPasswordHidden = true,
    hasError = false,
    size = 176,
    colors,
    className,
    style,
}: BearEyeTrackerProps) => {

    const { activeInput, isPasswordFocused } = useInputFocus(inputRefs, passwordRef);
    const { bearRef, pupilOffset } = usePupilTracker(activeInput, inputValues, size);
    const layout = calculateBearLayout(size);

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
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: colors?.background ?? '#dde8f0',
                    marginBottom: '1.5rem',
                    boxShadow: colors?.shadow ?? '0 8px 32px rgba(0,0,0,0.35)',
                    overflow: 'hidden',
                }}
            >
                <SnowBearNoEyes size={size} bodyColor={colors?.body} lineColor={colors?.line} />

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
            </div>
        </div>
    );
}

