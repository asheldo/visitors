var assert = require('assert');
var repository = require('./repository');

describe('addPerson', function() {
  it('handles CRUD add Person', function() {
    var result = repository.addPerson(({name:"Bob"}));
    assert.equal(isNaN(result.id), false, 'addPerson("Bob") has :id');
  });
  it('handles CRUD add Person(zero arg)', function() {
    var result = repository.addPerson(({name:0}));
    assert.equal(isNaN(result.id), false, 'addPerson(0) has :id');
  });
  it('handles CRUD add Person(empty string arg)', function() {
    var result = repository.addPerson(({name:""}));
    assert.equal(isNaN(result.id), false, 'addPerson("") has :id');
  });
  it('handles CRUD create Person(null json arg)', function() {
    var result = repository.addPerson(({}));
    assert.equal(isNaN(result.id), true, 'addPerson(null) has no :id');
  });
});


describe('findPerson(:person_id)', function() {
  it('handles CRUD read person', function() {
    var person = repository.addPerson(({name:"Bob"}))
    var result = repository.findPerson(({person_id: person.id }))
    assert.equal(isNaN(result.id), false, 'getPerson(..) result has :id');
  });
  it('handles CRUD find Person(missing arg)', function() {
    var result = repository.findPerson(({id: "wrong-name" }))
    assert.equal(isNaN(result.id), true, 'findPerson(missing arg) result has no :id');
    assert.equal(result.error, "Person lookup requires valid :person_id", 'getPerson(missing arg) result has no :id');
  });
});

describe('addPlace', function() {
  it('handles CRUD add Place', function() {
    var result = repository.addPlace(({name:"Greenwich",latitude:"49.9",longitude:"-0"}))
    assert.equal(isNaN(result.id), false, 'addPlace(..) result has :id');
  });
  it('handles CRUD add Place(numeric zero arg)', function() {
    var result = repository.addPlace(({name:0,latitude:49.9,longitude:0}))
    assert.equal(isNaN(result.id), false, 'addPlace(..) result has :id');
  });
  it('handles CRUD add Place(missing arg)', function() {
    var result = repository.addPlace(({latitude:"49.9",longitude:"-0"}))
    assert.equal(isNaN(result.id), true, 'addPlace(..) result has no :id');
  });
});

describe('findPlace', function() {
  it('handles CRUD find Place', function() {
    var place = repository.addPlace(({name:"Greenwich",latitude:"49.9",longitude:"-0"}))
    var result = repository.findPlace(({place_id: place.id }))
    assert.equal(isNaN(result.id), false, 'findPlace(..) result has no :id');
  });
  it('handles CRUD find Place(missing arg)', function() {
    var result = repository.findPlace(({id: "wrong-name" }))
    assert.equal(isNaN(result.id), true, 'getPlace(missing arg) result has no :id');
    assert.equal(result.error, "Place lookup requires valid :place_id", 'getPlace(missing arg) result has no :id');
  });
});

describe('addPersonPlace', function() {
  it('handles CRUD create Person associated Place', function() {
    var person = repository.addPerson(({name:"Bob"}))
    var place = repository.addPlace(({name:"Greenwich",latitude:"49.9",longitude:"-0"}))
    var result = repository.addPersonPlace(({person_id : person.id, place_id : place.id}))
    assert.equal(isNaN(result.person_id), false, 'addPersonPlace(..) result has no :person_id');
    assert.equal(isNaN(result.place_id), false, 'addPersonPlace(..) result has no :place_id');
  });
});
