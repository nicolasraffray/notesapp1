(function(exports){
  function noteController(notelist){
    this.notelist = notelist
    this.view = "hey"
  }

  noteController.prototype.addNote = function(){}

  noteController.prototype.insert = function(text) {
    var elem = document.getElementById("app")
    console.log(elem)
    elem.innerHTML = text }

  noteController.prototype.newNote = function(text){ 
    this.notelist.createNote(text)
  }

    exports.noteController = noteController
})(this)