import { model, Schema, Types } from 'mongoose'

const KingdomsSchema = new Schema({
  doc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  locations: [{
    type: Types.ObjectId,
    required: true,
    ref: 'Location'
  }]
})

export const Kingdom = model('Kingdom', KingdomsSchema)
