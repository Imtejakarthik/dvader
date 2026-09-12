'use strict';

function roughTokens(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function savings(normalText, compressedText) {
  const normal = roughTokens(normalText);
  const compressed = roughTokens(compressedText);
  return {
    normal,
    compressed,
    saved: normal === 0 ? 0 : 1 - compressed / normal,
  };
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

module.exports = { roughTokens, savings, pct };
