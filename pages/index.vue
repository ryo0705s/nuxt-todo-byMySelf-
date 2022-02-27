<template>
  <div>
    <h1>TODOアプリ</h1>
    <input v-model="content" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapState["todos"],
  },
  methods: {
    add: function () {
      this.$store.commit(`add`, this.item);
    },
  },
};
</script>
