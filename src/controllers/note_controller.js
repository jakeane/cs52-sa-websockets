import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndDelete(id).then((result) => {
    return result;
  });
};

export const createNote = (fields) => {
  const note = new Note();
  note.title = fields.title;
  note.x = fields.x;
  note.y = fields.y;
  note.zIndex = fields.zIndex;
  note.text = fields.text;
  return note.save().then((result) => {
    return result;
  });
};

export const updateNote = (id, fields) => {
  return Note.findById(id).then((note) => {
    Object.keys(fields).forEach((k) => {
      note[k] = fields[k];
    });
    return note.save();
  });
};
