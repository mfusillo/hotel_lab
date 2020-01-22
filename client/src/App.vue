<template>
  <bookings-list />
</template>

<script>

import BookingsList from './components/BookingsList.vue'

export default {
  name: 'app',
  components: {
    'bookings-list': BookingsList
  }
}
</script>

<style>

</style>
