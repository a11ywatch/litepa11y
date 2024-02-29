_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["_top"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (_, top) => {
    if (top.querySelector("img") !== null) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        top,
        _global.HTMLCS.getTranslation("1_4_5_G140,C22,C30.AALevel"),
        "G140,C22,C30.AALevel"
      );
    }
  },
};
