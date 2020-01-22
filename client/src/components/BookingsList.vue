<template>
  <div>
    <h1>Booking List</h1>
    <booking-list-item v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>

import BookingListItem from './BookingListItem'
import BookingService from '../services/BookingService.js'
import { eventBus } from '../main.js'

export default {
  name: 'bookings-list',

  data(){
    return {
      bookings: []
    }
  },

  components: {
    'booking-list-item': BookingListItem
  },

  mounted(){
    this.fetchBookings()
  },

  methods:{
    fetchBookings(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style scoped>
</style>
