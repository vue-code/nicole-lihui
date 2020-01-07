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
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                type="text"
              />
              <v-text-field
                label="Password"
                name="password"
                type="password"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="indigo"
              dark
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
export default Vue.extend({
  name: 'LoginForm',

})
</script>
