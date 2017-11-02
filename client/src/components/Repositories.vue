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
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark>Leave</v-btn>
                  </div>
                </v-list-tile-action>
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
    name: 'Repositories',
    components: {
      AppSubLayout
    },
    data () {
      return {
        title: 'Repositories',
        connections: [{
          title: 'zorko-demos-repo',
          icon: 'fa-github-alt',
          subtitle: 'https://github.com/zorko-io/zorko-demo-repo'
        }, {
          title: 'some-other-repo-1',
          icon: 'fa-github-alt',
          subtitle: 'https://github.com/some-org/some-other-repo-1'
        }, {
          title: 'some-other-repo-2',
          icon: 'fa-github-alt',
          subtitle: 'https://https://github.com/some-org/some-other-repo-1'
        }]
      }
    }
  }
</script>
