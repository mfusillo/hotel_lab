<template>
  <form method="post" v-on:submit.prevent="handleSubmit">

    <label for="name">Name</label>
    <input type="text" v-model="name" value="" id="name" required><br>

    <label for="">Email</label>
    <input type="text" v-model="email" value="" id="email" required><br>

    <label for="checkedIn">Checked In</label>
    <input type="radio" v-model="checkedIn" :value="true" name="checkedIn" required>Yes
    <input type="radio" v-model="checkedIn" :value="false" name="checkedIn" required>No
    <br>
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
      this.name = ""
      this.email = ""
      checkedIn = false
    }
  }

}
</script>

<style scoped>

  input {
    margin: 8px;
  }

  form {
    text-align: center;
    background-color: #CAE9FF;
    margin-left: 38%;
    margin-right: 38%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
