import { model, Schema, Types } from 'mongoose'

const LocationsSchema = new Schema({
  doc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  kingdom: {
    type: Types.ObjectId,
    required: true,
    ref: 'Kingdom'
  },
  areas: [{
    type: Types.ObjectId,
    required: true,
    ref: 'Area'
  }]
})

export const Location = model('Location', LocationsSchema)
