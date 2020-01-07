<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
      >
        <v-card>
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
              v-model="valid"
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
                :rules="pwRules"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="warning"
              @click="reset"
            >Reset</v-btn>
            <v-btn
              color="indigo"
              dark
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
    valid: false,
    username: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    password: '',
    pwRules: [
       v => !!v || 'Password is required',
       v => ()
    ],
    
  })
})
</script>
