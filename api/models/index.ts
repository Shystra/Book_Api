import mongoose, { mongo } from 'mongoose';
import { v4 as uuid } from 'uuid'

const userSchema = new mongoose.Schema({
	_id:{
		type: String,
		default: uuid(),
	},
	name: String,
	email: String,
	password: String,
});
const User = mongoose.model('User', userSchema)


const booksSchema = new mongoose.Schema({
	_id: {
		type: String,
		default: uuid()
	},
	name: String,
	author: String,
	company: String,
	read: Boolean,
	dateRead: Date,
	description: String,
	rate: Number,
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
})

const Books = mongoose.model('Books', booksSchema)











export { User, Books }
