describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should handle numbers as well as strings', function(){
    set.add(5);
    expect(set.contains(5)).to.equal(true);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
  });

  it('should handle arrays and objects', function(){
    set.add([1,2]);
    expect(set.contains([1,2])).to.equal(true);
    set.add({a: 4});
    expect(set.contains({a: 4})).to.equal(true);
    set.remove([1,2]);
    expect(set.contains([1,2])).to.equal(false);
  });

});
