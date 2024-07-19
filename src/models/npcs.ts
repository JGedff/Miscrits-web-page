import { model, Schema } from 'mongoose'

const NpcsSchema = new Schema({
  doc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true
  }
})

export const Npc = model('Npc', NpcsSchema)
