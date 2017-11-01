<template>
  <app-sub-layout :title="title">

      <v-layout row>
        <v-flex xs4>
          <v-toolbar>
            <v-toolbar-title v-text="titleRepoChooser"></v-toolbar-title>
          </v-toolbar>
          <v-card flat>
            <v-card-text>
              <v-radio-group v-model="selectedRepo" column>
                <v-radio label="Zorko Sandbox" value="zorko-sandbox" disabled></v-radio>
                <v-radio label="Our World in Data" value="world-in-data" disabled></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
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
      drawer: null,
      titleRepoChooser: 'Active Repository',
      items: [
        { title: 'Zorko Sandbox' },
        { title: 'Our World in Data' }
      ],
      selection: true,
      selectedRepo: 'zorko-sandbox'
    }
  }
}
</script>
