<template>
  <div>
    <bookings-form />
    <bookings-list />
  </div>
</template>

<script>

import BookingsList from './components/BookingsList.vue'
import BookingsForm from './components/BookingsForm.vue'

export default {
  name: 'app',
  components: {
    'bookings-list': BookingsList,
    'bookings-form': BookingsForm
  }
}
</script>

<style>

</style>
