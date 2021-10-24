import mongoose from 'mongoose';
mongoose.set('debug', true);

interface IBook {
  title: string;
  author: string;
}

interface bookModelInterface extends mongoose.Model<BookDoc> {
  build(attr: IBook): BookDoc;
}

interface BookDoc extends mongoose.Document {
  title: string;
  author: string;
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

bookSchema.statics.build = (attr: IBook) => {
  return new Book(attr);
};

const Book = mongoose.model<BookDoc, bookModelInterface>('Book', bookSchema);

export { Book };
