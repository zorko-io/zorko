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
  name: 'Explore',
  components: {
    AppSubLayout
  },
  data () {
    return {
      msg: 'I`m a explore',
      title: 'Explore'
    }
  }
}
</script>

