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
        md="6"
        class="my-12"
      >
        <v-card
        >
          <v-toolbar
            color="indigo"
            dark
          >
            <v-app-bar-nav-icom></v-app-bar-nav-icom>
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
  }),

  methods: {
    reset() {
      return this.$refs.form.reset()
    },
    login () {
      alert(`Name: ${this.username} \nPassWord: ${this.password}`)
    },
  },
})
</script>
