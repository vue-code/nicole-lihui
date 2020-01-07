<template>
  <v-app>
    <BaseBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseBar from '@/components/BaseBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    BaseBar,
  },

  data: () => ({
    //
  }),
});
</script>
