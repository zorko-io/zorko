<template>
  <v-app>
    <app-navigation></app-navigation>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer app>
      <span>{{ footerText }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation'

  export default {
    components: {
      AppNavigation
    },

    data () {
      return {
        footerText: '2017'
      }
    }
  }
</script>
