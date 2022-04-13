const express = require("express");
const router = express.Router();
const events = require('./eventController')


router.get('/event',events.index)
router.get('/event/:id',events.show)
router.post('/event/create',events.create)
router.delete('/event/:id',events.delete)
router.put('/event/:id',events.update)
router.get('/event/eventname/:name',events.findbyname)
router.get('/event/eventdate/:date',events.findbydate)
router.get('/event/eventtype/:type',events.findbytype)

module.exports = router;