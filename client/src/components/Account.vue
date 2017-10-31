<template>
  <app-sub-layout :title="title">
    <blockquote>
      {{ msg }}
    </blockquote>
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
