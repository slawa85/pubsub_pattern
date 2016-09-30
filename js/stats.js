var stats = (function(){
  var people = 2;

  // cache DOM
  var $stats = $('#statsModule');
  var template = $stats.find('#stats-template').html();

  events.on('peopleChanged', setPeople);
  render();

  function render() {
    $stats.html(Mustache.render(template, { people: people }));
  }

  function setPeople(value) {
    people = value;
    render();
  }
})();
