<template>
  <app-sub-layout :title="title">
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-card color="grey lighten-4" flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Name</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-1-3"
                    label="Hint Text"
                    value="Joe User"
                    disabled
                    single-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Email</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-2-3"
                    label="Hint Text"
                    value="joeuser@example.com"
                    class="input-group--focused"
                    disabled
                    single-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </app-sub-layout>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'

  export default {
    name: 'Account',
    components: {
      AppSubLayout
    },
    data () {
      return {
        fullUserName: 'Joe User',
        msg: 'I`m an account',
        title: 'Account',
        rules: [
          () => 'Username or Password is incorrect'
        ]
      }
    }
  }
</script>
