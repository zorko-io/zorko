<template>
  <app-sub-layout :title="title">
    <v-layout wrap>
      <v-flex xs3>
        <v-card>
          <v-card-text>
            <v-subheader>Dimentions</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in dimentions" v-bind:key="item.title" @click="">
              <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <div>
                  <v-btn small color="primary" dark>+ Filter</v-btn>
                </div>
              </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-subheader>Mesures</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in mesures" v-bind:key="item.title" @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark>+ Filter</v-btn>
                  </div>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <!--<v-card>-->
          <!--<v-toolbar color="light-blue" dark>-->
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <!--<v-toolbar-title>Looks</v-toolbar-title>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn icon>-->
              <!--<v-icon>more_vert</v-icon>-->
            <!--</v-btn>-->
          <!--</v-toolbar>-->
          <!--<v-list two-line subheader>-->
            <!--<v-list-tile avatar v-for="item in looks" v-bind:key="item.title" @click="">-->
              <!--<v-list-tile-avatar>-->
                <!--<v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>-->
              <!--</v-list-tile-avatar>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
              <!--<v-list-tile-action>-->
                <!--<v-btn icon ripple>-->
                  <!--<v-icon color="grey lighten-1">info</v-icon>-->
                <!--</v-btn>-->
              <!--</v-list-tile-action>-->
            <!--</v-list-tile>-->
          <!--</v-list>-->
        <!--</v-card>-->
      </v-flex>
    </v-layout>
  </app-sub-layout>
</template>

<script>
import AppSubLayout from '@/components/AppSubLayout'

export default {
  name: 'Explore',
  components: {
    AppSubLayout
  },
  data () {
    return {
      msg: 'I`m a explore',
      title: 'Explore',
      dimentions: [{
        title: 'Name'
      }, {
        title: 'Origin'
      }, {
        title: 'Year'
      }],
      mesures: [{
        title: 'Miles per Gallon'
      }, {
        title: 'Cylinders'
      }, {
        title: 'Displacement'
      }, {
        title: 'Horsepower'
      }, {
        title: 'Weight in lbs'
      }, {
        title: 'Acceleration'
      }]
    }
  }
}
</script>

