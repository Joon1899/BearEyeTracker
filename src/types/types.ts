interface BearColors {
    body?: string;
    line?: string;
    eye?: {
        border?: string;
        sclera?: string;
        pupil?: string;
    };
    eyebrow?: string;
}

export interface BearEyeTrackerProps {
    inputRefs: React.RefObject<HTMLInputElement | null>[];
    inputValues: string[];
    passwordRef?: React.RefObject<HTMLInputElement | null>;
    isPasswordHidden: boolean;
    hasError: boolean;
    size: number;
    colors?: BearColors;
}