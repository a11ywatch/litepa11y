_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["form"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    // Only the generic message will be displayed here. If there were problems
    // with input boxes not having labels, it will be pulled up as errors in
    // other Success Criteria (eg. 1.3.1, 4.1.2).
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      element,
      _global.HTMLCS.getTranslation("3_3_2_G131,G89,G184,H90"),
      "G131,G89,G184,H90"
    );
  },
};
