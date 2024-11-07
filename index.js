const express = require('express');
const mongoose = require('mongoose');
const Event = require('./event'); 


mongoose.connect('mongodb://127.0.0.1:27017/celebrations')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get('/', async (req, res) => {
    const events = await Event.find({});
    res.render('home', { events });
});


app.get('/form', (req, res) => {
    res.render('form');
});


app.post('/events', async (req, res) => {
    const { eventName, price, image, } = req.body;
    const event = new Event({ eventName, price, image });
    await event.save();
    res.redirect('/');
});


app.post('/events/delete/:id', async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect('/');
});


app.get('/events/edit/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.render('edit', { event });
});


app.post('/events/update/:id', async (req, res) => {
    const { eventName, price, image} = req.body;
    await Event.findByIdAndUpdate(req.params.id, { eventName, price, image });
    res.redirect('/');
});


app.listen(1170, () => {
    console.log('Server running on port 1170');
});