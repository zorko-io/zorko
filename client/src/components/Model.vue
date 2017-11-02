<template>
  <v-container grid-list-md>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs4>
          <v-list>
            <template v-for="(item, i) in items">
              <v-subheader :key="i">{{ item.title }}</v-subheader>
              <v-list-tile
                v-for="(child, j) in item.children"
                @click=""
                :key="j"
                :to="child.path"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ child.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
        <v-flex xs6 offset-md2 center class="u-move-top-200">
          <v-card>
            <v-card-title>
              <h6 class="grey--text text--darken-1">It's modeling section, allows you to model data from data source according to your tasks.</h6>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'

  export default {
    name: 'Model',
    components: {
      AppSubLayout
    },
    data () {
      return {
        msg: 'I`m a model',
        title: 'Model',
        docs: [{
          title: 'welcome'
        }],
        models: [],
        transforms: [],
        items: [{
          title: 'Documentation',
          children: [{
            title: 'welcome',
            path: '/model/1/docs/welcome'
          }
          ]
        },
        {
          title: 'Models',
          children: [{
            title: 'cars',
            path: '/model/1/models/cars'
          }
          ]
        },
        {
          title: 'Views',
          children: [{
            title: 'hoursepower',
            path: '/model/1/views/hoursepower'
          }
          ]
        }
        ]
      }
    }
  }
</script>

<style scoped>
  .u-move-top-200 {
    margin-top: 100px;
  }
</style>

