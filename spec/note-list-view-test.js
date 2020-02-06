
(function viewNote() {

  var notelist = new NoteList
  notelist.createNote("Hello")
  notelist.createNote("Hi")
  var viewnote = new ViewNotes(notelist)
  assert.isTrue(viewnote.shownotes() === "<ul><li><div id=0><a href=#Hello>Hello</a></div></li><li><div id=1><a href=#Hi>Hi</a></div></li></ul>")

})();


(function testCharCap() {
  var notelist = new NoteList
  notelist.createNote("1234567901234567890hello")
  var viewnote = new ViewNotes(notelist)
  assert.isTrue(viewnote.shownotes() === "<ul><li><div id=0><a href=#1234567901234567890>1234567901234567890</a></div></li></ul>")
})();

