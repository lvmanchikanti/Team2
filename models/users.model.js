var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, 'default': 'user' },
    rating: { type: Number },
    banned: { type: Boolean, 'default': false },
    favorite: { type: [Number], 'default': [] }
});

module.exports = mongoose.model('User', UserSchema);