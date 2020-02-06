
(function testAddsNote(){
  var notecontroller = new noteController
  notecontroller.newNote("Fav drink")
  assert.isTrue(notecontroller.notelist.returnNotes()[0].text === "Fav drink")
})();

(function testNoteListView(){

  var fakeDiv = {
    innerHTML: ""
  }
  
  var fakedocument = {
    getElementById: function(){
      return fakeDiv
    }
  }

  var notecontroller = new noteController(fakedocument)
  notecontroller.newNote('hey')
  // mockelement()
  notecontroller.insert("app")
  assert.isTrue(fakeDiv.innerHTML.includes("hey"));

  // function mockelement() {
  //   var elem = document.createElement("div")
  //   elem.setAttribute("id", "app")
  //   document.body.appendChild()
  // };
})();
