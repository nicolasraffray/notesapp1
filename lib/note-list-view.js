(function(exports) {
  function ViewNotes(notes) {
    console.log(notes.notes)
    notes = notes.notes.map(function(currentValue) { return currentValue.text
    })
    this.notes = notes
  }

  ViewNotes.prototype.shownotes = function() {
    var cleanstring = this.notes.join("</div></li><li><div>")
    return `<ul><li><div>${cleanstring}</div></li></ul>`


  }

  

  


  exports.ViewNotes = ViewNotes
})(this)

