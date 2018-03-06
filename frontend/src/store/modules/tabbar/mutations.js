/* =============
* Tabbar Mutations
* ==============
*
* The mutations available for the splitter module
 */

import { SET } from './mutation-types';

export default {
  /**
   * Mutation to check if the splitter is open
   *
   * @param {Object} state the current state of store
   * @param {Object} index the current state of store
   */
  [SET](state, index) {
    state.index = index;
  },
};
