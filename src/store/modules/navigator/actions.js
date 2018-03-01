/* ============
 * Navigator Actions
 * ============
 *
 * The actions available for the Navigator module.
 */

import * as types from './mutation-types';

/**
 * Action fired to push.
 *
 * @param {function} commit Commit function to update the store.
 * @param state
 * @param payload commit Commit function to update the store.
 */

const push = ({ commit, state }, payload) => {
  commit(types.PUSH, payload);
};

/**
 * Action fired to pop
 * @param {function} commit, Commit function to update the store
 */
const pop = ({ commit }) => {
  commit(types.POP);
};

/**
 * Action fired to replace
 * @param {function} commit, Commit function to update the store
 * @param payload commit, Commit function to update the store
 */
const replace = ({ commit }, payload) => {
  commit(types.REPLACE, payload);
};

/**
 * Action fired to reset
 * @param {function} commit, Commit function to update the store
 */
const reset = ({ commit }) => {
  commit(types.RESET);
};

/**
 * Action fired to options
 * @param {function} commit, Commit function to update the store
 * @param payload commit, Commit function to update the store
 */
const options = ({ commit }, payload) => {
  commit(types.OPTIONS, payload);
};

export default {
  push,
  pop,
  replace,
  reset,
  options,
};
