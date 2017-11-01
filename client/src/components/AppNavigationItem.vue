<template>
  <v-list-tile :to="item.path">
    <v-list-tile-action>
       <v-icon small v-html="item.icon"></v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
       <v-list-tile-title v-text="item.title"></v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'AppNavigationItem',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

