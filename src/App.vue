<template>
  <v-app>
    <v-content>
      <LocalAdd/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LocalAdd from '@/components/LocalAdd.vue'

export default Vue.extend({
  name: 'App',

  components: {
    LocalAdd,
  },

  data: () => ({
    //
  }),
});
</script>
