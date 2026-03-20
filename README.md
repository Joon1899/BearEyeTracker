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

## Examples

React Hook Form 버전
그냥 Input 으로 구현한 버전



## License 
