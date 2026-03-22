# BearEyeTracker
A React bear avatar component that tracks eye movement and reacts to form input focus

## Quick Start(tailwindcss 는 그냥 보여주기 용입니다. 의존성 없음 알림) 
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
**npm**
``` bash
yarn install bear-eye-tracker
```

## Peer Dependencies

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
### Full
```jsx
<BearEyeTracker
  inputRefs={[emailRef, passwordRef]}
  inputValues={[email, password]}
  passwordRef={passwordRef}
  isPasswordHidden={true}
  hasError={false}
  size={176}
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
| size? | `number` | `176` | Size of the component (px) |
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

```jsx
import { BearEyeTracker } from "bear-eye-tracker"; 
import { useRef, useState } from "react";

const BasicExample = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); 
  const [inputValue, setInputValue] = useState(""); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#dde8f0]">
      <BearEyeTracker 
        inputRefs={[inputRef]}
        inputValues={[inputValue]}
      /> 

      <input 
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        className="w-64 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-[#94b8d0] focus:shadow-[0_0_0_4px_rgba(148,184,208,0.15)]"
      />
    </div>
  ); 
}; 

export default BasicExample;
```
### Password Interaction
```jsx

```
### Error State
```jsx

```
### Custom Theme
```jsx

```

## License 
