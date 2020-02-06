
(function viewNote() {

  var notelist = new NoteList
  notelist.createNote("Hello")
  notelist.createNote("Hi")
  var viewnote = new ViewNotes(notelist)
  assert.isTrue(viewnote.shownotes() === "<ul><li><div>Hello</div></li><li><div>Hi</div></li></ul>");

})();


(function testCharCap() {
  var notelist = new NoteList
  notelist.createNote("1234567901234567890hello")
  var viewnote = new ViewNotes(notelist)
  console.log(viewnote)
  assert.isTrue(viewnote.shownotes() === "<ul><li><div>1234567901234567890</div></li></ul>")
  
})();