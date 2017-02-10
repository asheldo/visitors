'use strict'

var repository = require('./repository')

// Could validate name content, overwritten id, ...
server.post('/person', postPerson)
server.post('/place', postPlace)
server.get('/person/:person_id', getPerson)
server.get('/place/:place_id', getPlace)
server.post('person/:person_id/place/:place_id', postPersonPlace)
server.get('/person/:person_id/place', getPersonPlaces)

function postPerson(req, res, next) {
  try {
    let person = repository.addPerson(req.params || {})
    if (person.error) {
      res.send(400, person.error)
    } else {
      res.send(201, person)
    }
  } catch (e) {
    res.send(500, e.message)
  }
  return next()
}

function postPlace(req, res, next) {
  try {
    let place = repository.addPlace(req.params || {})
    if (place.error) {
      res.send(400, place.error)
    } else {
      res.send(201, place)
    }
  } catch (e) {
    res.send(500, e.message)
  }
  return next()
}

function getPerson(req, res, next) {
  try {
    let person = repository.findPerson(req.params || {})
    if (!person) {
      res.send(404)
    } else if (person.error) {
      res.send(400, person.error)
    } else {
      res.send(200, person)
    }
  } catch (e) {
    res.send(500, e.message)
  }
}

function getPlace(req, res, next) {
  try {
    let place = repository.findPlace(req.params)
    if (!place) {
      res.send(404)
    } else if (place.error) {
      res.send(400, place.error)
    } else {
      res.send(200, place)
    }
  } catch (e) {
    res.send(500, e.message)
  }
}

function postPersonPlace(req, res, next) {
  try {
    let personPlace = repository.addPersonPlace(req.params)
    if (!personPlace) {
      res.send(404)
    } else if (personPlace.error) {
      res.send(400, personPlace.error)
    } else {
      res.send(201, personPlace)
    }
  } catch (e) {
    res.send(500, e.message)
  }
  return next()
}

function getPersonPlaces(req, res, next) {
  try {
    let places = repository.findPersonPlaces(req.params)
    if (!places) {
      res.send(404)
    } else if (places.error) {
      res.send(400, places.error)
    } else {
      res.send(200, places)
    }
  } catch (e) {
    res.send(500, e.message)
  }
}
