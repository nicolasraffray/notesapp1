(function(exports) {
  function ViewNotes(notes) {
    this.notes = notes
  }

  ViewNotes.prototype.shownotes = function() {
    var x = this.notes.notes.map(function(currentValue){
      if (currentValue.getText().length > 20 ){ return currentValue.getText().split("").splice(0,19).join("")}
      else { return currentValue.text}})
      console.log(x)
      var cleanstring = x.join("</div></li><li><div>")
    return `<ul><li><div>${cleanstring}</div></li></ul>`
  }
  exports.ViewNotes = ViewNotes
})(this)

