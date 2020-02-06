(function(exports) {
  function ViewNotes(notelist) {
    this.notelist = notelist
  }

  ViewNotes.prototype

  ViewNotes.prototype.shownotes = function() {
    string = "<ul>"
    console.log(this.notelist.notes)
    for(let i = 0; i < this.notelist.notes.length; i++ ){ 
      var a = this.notelist.notes[i].getText() 
      console.log(a)
      if (a.length > 20 ){var a = a.split("").splice(0,19).join("")}
      string += "<li><div>" + a + "</div></li>"
    }
    string = string + "</ul>"
    console.log(string)
    return string

  }


  exports.ViewNotes = ViewNotes


    // var x = this.notes.notes.map(function(currentValue){
    //   if (currentValue.getText().length > 20 ){ return currentValue.getText().split("").splice(0,19).join("")}
    //   else { return currentValue.text}})
    //   var cleanstring = x.join("</div></li><li><div>")
    // return `<ul><li><div>${cleanstring}</div></li></ul>`

})(this)


