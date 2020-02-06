(function(exports) {
  function ViewNotes(notes) {
    this.notes = notes
  }

  ViewNotes.prototype.shownotes = function() {
    let x = this.notes.notes.map(function(currentValue) { return currentValue.text})
    var cleanstring = x.join("</div></li><li><div>")
    return `<ul><li><div>${cleanstring}</div></li></ul>`
  }
  exports.ViewNotes = ViewNotes
})(this)

