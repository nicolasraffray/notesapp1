(function(exports) {
  function ViewNotes(notelist) {
    this.notelist = notelist
  }

  ViewNotes.prototype

  ViewNotes.prototype.shownotes = function() {
    string = "<ul>"
    for(let i = 0; i < this.notelist.notes.length; i++ ){ 
      var a = this.notelist.notes[i]
      if (a.getText().length > 20 ){var b = a.getText().split("").splice(0,19).join("")}else{var b = a.getText()}
      string += "<li><div id="+a.id+"><a href=#"+ b +">"+ b +"</a></div></li>"
    }
    string = string + "</ul>"
    return string
  }
  exports.ViewNotes = ViewNotes
})(this)


