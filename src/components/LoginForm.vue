<template>
  <v-container
    class="my-12"
    fluid
  >
    <v-row 
     class="my-12"
     justify="center"
    >
      <v-col
        cols="12"
        md="4"
        class="my-12"
      >
        <v-card
        >
          <v-toolbar
            color="indigo"
            dark
          >
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form
              ref="form"
            >
              <v-text-field
                v-model="username"
                label="UserName"
                required
              />
              <v-text-field
                v-model="password"
                label="PassWord"
                type="password"
                required
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="indigo"
              dark
              @click="reset"
            >Reset</v-btn>
            <v-btn
              color="indigo"
              dark
              @click="login"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="indigo"
        dark
        @click="test"
      >Test</v-btn>
      <div class="mx-12">Test Result : {{ info }}</div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

const qs = require('qs')

export default Vue.extend({
  name: 'LoginForm',
  vuetify: new Vuetify(),

  data: () => ({
    username: '',
    password: '',
    info: '',
    // errored: true,
    // loading: false,
  }),
  methods: {
    test() {
      axios
      .post('/api')
        .then(response => {
          //  alert(response.data)
          this.info = response.data
        });
      //
    },
    login () {
      let formData = new FormData()
      formData.set("username", this.username);
      formData.set("password", this.password);
      axios
        .post('/api/login',
          formData,
          {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(response => {
          //  alert(response.data)
          this.info = response.data
        });
    },
  },
})
</script>
