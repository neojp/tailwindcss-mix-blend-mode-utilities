module.exports = function addMixBlendModeUtilities({ addUtilities, variants }) {
  addUtilities({
    '.blend-color-burn': { mixBlendMode: 'color-burn' },
    '.blend-color-dodge': { mixBlendMode: 'color-dodge' },
    '.blend-color': { mixBlendMode: 'color' },
    '.blend-darken': { mixBlendMode: 'darken' },
    '.blend-difference': { mixBlendMode: 'difference' },
    '.blend-exclusion': { mixBlendMode: 'exclusion' },
    '.blend-hard-light': { mixBlendMode: 'hard-light' },
    '.blend-hue': { mixBlendMode: 'hue' },
    '.blend-lighten': { mixBlendMode: 'lighten' },
    '.blend-luminosity': { mixBlendMode: 'luminosity' },
    '.blend-multiply': { mixBlendMode: 'multiply' },
    '.blend-overlay': { mixBlendMode: 'overlay' },
    '.blend-saturation': { mixBlendMode: 'saturation' },
    '.blend-screen': { mixBlendMode: 'screen' },
    '.blend-soft-light': { mixBlendMode: 'soft-light' },
    '.blend-normal': { mixBlendMode: 'normal' },
  }, variants('mixBlendMode'));
};