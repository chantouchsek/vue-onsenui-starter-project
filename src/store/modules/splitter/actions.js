/* ============
 * Splitter Actions
 * ============
 *
 * The actions available for the Splitter module.
 */

import * as types from './mutation-types';

/**
 * Action fired to splitter.
 *
 * @param {function} commit Commit function to update the store.
 * @param payload commit Commit function to update the store.
 */

const toggle = ({ commit }, payload) => {
  commit(types.TOGGLE, payload);
};

export default {
  toggle,
};
