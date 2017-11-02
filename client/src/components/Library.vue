<template>
  <app-sub-layout :title="title">

      <v-layout wrap>
        <v-flex xs3>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>Joe User</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-subheader>Your Repos</v-subheader>
              <v-radio-group v-model="selectedRepo" column>
                <v-radio label="Zorko Sandbox" value="zorko-sandbox" disabled></v-radio>
                <v-radio label="Our World in Data" value="world-in-data" disabled></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs9>
          <v-card>
            <v-toolbar color="light-blue" dark>
              <v-toolbar-title>Looks</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line subheader>
              <v-list-tile avatar v-for="item in looks" v-bind:key="item.title" @click="">
                <v-list-tile-avatar>
                  <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
  </app-sub-layout>
</template>

<script>
import AppSubLayout from '@/components/AppSubLayout'

export default {
  name: 'Library',
  components: {
    AppSubLayout
  },
  data () {
    return {
      msg: 'I`m a library',
      title: 'Library',
      items: [
        { title: 'Zorko Sandbox' },
        { title: 'Our World in Data' }
      ],
      looks: [{
        icon: 'assignment',
        iconClass: 'amber white--text',
        title: 'Photos',
        subtitle: 'Nov 1, 2017'
      }, {
        icon: 'assignment',
        iconClass: 'amber white--text',
        title: 'Photos',
        subtitle: 'Nov 1, 2017'
      }],
      selection: true,
      selectedRepo: 'zorko-sandbox'
    }
  }
}
</script>
