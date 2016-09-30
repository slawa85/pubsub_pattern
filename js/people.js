var people = (function() {

  // cache DOM
  var people      = ['John', 'Doe'];
  var $el         = $('#peopleModule');
  var $button     = $el.find('button');
  var $input      = $el.find('input');
  var $ul         = $el.find('ul');
  var template    = $el.find('#people-template').html();

  // bind events
  $button.on('click', addPerson);
  $ul.delegate('i.del', 'click', deletePerson);

  _render();

  function addPerson(value) {
    var value = (typeof value === 'string') ? value : $input.val();
    people.push(value);
    _render();
    $input.val('');
  }

  function deletePerson(value) {
    var index;
    if (typeof value === 'number'){
      index = value;
    } else {
      $remove = $(value.target).closest('li');
      index = $ul.find('li').index($remove);
    }

    people.splice(index, 1);
    _render();
  }

  function _render(){
    var data = { people: people }
    $ul.html(Mustache.render(template, data));
    events.emit('peopleChanged', people.length);
  }

  return {
    addPerson: addPerson,
    deletePerson: deletePerson,
  }
})();

