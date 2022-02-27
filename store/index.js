import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({ todos: [] }),
    mutations: {
      add: function (state, todo) {
        state.todos.push(todo);
        this.todo = "";
      },
    },
  });
};
export default createStore;
