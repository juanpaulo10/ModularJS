/* Object Literal */

// (function(){
//     var people = {
//         people: ['Will', 'Dog'],
//         init: function(){
//             this.cacheDom();
//             this.bindEvents();
//             console.log('ready mode');
//             this.render();
//         },
//         cacheDom: function () {
//             this.$el = $('#peopleModule');
//             this.$button = this.$el.find('#addPerson');
//             this.$input = this.$el.find('#inPerson');
//             this.$ul = this.$el.find('ul');
//             this.template = this.$el.find('#people-template').html();
//         },
//         render: function() {
//             var data = {
//                 people: this.people
//             };
//             console.log(this.people);
//             this.$ul.html(Mustache.render(this.template, data));
//         },
//         bindEvents: function () {
//             this.$button.on('click', this.addPerson.bind(this));
//             this.$ul.delegate('a.deletePerson', 'click', this.deletePerson.bind(this));
//         },
//         addPerson: function () {
//             console.log('click');
//             this.people.push(this.$input.val());
//             this.render();
//             this.$input.val(''); //clear input
//         },
//         deletePerson: function (evt) {
//             var $remove = $(evt.target).closest('li');
//             var i = this.$ul.find('li').index($remove);

//             this.people.splice(i, 1);
//             this.render();
//         }
//     };

//     people.init();
// })()

/* Revealing module pattern */
var people = (function(){
    var people = ["Will", "Dog"];

    //cache dom
    var $el = $('#peopleModule');
    var $button = $el.find('#addPerson');
    var $input = $el.find('#inPerson');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('a.deletePerson', 'click', deletePerson);

    //methods
    function render () {
        var data = {
            people: people
        };

        console.log(people);
        $ul.html(Mustache.render(template, data));
        stats.setPeople(people.length);
    }

    function addPerson (newName) {
        var name = (typeof newName === "string") ? newName : $input.val();
        console.log('click');
        people.push(name);
        render();
        $input.val(''); //clear input
    }

    function deletePerson (evt) {
        var i;
        if(typeof evt === "number"){
            i = evt;
            console.log('lol1');
        }else{
            console.log('lol2');
            var $remove = $(evt.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        render();
    }

    //render before returning
    render();

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();
