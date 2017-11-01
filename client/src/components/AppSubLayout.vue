<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-toolbar fixed app>
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
     <slot></slot>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'AppSubLayout',
  props: {
    title: {
      type: String
    }
  }
}
</script>

