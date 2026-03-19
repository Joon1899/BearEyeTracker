import { RATIO } from "../constatns/ratio";

export const calculateBearLayout = (size: number) => {

    const eyeSize = size * RATIO.eyeSize;

    return {
        eyeSize,
        pupilSize: size * RATIO.pupilSize,

        eyeTop: size / 2 + size * RATIO.eyeOffsetY - eyeSize / 2,  
        leftEyeX: size / 2 + size * RATIO.leftEyeOffsetX - eyeSize / 2,
        rightEyeX: size / 2 + size * RATIO.rightEyeOffsetX - eyeSize / 2,

        sunglassesWidth: size * RATIO.sunglassesWidth,
        sunglassesTop: size * RATIO.sunglassesTop,
        sunglassesLeft: size * RATIO.sunglassesLeft,

        eyebrowWidth: size * RATIO.eyebrowWidth,
        eyebrowTop: size / 2 + size * RATIO.eyebrowOffsetY,
        leftEyebrowLeft: size / 2 + size * RATIO.leftEyebrowOffsetX,
        rightEyebrowLeft: size / 2 + size * RATIO.rightEyebrowOffsetX,
    }

}; 
