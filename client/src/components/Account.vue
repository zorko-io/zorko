<template>
  <app-sub-layout :title="title">
    <v-layout column align-center>
      <blockquote>
        {{ msg }}
      </blockquote>
    </v-layout>
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
        msg: 'I`m an account',
        title: 'Account'
      }
    }
  }
</script>
