
(function testAddsNote(){
  var notelist = new NoteList
  var notecontroller = new noteController(notelist)
  notecontroller.newNote("Fav drink")
  assert.isTrue(notecontroller.notelist.returnNotes()[0].text === "Fav drink")
})()

(function testNoteListView(){
  var notelist = new NoteList
  var notecontroller = new noteController(notelist)
  notecontroller.newNote("Fav drink")
  assert.isTrue(notecontroller.show() === "sl;dfkgj")
})()