import { Document, Schema, model, models } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  email: string
  username: string
  photo: string
  firstName: string
  lastName: string
  isAdmin: boolean
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  isAdmin: { type: Boolean },
})

const User = models?.User || model('User', UserSchema)
export default User
