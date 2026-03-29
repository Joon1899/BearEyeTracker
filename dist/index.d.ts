import { JSX } from 'react/jsx-runtime';

declare interface BearColors {
    background?: string;
    shadow?: string;
    body?: string;
    line?: string;
    eye?: {
        border?: string;
        sclera?: string;
        pupil?: string;
    };
    eyebrow?: string;
}

export declare const BearEyeTracker: ({ inputRefs, inputValues, passwordRef, isPasswordHidden, hasError, colors, className, style, }: BearEyeTrackerProps) => JSX.Element;

declare interface BearEyeTrackerProps {
    inputRefs: React.RefObject<HTMLInputElement | null>[];
    inputValues: string[];
    passwordRef?: React.RefObject<HTMLInputElement | null>;
    isPasswordHidden?: boolean;
    hasError?: boolean;
    size?: number;
    colors?: BearColors;
    className?: string;
    style?: React.CSSProperties;
}

export { }
