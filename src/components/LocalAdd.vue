<template>
  <v-container
    class="my-12"
  >
    <v-row 
      justify="center"
      class="my-12 py-12"
    >
      <v-card
        class="max-auto"
        max-width="600"
      >
        <v-toolbar
          color="indigo"
          dark
        >
          <v-toolbar-title>Add Function</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        
        <v-form>
          <v-container>
            <v-row justify="center">
              <v-col 
                cols="12"
                md="3"  
              >
                <v-text-field
                  v-model="number1"
                  label="Number 1"
                ></v-text-field>
              </v-col>

              <v-col 
                cols="12"
                md="1" 
                align-self="center" 
              >
                <span>+</span>
              </v-col>

              <v-col 
                cols="12"
                md="3"  
              >
                <v-text-field
                  v-model="number2"
                  label="Number 2"
                ></v-text-field>
              </v-col>

              <v-col 
                cols="12"
                md="1"
                align-self="center"   
              >
                <span>=</span>
              </v-col>

              <v-col 
                cols="12"
                md="3"  
              >
                <v-text-field
                  v-model="result"
                  label="Result"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LocalAdd',
  
  data: () => ({
    number1: 0,
    number2: 0,
  }),
  computed: {
    result: function () {
      return Number(this.number1) + Number(this.number2)
    }
  },
})
</script>
