import { RATIO } from "../constatns/ratio";

export const calculateBearLayout = (size: number | null) => {
    if(size === null) return{
        eyeSize: 0,
        pupilSize: 0,
        eyeTop: 0,
        leftEyeX: 0,
        rightEyeX: 0,
        sunglassesWidth: 0,
        sunglassesTop: 0,
        sunglassesLeft: 0,
        eyebrowWidth: 0,
        eyebrowTop: 0,
        leftEyebrowLeft: 0,
        rightEyebrowLeft: 0,
    }


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
