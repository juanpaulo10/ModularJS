//another revealing pattern
var stats = (function(){
    var people = 0;

    //cache dom
    var $stats = $('#statsModule');
    var stats = $stats.find('#stats');
    var template = $stats.find('#stats-template').html();

    //functions
    function render () {
        stats.html(Mustache.render(template, {people: people}));
    }

    function setPeople (numPeople) {
        people = numPeople;
        render();
    }

    function destroy () {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    }

    return {
        setPeople: setPeople
    }
})();