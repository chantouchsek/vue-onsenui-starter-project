/* =============
* Navigator Mutations
* ==============
*
* The mutations available for the splitter module
 */

import { PUSH, OPTIONS, RESET, REPLACE, POP } from './mutation-types';

export default {
  /**
   * Mutation to check if the navigator is push
   *
   * @param {Object} state the current state of store
   * @param {Object} page the current state of store
   */
  [PUSH](state, page) {
    state.stack.push(page);
  },
  /**
   * Mutation to check if the navigator is push
   *
   * @param {Object} state the current state of store
   */
  [POP](state) {
    if (state.stack.length > 1) {
      state.stack.pop();
    }
  },
  /**
   * Mutation to check if the navigator is push
   *
   * @param {Object} state the current state of store
   * @param {Object} page the current state of store
   */
  [REPLACE](state, page) {
    state.stack.pop();
    state.stack.push(page);
  },
  /**
   * Mutation to check if the navigator is push
   *
   * @param {Object} state the current state of store
   * @param {Object} page the current state of store
   */
  [RESET](state, page) {
    state.stack = [page || state.stack[0]];
  },
  /**
   * Mutation to check if the navigator is push
   *
   * @param {Object} state the current state of store
   * @param {Object} newOptions the current state of store
   */
  [OPTIONS](state, newOptions = {}) {
    state.options = newOptions;
  },
};
