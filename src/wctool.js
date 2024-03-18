import fs from 'fs';
const wctool = function (content, options = {}) {
  const results = [];

  if (options.bytes) {
    // results.push(content.length);
    results.push(Buffer.byteLength(content));
  }

  if (options.lines) {
    results.push(content.split(/\r?\n/).length); //regular expression for line breaks
  }

  if (options.words) {
    results.push(content.trim().split(/\s+/).length); 
  }

  if (options.chars) {
    results.push(content.length);
  }

  // Default output (all counts) if no options are specified
  if (results.length === 0) {
    results.push(content.split(/\r?\n/).length);
    results.push(content.split(/\s+/).length);
    results.push(Buffer.byteLength(content));

  }

  return results;
};

export default wctool;
