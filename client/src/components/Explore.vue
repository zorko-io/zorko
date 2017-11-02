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
      <v-flex xs6 offset-md2 center class="u-move-top-200">
        <v-card>
          <v-card-title>
            <h6 class="grey--text text--darken-1">Select any dimension, measure to start exploration</h6>
          </v-card-title>
        </v-card>
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

<style scoped>
  .u-move-top-200 {
    margin-top: 200px;
  }
</style>

