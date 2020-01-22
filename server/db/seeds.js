use hotel
db.dropDatabase()

db.bookings.insertMany([
  {
    name: "Brian",
    email: "brian@gmail.com",
    checkedIn: true
  }
])
