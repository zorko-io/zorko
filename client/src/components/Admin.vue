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
    name: 'Admin',
    components: {
      AppSubLayout
    },
    data () {
      return {
        msg: 'I`m an admin',
        title: 'Admin'
      }
    }
  }
</script>
