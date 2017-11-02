<template>
  <app-sub-layout :title="title">
    <v-layout wrap>
      <v-flex xs12>
          <v-list two-line subheader>
            <v-list-tile avatar v-for="item in connections" v-bind:key="item.title" @click="">
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
      </v-flex>
    </v-layout>
  </app-sub-layout>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'

  export default {
    name: 'Connection',
    components: {
      AppSubLayout
    },
    data () {
      return {
        title: 'Connection',
        connections: [{
          title: 'Cars',
          icon: 'call_merge',
          iconClass: 'green white--text',
          subtitle: 'https://example1.com/data/cats.json'
        }, {
          title: 'Population',
          icon: 'call_merge',
          iconClass: 'green white--text',
          subtitle: 'https://example2.com/data/population.json'
        }, {
          title: 'Weather',
          icon: 'call_merge',
          iconClass: 'red white--text',
          subtitle: 'https://example3.com/data/weather.csv'
        }]
      }
    }
  }
</script>
