(function testsingleNoteHTML(){
  var note = new Note("test")
  var snv = new SingleNoteView(note)
  assert.isTrue(snv.viewSingleNote() === "<div>test</div>")
})()