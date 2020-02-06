(function(exports) {
  function NoteList() {
    this.notes = [];
    this.idgenerator = 0
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text, this.idgenerator);
    this.notes.push(note);
    this.idgenerator++
    return note
  }

  NoteList.prototype.returnNotes = function(text) {
    return this.notes
  }

  exports.NoteList = NoteList
})(this);