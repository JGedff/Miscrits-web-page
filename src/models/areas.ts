import { model, Schema, Types } from 'mongoose'

const AreasSchema = new Schema({
  miscrits: [{
    type: Types.ObjectId,
    required: true,
    ref: 'Creature'
  }],
  boss: {
    type: String,
    required: true
  }
})

export const Area = model('Area', AreasSchema)
