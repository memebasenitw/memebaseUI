$("#modalBtn").click(function(){
    $('#test-modal').modal();
});


var ViewModel = function () {
    var self = this;
};


ko.applyBindings(new ViewModel());