# @veloce/tailwind

Tailwind CSS plugin for VeloceCSS animations.

## Installation

```bash
npm install @veloce/tailwind veloce-css
```

## Usage

### 1. Add to Tailwind Config

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@veloce/tailwind'),
  ],
}
```

### 2. Import VeloceCSS

```css
/* In your main CSS file */
@import 'veloce-css/dist/veloce.min.css';
```

### 3. Use in Your Components

```jsx
// React example
<div className="animate-vel-fadeInUp">
  Content
</div>

// With duration override
<div className="animate-vel-bounce" style={{'--vel-animate-duration': '2s'}}>
  Bouncing element
</div>
```

## Available Classes

All VeloceCSS animations are available as `animate-vel-{name}`:

- `animate-vel-fadeIn`
- `animate-vel-fadeInUp`
- `animate-vel-bounce`
- `animate-vel-pulse`
- `animate-vel-blurIn`
- `animate-vel-swoosh`
- ... and all 27+ animations

## Customization

You can still use CSS custom properties to customize animations:

```css
.my-element {
  --vel-animate-duration: 800ms;
  --vel-animate-delay: 0.5s;
}
```

