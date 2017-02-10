var assert = require('assert');
var memstore = require('./memstore');

describe('addPerson', function() {
  it('handles Person persistence', function() {
    const bobA = ({id:null,name:"BobA"})
    var result1 = memstore.addPerson(bobA);
    assert.equal(isNaN(result1.id), false, 'addPerson("BobA") has :id');
    assert.equal(bobA.id, result1.id, 'original "BobA" object has :id');
    var result2 = memstore.addPerson(({id:null,name:"BobB"}));
    assert.equal(isNaN(result2.id), false, 'addPerson("BobB") has :id');
    assert.equal(result2.id > result1.id, true, '"BobA" and "BobB" have different IDs');
  });
});

describe('addPlace', function() {
  it('handles Place persistence', function() {
    const gPlace1 = ({id:null,name:"Greenwich",latitude:"49.9",longitude:"-0"})
    const gPlace2 = ({id:null,name:"Greenwich",latitude:"42.3",longitude:"73.5"})
    var result1 = memstore.addPlace(gPlace1)
    var result2 = memstore.addPlace(gPlace2)
    assert.equal(isNaN(result1.id), false, 'addPlace("Greenwich" .. ) has :id');
    assert.equal(isNaN(result2.id), false, 'addPlace("Greenwich" .. ) has :id');
    assert.equal(result2.id > result1.id, true, '"Greenwich"-a and "Greenwich"-b have different IDs');
  });
});

describe('addPersonPlace', function() {
  it('handles PersonPlace association persistence', function() {
    const bobA = ({id:null,name:"BobA"})
    var result1 = memstore.addPerson(bobA);
    assert.equal(isNaN(result1.id), false, 'addPerson("BobA") has :id');

    var result2 = memstore.addPersonPlaceID(result1.id, "-999");
    assert.equal(result2, "-999", 'addPersonPlace("BobA") has 1st :place_id');
    var result3 = memstore.addPersonPlaceID(result1.id, "999");
    assert.equal(result3, "999", 'addPersonPlace("BobA") has 1st :place_id');

    var result4 = memstore.getPersonPlaceIDs(result1.id);
    assert.equal(result4.has("999") && result4.has("-999"), true, '"BobA" has two different placeIDs');
  });
});
