/**
 * Google translate module
 *
 * @param {string} input
 */
module.exports = function translate(input) {
  const params = qs.stringify({
    client: "webapp",
    // Source language
    sl: "auto",
    // Target language
    tl: "en",
    hl: "zh-CN",
    dt: "at",
    dt: "bd",
    dt: "ex",
    dt: "ld",
    dt: "md",
    dt: "qca",
    dt: "rw",
    dt: "rm",
    dt: "ss",
    dt: "t",
    dt: "gt",
    otf: 1,
    ssel: 3,
    tsel: 4,
    kc: 0,
    // Input encoding
    ie: "UTF-8",
    // Output encoding
    oe: "UTF-8",
    source: "sel",
    tk: 153321.327016,
    // Search keyword
    q: input
  });

  return alfy.fetch(`https://translate.google.cn/translate_a/single?${params}`);
};
