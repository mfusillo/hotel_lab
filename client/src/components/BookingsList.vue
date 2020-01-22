<template>
  <div class="grid-container">
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

    eventBus.$on('booking-added', booking => this.bookings.push(booking))

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      console.log(index);
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-updated', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings[index].checkedIn = !this.bookings[index].checkedIn
    })
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
  .grid-container{
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

</style>
