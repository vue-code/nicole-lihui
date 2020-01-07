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
                :counter="10"
                :rules="nameRules"
                label="UserName"
                required
              />
              <v-text-field
                label="PassWord"
                type="password"
                :counter="24"
                :rules="pwRules"
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
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    password: '',
    pwRules: [
       v => !!v || 'Password is required',
       v => (v && v.length >= 6) || 'PassWord must be more than 6 characters'
    ],
    info: '',
    errored: true,
    loading: false,
  }),
  methods: {
    reset() {
      return this.$refs.form.reset()
    },
    login () {
      let formData = new FormData()
      formData.set("username", this.username);
      formData.set("password", this.password);
      axios
        .post('/login',
          formData,
          {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(response => {
          this.info = response.data
          alert(this.info)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      // axios({
      //     method: 'post',
      //     url: 'http://localhost:8080/login',
      //     data: qs.stringify({
      //       username: this.username,
      //       password: this.password
      //     }),
      //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      //   })
      //   .then(response => {
      //     this.info = String(response)
      //     alert(this.info)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     this.errored = true
      //   })
      //   .finally(() => this.loading = false)

    },
  },
})
</script>
