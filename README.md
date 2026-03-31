# BearEyeTracker
A React bear avatar component that tracks eye movement and reacts to form input focus


## Quick Start
> No styling dependencies. </br>
> TailwindCSS is used in examples for demonstration only.
```jsx
import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const BearEyeTrackerDemo = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    return (
        <form className="flex flex-col">
            <BearEyeTracker
                inputRefs={[emailRef, passwordRef]}
                passwordRef={passwordRef}
                inputValues={[email, password]}
                hasError={hasError}
            />
            <input
                type="email"
                ref={emailRef}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInvalid={() => setHasError(true)}
            />
            <input
                ref={passwordRef}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
        </form>

    )
};

export default BearEyeTrackerDemo; 
```

## Installation 

**npm**
``` bash
npm install bear-eye-tracker
```
**pnpm**
``` bash
pnpm install bear-eye-tracker
```
**yarn**
``` bash
yarn add bear-eye-tracker
```

## Peer Dependencies

This package requires the following peer dependencies:

| Package | Version |
|---------|---------|
| react | ^18 || ^19 |
| react-dom | ^18 || ^19 |

Install them if you haven't already:

**npm**
```bash
npm install react react-dom
```

**pnpm**
```bash
pnpm install react react-dom
```

**yarn**
```bash
yarn add react react-dom
```

## Usage
```jsx
import { BearEyeTracker } from "bear-eye-tracker"  
```
### minimal
```jsx
<BearEyeTracker
  inputRefs={[emailRef, passwordRef]}
  inputValues={[email, password]}
/>
```
> The bear fills its parent container (`width: 100%`). Set a width via `className` or `style` as needed.
### Full
```jsx
<BearEyeTracker
  inputRefs={[emailRef, passwordRef]}
  inputValues={[email, password]}
  passwordRef={passwordRef}
  isPasswordHidden={true}
  hasError={false}
  colors={{
    background: '#dde8f0',
    shadow: '0 8px 32px rgba(0,0,0,0.35)',
    body: '#ffffff',
    line: '#374151',
    eyebrow: '#374151',
    eye: {
      border: '#374151',
      sclera: '#ffffff',
      pupil: '#1a1a2e',
    }
  }}
  className="my-bear"
  style={{ marginTop: '20px' }}
/>
```


## API Reference

### BearEyeTracker

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inputRefs | `React.RefObject<HTMLInputElement>[]` | - | Array of refs for input elements to track |
| inputValues | `string[]` | - | Array of input values used for pupil tracking |
| passwordRef? | `React.RefObject<HTMLInputElement>` | - | Ref for the password input element |
| isPasswordHidden? | `boolean` | `true` | Whether to show sunglasses when password input is focused |
| hasError? | `boolean` | `false` | Whether to show eyebrows when an error occurs |
| colors? | `BearColors` | - | Color customization options |
| className? | `string` | - | CSS class applied to the outer wrapper |
| style? | `React.CSSProperties` | - | Inline style applied to the outer wrapper |


### BearColors

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background? | `string` | `#dde8f0` | Background color |
| shadow? | `string` | `0 8px 32px rgba(0,0,0,0.35)` | Box shadow style |
| body? | `string` | - | Bear body color |
| line? | `string` | - | Bear outline color |
| eyebrow? | `string` | `#374151` | Eyebrow color |
| eye.border? | `string` | `#374151` | Eye border color |
| eye.sclera? | `string` | `#ffffff` | Eye sclera color |
| eye.pupil? | `string` | `#1a1a2e` | Pupil color |
## Examples

### Basic

`BearEyeTracker` tracks the provided `inputRefs` and reacts to user input.

When an input is focused, the bear's eyes follow the cursor.  
As you type, the pupils track the end of the input value.

> ⚠️ For accurate tracking, place the input and the bear horizontally aligned.

> ⚠️ Please do not set both width and height values at the same time. The defined aspect ratio may be distorted.

```jsx
import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const CustomTheme = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4f8] px-4">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                colors={{
                    background: '#e2eaf2',
                    shadow: '0 8px 32px rgba(100,130,160,0.2)',
                    body: '#c8d8e8',
                    line: '#4a6fa5',
                    eyebrow: '#4a6fa5',
                    eye: {
                        border: '#4a6fa5',
                        sclera: '#f0f4f8',
                        pupil: '#2c4a6e',
                    }
                }}
                className="sm:w-48 md:w-64"
            />
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-full max-w-xs sm:max-w-sm rounded-2xl border-2 border-[#b0c4d8] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#4a6fa5] focus:shadow-[0_0_0_4px_rgba(74,111,165,0.15)]"
            />
        </div>
    );
};

export default CustomTheme;
```
### Password Interaction

Pass a `passwordRef` to treat the input as a password field.

When the password input is focused, the bear wears sunglasses to hide its eyes.  
(It might still be watching you behind them 😏)

You can control this behavior using the `isPasswordHidden` prop.

- `true` (default): the bear wears sunglasses on focus  
- `false`: sunglasses are disabled

```jsx
import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const PasswordInteractionExample = () => {

    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0] px-4">
            <BearEyeTracker
                inputRefs={[passwordRef]}
                inputValues={[password]}
                passwordRef={passwordRef}
                isPasswordHidden={isPasswordHidden}
                className="sm:w-48 md:w-64"
            />
            <div className="relative w-full max-w-xs sm:max-w-sm">
                <input
                    ref={passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)] pr-10"
                />
                <button
                    type="button"
                    onClick={() => { 
                        passwordRef.current?.focus(); 
                        setIsPasswordHidden(prev => !prev);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                    tabIndex={1}
                >
                    {isPasswordHidden ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PasswordInteractionExample;
```
### Error State 

Use the `hasError` prop to indicate an error state.

When `hasError` is `true`, the bear shows suspicious eyebrows.

- `false` (default): normal state  
- `true`: error state (eyebrows appear)

```jsx
import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const ErrorStateExample = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false);

    return (
        <form className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0] px-4">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                hasError={hasError}
                className="sm:w-48 md:w-64"
            />
            <input
                type="email"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onInvalid={() => setHasError(true)}
                placeholder="Type something..."
                className="w-full max-w-xs sm:max-w-sm rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)]"
            />
            <button
                type="submit"
                className="mt-2 w-full max-w-xs sm:max-w-sm rounded-2xl bg-[#374151] py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#1f2937] hover:shadow-[0_4px_16px_rgba(55,65,81,0.35)] active:scale-[0.98]"
            >
                Login
            </button>
        </form>
    );
};

export default ErrorStateExample;
```
### Custom Theme 

Customize the appearance of the bear using the `colors` prop.

You can adjust:
- background & shadow
- body & outline
- eyes (border, sclera, pupil)
- eyebrows

You can also use `className` and `style` for additional styling.
```jsx
import { BearEyeTracker } from "bear-eye-tracker";
import { useRef, useState } from "react";

const CustomTheme = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4f8] px-4">
            <BearEyeTracker
                inputRefs={[inputRef]}
                inputValues={[inputValue]}
                colors={{
                    background: '#e2eaf2',
                    shadow: '0 8px 32px rgba(100,130,160,0.2)',
                    body: '#c8d8e8',
                    line: '#4a6fa5',
                    eyebrow: '#4a6fa5',
                    eye: {
                        border: '#4a6fa5',
                        sclera: '#f0f4f8',
                        pupil: '#2c4a6e',
                    }
                }}
                className="sm:w-48 md:w-64"
            />
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-full max-w-xs sm:max-w-sm rounded-2xl border-2 border-[#b0c4d8] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#4a6fa5] focus:shadow-[0_0_0_4px_rgba(74,111,165,0.15)]"
            />
        </div>
    );
};

export default CustomTheme;
```

## License 
