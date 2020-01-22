<template>
  <div>
    <h2>Name: {{ booking.name }}</h2>
    <p>Email: {{ booking.email }}</p>
    <p>Checked In: {{ booking.checkedIn }}</p>
  </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {

  name: 'booking-list-item',
  props: ['booking']
}
</script>

<style scoped>
</style>
