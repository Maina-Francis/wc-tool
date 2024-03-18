const wctool = function (content, options = {}) {
  const results = [];

  if (options.bytes) {
    results.push(content.length);
  }

  if (options.lines) {
    results.push(content.split(/\r?\n/).length); //regular expression for line breaks
  }

  if (options.words) {
    results.push(content.split(/\b\w+\b/u).length); //Use Unicode word boundary
  }

  if (options.chars) {
    results.push(content.replace(/\r?\n/g, "").length);
  }

  // Default output (all counts) if no options are specified
  if (results.length === 0) {
    results.push(content.length);
    results.push(content.split(/\r?\n/).length);
    results.push(content.split(/\s+/).length);
  }

  return results;
};

export default wctool;
