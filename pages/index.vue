<template>
  <div>
    <h1>TODOアプリ</h1>
    <input v-model="content" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(hoge, index) in getTodos" :key="index">
        {{ hoge }}
        <button @click="remove(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "Vuex";
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    },
    // ...mapState["todos"],
  },
  methods: {
    add: function () {
      this.$store.dispatch("add", this.content);
      this.content = "";
    },
    remove(index) {
      this.$store.dispatch("remove", index);
    },
  },
};
</script>
