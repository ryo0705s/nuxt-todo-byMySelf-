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
        // this.todo = "";
      },
    },
    actions: {
      add({ commit }, content) {
        commit("add", content);
      },
    },
  });
};
export default createStore;
