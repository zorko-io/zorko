<template>
  <section>
    <v-card>
      <v-card-title>
        <h4>car.model.json</h4>
        <code>
           {
              export: [
                {field: "Name", as: "Name"},
                {field: "Miles_per_Gallon", as: "Miles per Gallon"},
                {field: "Weight_in_lbs", as: "Weight in lbs"},
              ]
           }
        </code>
      </v-card-title>
    </v-card>
  </section>
</template>

<script>
  export default {
    name: 'ModelDefinition'
  }
</script>
