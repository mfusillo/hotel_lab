<template>
  <form method="post" v-on:submit.prevent="handleSubmit">

    <label for="name">Name</label>
    <input type="text" v-model="name" value="" id="name" required>

    <label for="">Email</label>
    <input type="text" v-model="email" value="" id="email" required>

    <label for="checkedIn">Checked In</label>
    <input type="radio" v-model="checkedIn" :value="true" name="checkedIn" required>Yes
    <input type="radio" v-model="checkedIn" :value="false" name="checkedIn" required>No

    <input type="submit" value="Add Booking">

  </form>
</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'

export default {

  name: 'bookings-form',
  data(){
    return {
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    handleSubmit(){
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }

      BookingService.postBooking(booking)
      .then(result => eventBus.$emit('booking-added', result))

    }
  }

}
</script>

<style scoped>
</style>
