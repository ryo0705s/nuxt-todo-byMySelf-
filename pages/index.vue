<template>
  <div>
    <h1>TODOアプリ</h1>
    <input v-model="content" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(hoge, index) in getTodos" :key="index">
        {{ hoge }}
        <button @click="remove(index)">削除</button>
        <button @click="edit(index)">編集</button>
        <input v-model="edition" />
        <button @click="edited(index)">更新</button>
      </li>
    </ul>
    <v-app>
      <v-flex xs6>
        <v-card>
          <v-card-title class="font-weight-bold"
            >新規会員登録フォーム(3分で完了)</v-card-title
          >
        </v-card>
      </v-flex>
      <v-btn outline round class="green green-text darken-2">2万円~</v-btn>
    </v-app>
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Open</v-btn>
        <v-btn color="primary" dark v-on="on">Dropdown</v-btn>
      </template>
      <v-list>
        <v-list-item>"teust"</v-list-item>
      </v-list>
    </v-menu>
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
    edit(index) {
      this.$store.dispatch("edit", index);
    },
  },
};
</script>
