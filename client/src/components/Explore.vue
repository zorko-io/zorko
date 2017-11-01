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

