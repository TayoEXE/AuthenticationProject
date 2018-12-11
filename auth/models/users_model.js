var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    favorite_genre: String,
    favorite_book: String,
    book_cover: String,
    hashed_password: String
});

mongoose.model('User', UserSchema);
