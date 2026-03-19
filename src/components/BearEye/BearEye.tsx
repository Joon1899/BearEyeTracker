import type { BearEyeProps } from "./types";

export function BearEye({
  top,
  left,
  eyeSize,
  pupilSize,
  pupilStyle,
  borderColor = '#374151',
  scleraColor = '#ffffff',
  pupilColor = '#1a1a2e',
}: BearEyeProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
      }}
    >
      <div
        style={{
          width: eyeSize,
          height: eyeSize,
          borderRadius: '50%',
          backgroundColor: scleraColor,
          border: `${Math.max(1, eyeSize * 0.08)}px solid ${borderColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: pupilSize,
            height: pupilSize,
            borderRadius: '50%',
            backgroundColor: pupilColor,
            flexShrink: 0,
            ...pupilStyle,
          }}
        />
      </div>
    </div>
  );
}
