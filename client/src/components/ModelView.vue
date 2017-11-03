<template>
  <section>
    <v-card>
      <v-card-title>
        <h4>eu-metrics.view.json</h4>
        <code>
           {
              transform: [
                { calculate: "0.453592*datum.weight_in_lbs", as: "Weight in kg"}
              ]
           }
        </code>
      </v-card-title>
    </v-card>
  </section>
</template>

<script>
  export default {
    name: 'ModelView'
  }
</script>
