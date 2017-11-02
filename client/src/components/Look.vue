<template>
  <app-sub-layout :title="title">
    <v-layout wrap>
      <v-flex xs12>
        <v-expansion-panel expand>
          <v-expansion-panel-content>
            <div slot="header">Filters</div>
            <v-card color="grey lighten-4" flat>
              <v-card-text>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex xs4>
                      <v-subheader>{{ filter.label }}</v-subheader>
                    </v-flex>
                    <v-flex xs4>
                      <v-select
                        :items="filter.operators"
                        v-model="filter.modelOperation"
                        label="Choose operation"
                        single-line
                        bottom
                      ></v-select>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                        name="input-1-3"
                        label="Put number of year"
                        single-line
                        :value="filter.value"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Visualization</div>
            <v-card>
              <v-card-text class="grey lighten-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content :value="true">
            <div slot="header">Data</div>
            <v-data-table
              v-bind:headers="table.headers"
              :items="table.items"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.sodium }}</td>
                <td class="text-xs-right">{{ props.item.calcium }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </template>
            </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </app-sub-layout>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'

  export default {
    name: 'Look',
    components: {
      AppSubLayout
    },
    data () {
      return {
        msg: 'I`m a look',
        title: 'Look',
        table: {
          headers: [
            {
              text: 'Dessert (100g serving)',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            {text: 'Calories', value: 'calories'},
            {text: 'Fat (g)', value: 'fat'},
            {text: 'Carbs (g)', value: 'carbs'},
            {text: 'Protein (g)', value: 'protein'},
            {text: 'Sodium (mg)', value: 'sodium'},
            {text: 'Calcium (%)', value: 'calcium'},
            {text: 'Iron (%)', value: 'iron'}
          ],
          items: [
            {
              value: false,
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              sodium: 87,
              calcium: '14%',
              iron: '1%'
            },
            {
              value: false,
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              sodium: 129,
              calcium: '8%',
              iron: '1%'
            },
            {
              value: false,
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
              sodium: 337,
              calcium: '6%',
              iron: '7%'
            },
            {
              value: false,
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              sodium: 413,
              calcium: '3%',
              iron: '8%'
            },
            {
              value: false,
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
              sodium: 327,
              calcium: '7%',
              iron: '16%'
            },
            {
              value: false,
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
              sodium: 50,
              calcium: '0%',
              iron: '0%'
            },
            {
              value: false,
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
              sodium: 38,
              calcium: '0%',
              iron: '2%'
            },
            {
              value: false,
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
              sodium: 562,
              calcium: '0%',
              iron: '45%'
            },
            {
              value: false,
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
              sodium: 326,
              calcium: '2%',
              iron: '22%'
            },
            {
              value: false,
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
              sodium: 54,
              calcium: '12%',
              iron: '6%'
            }
          ]
        },
        filter: {
          modelOperation: 'equal',
          label: 'Weather Year',
          operators: [
            'equal',
            'is not equal'
          ],
          value: 2000
        }
      }
    }
  }
</script>
