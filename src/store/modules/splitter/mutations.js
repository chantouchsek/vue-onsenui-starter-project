/* =============
* Splitter Mutations
* ==============
*
* The mutations available for the splitter module
 */

import { TOGGLE } from './mutation-types';

export default {
  /**
   * Mutation to check if the splitter is open
   *
   * @param {Object} state the current state of store
   * @param {Object} shouldOpen the current state of store
   */

  [TOGGLE](state, shouldOpen) {
    if (typeof shouldOpen === 'boolean') {
      state.open = shouldOpen;
    } else {
      state.open = !state.open;
    }
  },
};
