<template>
  <div class="booking-item">
    <h2>{{ booking.name }}</h2>
    <p>Email:</p> <p>{{ booking.email }}</p>
    <p>Checked In:
      <span v-if="booking.checkedIn"><img src="../assets/tick.png"></span>
      <span v-if="!booking.checkedIn"><img src="../assets/close.png"></span>
    </p>
    <button type="button" v-if="booking.checkedIn" v-on:click="handleUpdate">Check Out</button>
    <button type="button" v-if="!booking.checkedIn" v-on:click="handleUpdate">Check In</button>
    <button type="button" v-on:click="handleDelete()">Delete</button>
  </div>
</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'
export default {

  name: 'booking-list-item',
  props: ['booking'],
  methods: {
    handleDelete(){
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },
    handleUpdate(){
      const booking = {
        checkedIn: !this.booking.checkedIn
      }
      BookingService.updateBooking(booking, this.booking._id)
      .then(() => eventBus.$emit('booking-updated', this.booking._id))
    }
  }
}
</script>

<style scoped>

.booking-item{
  text-align: center;
  background-color: #CAE9FF;
  margin: 10px
}

img {
  height: 0.8em;
}

</style>
