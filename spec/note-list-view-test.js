
(function viewNote() {
  var notelist = new NoteList
  notelist.createNote("Hello")
  notelist.createNote("Hi")
  var viewnote = new ViewNotes(notelist)
  assert.isTrue(viewnote.shownotes() === "<ul><li><div>Hello</div></li><li><div>Hi</div></li></ul>");
})();