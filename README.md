# BearEyeTracker
A React bear avatar component that tracks eye movement and reacts to form input focus

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
<BearEyeTracker />
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
| isPasswordHidden? | `boolean` | `false` | Whether to show sunglasses when password input is focused |
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

React Hook Form 버전
그냥 Input 으로 구현한 버전



## License 
