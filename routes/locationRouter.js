const express = require('express');
const locationRouter = express.Router();

const locations = ['Tacoma', 'Marysville', 'Seattle', 'Spokane', 'Bellingham'];

locationRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.send(locations);
    })
    .post((req, res) => {
        const submittedLocation = req.body.location;
        const totalLocations = [...locations, submittedLocation];
        res.send(totalLocations);
    });

module.exports = locationRouter;
