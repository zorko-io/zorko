<template>
  <v-list-group>
    <v-list-tile slot="item">
      <v-list-tile-action>
        <v-icon small v-html="item.icon"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>keyboard_arrow_down</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <v-list-tile
      v-for="(child, i) in item.children"
      @click=""
      :to="item.path"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{ child.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list-group>
</template>

<script>
  export default {
    name: 'AppNavigationModel',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

