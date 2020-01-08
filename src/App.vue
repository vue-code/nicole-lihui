<template>
  <v-app>
    <BaseBar/>
    <v-content>
      <router-view></router-view>
      <LoginForm/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseBar from '@/components/BaseBar.vue'
import LoginForm from '@/components/LoginForm.vue'

export default Vue.extend({
  name: 'App',

  components: {
    BaseBar,
    LoginForm
  },

  data: () => ({
    //
  }),
});
</script>
