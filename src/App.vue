<template>
  <v-app>
    <v-content>
      <LocalAdd/>
      <LoginForm/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LocalAdd from '@/components/LocalAdd.vue'
import LoginForm from '@/components/LoginForm.vue'

export default Vue.extend({
  name: 'App',

  components: {
    LocalAdd,
    LoginForm,
  },

  data: () => ({
    //
  }),
});
</script>
