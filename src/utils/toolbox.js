/**
 * function object for react dev tools methods
 *
 * @function Toolbox
 */
const Toolbox = {

  /**
   * generates id for alert payload
   * @static
   * @param {object} status - status of notification
   * @returns {string} reference - A unique value for ref
   * @memberof Toolbox
   */
  generateReference(status) {
    const randomNumber = Math.floor(Math.random() * 8999 + 1000);
    const anotherRandomNumber = Math.floor(Math.random() * 8999 + 1000);
    const reference = `ref_${status}${randomNumber}${anotherRandomNumber}`;
    return reference;
  },

};

export default Toolbox;
