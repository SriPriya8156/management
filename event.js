const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    eventName: String,
        image: String,
        price: String
     
});

const Event = mongoose.model('Event', eventSchema);
Event.insertMany([
    {
      eventName: "Birthday Party",
      image: "https://thejarvi.com/wp-content/uploads/2023/01/BIRTH004.jpg",  // Replace with actual image path or URL
      price: "Rs 5000"
    },
    {
      eventName: "Anniversary Celebration",
      image: "https://happiclap.com/wp-content/uploads/2023/07/Premium-Anniversary-2.jpg",  // Replace with actual image path or URL
      price: "Rs 7000"
    },
    {
      eventName: "Wedding",
      image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/02/fe.jpg",  // Replace with actual image path or URL
      price: "Rs 150000"
    },
    {
     eventName: "Professional Meetings",
      image: "https://www.frontsigns.com/wp-content/uploads/2022/01/conference-call-room-design.jpg",  // Replace with actual image path or URL
      price: "Rs 10000"
    }
  ])
  .then(() => console.log("Data inserted"))
  .catch(err => console.log(err));
  
module.exports = Event;