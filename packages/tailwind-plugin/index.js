/**
 * VeloceCSS Tailwind Plugin
 * 
 * Adds VeloceCSS animations as Tailwind utility classes.
 * Usage: animate-vel-bounce, animate-vel-fadeIn, etc.
 * 
 * Install: npm install @veloce/tailwind
 * 
 * In tailwind.config.js:
 * plugins: [
 *   require('@veloce/tailwind'),
 * ]
 */

const plugin = require('tailwindcss/plugin');

// List of all VeloceCSS animation classes
const veloceAnimations = [
  // Fading
  'fadeIn',
  'fadeInUp',
  'fadeInDown',
  'fadeInLeft',
  'fadeInRight',
  'fadeInUpBig',
  'fadeInDownBig',
  
  // Bouncing
  'bounce',
  'bounceIn',
  
  // Zooming
  'zoomIn',
  'zoomOut',
  
  // Attention Seekers
  'pulse',
  'pulseSlow',
  'pulseFast',
  'shake',
  'rubberBand',
  'wobble',
  'hinge',
  
  // Modern Blurring
  'blurIn',
  'blurInUp',
  'blurOut',
  
  // Text Reveals
  'textRevealUp',
  'textRevealDown',
  'textRevealLeft',
  
  // 3D Effects
  'flipIn3D',
  
  // Special
  'swoosh',
];

module.exports = plugin(function ({ addUtilities, theme }) {
  const animations = {};
  
  veloceAnimations.forEach(anim => {
    // Create utility class: animate-vel-{name}
    animations[`.animate-vel-${anim}`] = {
      '@apply vel-animated': {},
      animationName: `vel${anim.charAt(0).toUpperCase() + anim.slice(1)}`,
      animationDuration: 'var(--vel-animate-duration, 1s)',
      animationTimingFunction: 'var(--vel-animate-timing-function, ease-out)',
      animationFillMode: 'both',
    };
  });
  
  addUtilities(animations);
}, {
  // Add keyframes to Tailwind theme
  theme: {
    extend: {
      keyframes: {
        // These will be available if VeloceCSS is imported
        // The actual keyframes are defined in VeloceCSS CSS file
      },
    },
  },
});

