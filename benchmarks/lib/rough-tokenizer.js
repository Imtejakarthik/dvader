'use strict';

function whitespaceTokens(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function gptTokens(text) {
  const { encode } = require('gpt-tokenizer');
  return encode(String(text)).length;
}

function getTokenizer(name = 'rough') {
  if (name === 'rough' || name === 'whitespace') return whitespaceTokens;
  if (name === 'gpt') return gptTokens;
  throw new Error(`Unknown tokenizer: ${name}`);
}

function savings(normalText, compressedText, tokenizer = whitespaceTokens) {
  const normal = tokenizer(normalText);
  const compressed = tokenizer(compressedText);
  return {
    normal,
    compressed,
    saved: normal === 0 ? 0 : 1 - compressed / normal,
  };
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

module.exports = { roughTokens: whitespaceTokens, whitespaceTokens, gptTokens, getTokenizer, savings, pct };
