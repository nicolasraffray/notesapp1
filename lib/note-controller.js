(function(exports){
  function noteController(doc = document){
    this.notelist = new NoteList
    this.view = new ViewNotes(this.notelist)
    this.document = doc
  }

  noteController.prototype.displayList = function(){
    return this.view.shownotes()
  }

  noteController.prototype.insert = function(divID) {
    let message = this.displayList()
    let elem = this.document.getElementById(divID)
    elem.innerHTML = message }

  noteController.prototype.newNote = function(text){ 
    this.notelist.createNote(text)}

    exports.noteController = noteController
})(this)