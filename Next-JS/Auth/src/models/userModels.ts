import mongoose, { Schema } from 'mongoose'

// Based on Learn-Auth-Next's user model; secrets are excluded by default.
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false },
    verifyEmail: { type: Boolean, default: false },
    sessionVersion: { type: Number, default: 0, select: false },
    verifyEmailToken: { type: String, select: false },
    verifyTokenExpire: { type: Date, select: false },
    forgotPassword: { type: String, select: false },
    forgotPasswordExpire: { type: Date, select: false },
  },
  { timestamps: true },
)

export default mongoose.models.AuthUser ||
  mongoose.model('AuthUser', userSchema)
