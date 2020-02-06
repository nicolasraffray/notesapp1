(function testCreateNote() {
  var noteList = new NoteList();
  assert.isTrue(noteList.createNote('Hello').getText() === 'Hello');
})();

(function testGetNote() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hi');
  assert.isTrue(noteList.returnNotes().length === 2);
  assert.isTrue(noteList.returnNotes()[0].getText() === 'Hello');
})();

(function testNoteID() {
  var notelist = new NoteList();
  notelist.createNote("Hello")
  notelist.createNote("Howdy")
  assert.isTrue(notelist.returnNotes()[0].id === 0 )
  assert.isTrue(notelist.returnNotes()[1].id === 1 )
})()