# VeloceCSS 🚀

> The lightweight, high-performance CSS animation library that makes your website faster than a double espresso. ☕️

**VeloceCSS** is a production-ready animation library designed for the modern web. We took the best of *Animate.css*, stripped out the junk, added 2025 design trends (blur effects, text reveals), and optimized it for 60fps performance.

It's like giving your website a Ferrari engine without the maintenance costs. 🏎️

## ✨ Why VeloceCSS?

- **🎯 103+ Animations**: Full compatibility with standard effects + exclusive modern animations that actually look good.

- **⚡ High Performance**: Uses only `transform` and `opacity`. No layout thrashing allowed. GPU go *brrr*.

- **🎨 Modern Effects**: Includes **Blur**, **Text Reveals**, and **3D Transforms** out of the box.

- **🔧 CSS Variables**: Control duration, delay, and repetition at runtime. No SASS recompiling needed (unless you want to).

- **♿ Accessibility First**: Automatically respects `prefers-reduced-motion`. We love animation, but we hate motion sickness.

- **📦 Modular SCSS**: Import only what you need. Don't ship dead code.

## 📦 Installation

### NPM

The recommended way for modern projects (and cool kids).

```bash
npm install veloce-css
```

### CDN

For quick prototyping or if you just want to copy-paste and go.

```html
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/veloce-css@1.0.0/dist/veloce.min.css](https://cdn.jsdelivr.net/npm/veloce-css@1.0.0/dist/veloce.min.css)">
```

### Download

Grab the latest `veloce.min.css` from the [Releases Page](https://github.com/vincenzomaritato/velocecss/releases).

## 🚀 Usage

### Basic Usage

Add the base class `.vel-animated` along with any animation name. It's easier than cooking pasta.

```html
<h1 class="vel-animated vel-bounceIn">Hello World!</h1>
```

### Utility Classes

Modify speed and delay directly in HTML.

```html
<div class="vel-animated vel-fadeInUp vel-delay-2s vel-slow">
  I appear later and slower, like a dramatic villain.
</div>
```

| **Class** | **Description** |
| --------- | --------------- |
| `.vel-delay-1s` to `.vel-delay-5s` | Delays animation start (Time to grab a coffee) |
| `.vel-fast` | 800ms duration |
| `.vel-faster` | 500ms duration (Blink and you miss it) |
| `.vel-slow` | 2s duration |
| `.vel-slower`| 3s duration (Dramatic effect) |
| `.vel-infinite` | Loops animation forever |

## 🎛️ Customization (CSS Variables)

VeloceCSS uses CSS Custom Properties. You can change animation settings dynamically via inline styles or CSS classes without touching the source code.

**Global Override**:

```css
:root {
  --vel-duration: 800ms;
  --vel-delay: 0s;
}
```

**Local Override**:

```css
.hero-title {
  /* This specific element will be slower */
  --vel-duration: 3s; 
  --vel-repeat: infinite;
}
```

## 🎭 Animation List

### ✨ Modern Collection (Exclusive)

New trends not found in older libraries (because we live in 2025).

- **Blurring**: `vel-blurIn`, `vel-blurInUp`, `vel-blurOut` (The "Apple/Vercel" aesthetic)

- **Text Reveals**: `vel-textRevealUp`, `vel-textRevealDown` (Masked sliding for fancy typography)

- **3D**: `vel-flipIn3D`

### Standard Collection

- **Fading**: `vel-fadeIn`, `vel-fadeInUp`, `vel-fadeInDown`...

- **Bouncing**: `vel-bounce`, `vel-bounceIn`, `vel-bounceInUp`...

- **Zooming**: `vel-zoomIn`, `vel-zoomOut`, `vel-zoomInUp`...

- **Attention Seekers**: `vel-pulse`, `vel-shake`, `vel-tada`, `vel-wobble`, `vel-rubberBand`...

- **Sliding**: `vel-slideInUp`, `vel-slideInDown`...

- **Specials**: `vel-hinge` (Use responsibly), `vel-rollIn`, `vel-jackInTheBox`...

## 🔌 Framework Integration

### Tailwind CSS

Extend your Tailwind config to use VeloceCSS animations as utilities.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'vel-bounce': 'velBounce 1s infinite',
        'vel-fade-up': 'velFadeInUp 1s ease-out forwards',
      },
      keyframes: {
        // ... copy keyframes from source if needed
      }
    }
  }
}
```

### React / Vue / Angular

VeloceCSS works perfectly with any framework. Just apply the classes conditionally.

**React Example**:

```javascript
const [isVisible, setIsVisible] = useState(false);

return (
  <div className={`vel-animated ${isVisible ? 'vel-fadeInUp' : 'opacity-0'}`}>
    Look at me!
  </div>
);
```

## ♿ Accessibility

VeloceCSS respects the user's OS settings for motion. If a user has "Reduce Motion" enabled, all animations are automatically forced to:

- Duration: `1ms`

- Iterations: `1`

We prioritize accessibility. Don't be that developer who disables this feature.

## 🛠️ Development

Want to hack on this? Awesome.

1. **Clone the repo**

```bash
git clone [https://github.com/vincenzomaritato/velocecss.git](https://github.com/vincenzomaritato/velocecss.git)
cd velocecss
```

2. **Install dependencies**

```bash
npm install
```

3. **Start Watch Mode** (Compiles SCSS on save)

```bash
npm run watch:css
```

4. **Build for Production** (Minifies output)

```bash
npm run build
```

## 📄 License

VeloceCSS is open source software [licensed as MIT](LICENSE). Feel free to use it, break it, fix it, and profit from it.

<p align="center">
  Created with ❤️, 🍕, and a lot of ☕ by <strong>Vincenzo Maritato</strong><br>
  <a href="mailto:hi@vmaritato.com">hi@vmaritato.com</a> • <a href="https://vmaritato.com">vmaritato.com</a>
</p>