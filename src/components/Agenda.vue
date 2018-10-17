<template>
  <div>
    <v-date-picker
      v-model="date"
      full-width
      landscape
      class="mt-3"
      :allowed-dates="allowedDates"
      multiple
    ></v-date-picker>
  </div>
</template>
<script>
export default {
    data: () => ({
      date: [],
      menu: false
    }),
   methods: {
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0
  }
}
</script>
