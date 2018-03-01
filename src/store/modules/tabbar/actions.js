/* ============
 * Tabbar Actions
 * ============
 *
 * The actions available for the Splitter module.
 */

import * as types from './mutation-types';

/**
 * Action fired to tabbar.
 *
 * @param {function} commit Commit function to update the store.
 * @param payload commit Commit function to update the store.
 */

const set = ({ commit }, payload) => {
  commit(types.SET, payload);
};

export default {
  set,
};
