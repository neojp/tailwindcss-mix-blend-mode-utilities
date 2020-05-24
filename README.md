<p align="center">
    <a href="https://tailwindcss.com/" target="_blank"><img width="200" src="https://tailwindcss.com/img/tailwind.svg"></a><br>
    A utility-first CSS framework for rapidly building custom user interfaces.
</p>

---

<br>

# Tailwind CSS `mix-blend-mode` utilities

This is a Tailwind CSS plugin that adds utilities to set how an element's content should blend with the element underneath using the property [`mix-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode): `mix-blend-mode`.

Maintained by: [Joan Piedra](https://joanpiedra.com) → [@neojp](https://twitter.com/neojp)

## Installation

Install as a node module with either `npm` or `yarn` on your command line

```bash
# Install via npm
npm install --save-dev @neojp/tailwindcss-mix-blend-mode-utilities

# Install via yarn
yarn add --dev @neojp/tailwindcss-mix-blend-mode-utilities
```

Add this module as a plugin on your [Tailwind configuration file](https://tailwindcss.com/docs/configuration#plugins) (`tailwind.config.js`).

```js
module.exports = {
  plugins: [
      require('@neojp/tailwindcss-mix-blend-mode-utilities')
  ]
};
```

### Variants

Note that this plugin allows the usage of variants through the key `mixBlendMode` and will default to your global variant setting.

```js
module.exports = {
  variants: {
    mixBlendMode: ['responsive']
  }
};
```

## Usage

Use the Tailwind utility classes provided by this plugin.

```html
<div class="blend-color-burn"></div>
<div class="blend-color-dodge"></div>
<div class="blend-color"></div>
<div class="blend-darken"></div>
<div class="blend-difference"></div>
<div class="blend-exclusion"></div>
<div class="blend-hard-light"></div>
<div class="blend-hue"></div>
<div class="blend-lighten"></div>
<div class="blend-luminosity"></div>
<div class="blend-multiply"></div>
<div class="blend-overlay"></div>
<div class="blend-saturation"></div>
<div class="blend-screen"></div>
<div class="blend-soft-light"></div>
<div class="blend-normal"></div>
```

## Output

Tailwind will be outputed as follows.

```css
.blend-color { mix-blend-mode: color; }
.blend-color-burn { mix-blend-mode: color-burn; }
.blend-color-dodge { mix-blend-mode: color-dodge; }
.blend-darken { mix-blend-mode: darken; }
.blend-difference { mix-blend-mode: difference; }
.blend-exclusion { mix-blend-mode: exclusion; }
.blend-hard-light { mix-blend-mode: hard-light; }
.blend-hue { mix-blend-mode: hue; }
.blend-lighten { mix-blend-mode: lighten; }
.blend-luminosity { mix-blend-mode: luminosity; }
.blend-multiply { mix-blend-mode: multiply; }
.blend-overlay { mix-blend-mode: overlay; }
.blend-saturation { mix-blend-mode: saturation; }
.blend-screen { mix-blend-mode: screen; }
.blend-soft-light { mix-blend-mode: soft-light; }
.blend-normal { mix-blend-mode: normal; }
```

## Contributing

Feel free to [submit an issue](https://github.com/neojp/tailwindcss-mix-blend-mode-utilities/issues) or a [pull request](https://github.com/neojp/tailwindcss-mix-blend-mode-utilities/pulls), and send me a message on Twitter ([@neojp](https://twitter.com/neojp)) about it.

## License
This project has been licensed under [the Hippocratic License](https://firstdonoharm.dev/).