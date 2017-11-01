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
    <!--<v-list>-->
    <!--<v-list-tile-->
    <!--v-for="(item, i) in items"-->
    <!--:key="i"-->
    <!--:to="item.path"-->
    <!--&gt;-->
    <!--<v-list-tile-action>-->
    <!--<v-icon small v-html="item.icon"></v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title v-text="item.title"></v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
   <!--<v-list>-->
     <!--<component-->
       <!--v-for="(item, i) in items"-->
       <!--:is="item.component"-->
       <!--:item="item"-->
     <!--&gt;-->
     <!--</component>-->
   <!--</v-list>-->


    <v-list>

      <template v-for="(item, i) in items">

        <v-list-tile
          v-if="item.component == 'item'"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon small v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-if="item.component == 'model'"
          :key="i"
        >
          <v-list-tile slot="item" @click="">
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
            v-for="(child, j) in item.children"
            @click=""
            :key="j"
            :to="child.path"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </template>

      <!--<v-list-tile to="/library">-->
        <!--<v-list-tile-action>-->
          <!--<v-icon small>list</v-icon>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
          <!--<v-list-tile-title>Library</v-list-tile-title>-->
        <!--</v-list-tile-content>-->
      <!--</v-list-tile>-->
      <!--<v-list-group>-->
        <!--<v-list-tile slot="item" @click="">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>bubble_chart</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>Explore</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>keyboard_arrow_down</v-icon>-->
          <!--</v-list-tile-action>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile :to="path">-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>Cars</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list-group>-->
    </v-list>

    <!--<v-list>-->

    <!--<v-list-title>-->
    <!--<v-list-tile-action>-->
    <!--<v-icon small v-html="list"></v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title>Explore</v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-title>-->
    <!--</v-list>-->
  </v-navigation-drawer>
</template>

<script>
  import AppNavigationItem from '@/components/AppNavigationItem'
  import AppNavigationModel from '@/components/AppNavigationModel'

  export default {
    name: 'AppNavigation',
    components: {
      item: AppNavigationItem,
      model: AppNavigationModel
    },
    data () {
      return {
        path: '/model',
        title: 'Zorko',
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        miniVariantWidth: 106,
        items: [{
          icon: 'list',
          component: 'item',
          title: 'Library',
          path: '/library'
        },
        {
          icon: 'highlight',
          title: 'Explore',
          component: 'item',
          path: '/explore',
          children: [{
            title: 'Cats',
            children: [{
              title: 'Horsepower',
              path: '/explore/1'
            }, {
              title: 'The Min/Max Whiskers',
              path: '/explore/2'
            }]
          }, {
            title: 'Population',
            children: [{
              title: 'Gender',
              path: '/explore/3'
            }]
          }, {
            title: 'Weather',
            children: [{
              title: 'Seattle',
              path: '/explore/4'
            }]
          }]
        },
        {
          icon: 'bubble_chart',
          title: 'Model',
          path: '/model',
          component: 'model',
          children: [{
            title: 'Cats',
            path: '/model/1'
          }, {
            title: 'Population',
            path: '/model/2'
          }, {
            title: 'Weather',
            path: '/model/3'
          }]
        },
        {
          icon: 'build',
          title: 'Admin',
          path: '/admin',
          component: 'item'
        },
        {
          icon: 'perm_identity',
          title: 'Account',
          path: '/account',
          component: 'item'
        }]
      }
    }
  }
</script>

