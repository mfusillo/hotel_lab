<template>
  <div>
    <bookings-form />
    <h1 class="headers">All Bookings</h1>
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

  body{
    font-family: 'Muli', sans-serif;
    background-color: #62B6CB;
  }
  .headers {
    text-align: center;
  }

  input[type="text"] {
    font-family: 'Muli', sans-serif;
    font-size: 0.9em;
  }

  button, input[type="submit"]{
    margin: 10px;
    background-color: #5FA8D3;
    font-size: 0.9em;
    width: 100px;
    border-radius: 5px;
  }

  button:hover, input[type="submit"]:hover{
    background-color: #BEE9E8;
  }

  :focus {
    outline: none;
  }
</style>
