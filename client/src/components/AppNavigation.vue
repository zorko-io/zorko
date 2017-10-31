<template>
  <v-navigation-drawer
    permanent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
    :mini-variant-width="miniVariantWidth"
    app
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: true,
      miniVariantWidth: 106,
      items: [{
        icon: 'list',
        title: 'Library',
        path: '/library'
      },
      {
        icon: 'highlight',
        title: 'Explore',
        path: '/explore'
      },
      {
        icon: 'merge_type',
        title: 'Model',
        path: '/model'
      },
      {
        icon: 'gavel',
        title: 'Admin',
        path: '/admin'
      },
      {
        icon: 'perm_identity',
        title: 'Account',
        path: '/account'
      }],
      title: 'Zorko.io'
    }
  }
}
</script>

