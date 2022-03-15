import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: { todos: [] },
    getters: {
      getTodos: (state) => state.todos,
    },
    mutations: {
      add: function (state, todo) {
        state.todos.push(todo);
      },
      remove(state, index) {
        state.todos.splice(index, 1);
      },
      edit(state, index, newTodo) {
        state.todos.splice(index, 1, newTodo);
        newTodo = todos[index];
      },
    },
    actions: {
      add({ commit }, content) {
        commit("add", content);
      },
      remove({ commit }, todo) {
        commit("remove", todo);
      },
      edit({ commit }, hoge) {
        commit("edit", hoge);
      },
    },
  });
};
export default createStore;
