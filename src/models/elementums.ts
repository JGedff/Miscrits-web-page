import { model, Schema, Types } from 'mongoose'

const ElementumsSchema = new Schema({
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
  element: {
    type: Types.ObjectId,
    required: true,
    ref: 'Element'
  },
  location: {
    type: Types.ObjectId,
    required: true,
    ref: 'Location'
  },
  stats: {
    Vida: {
      type: String,
      required: true
    },
    Atq: {
      type: String,
      required: true
    },
    Def: {
      type: String,
      required: true
    },
    AtqEspecial: {
      type: String,
      required: true
    },
    DefEspecial: {
      type: String,
      required: true
    },
    Velocidad: {
      type: String,
      required: true
    }
  },
  habilities: [{
    type: String,
    required: true
  }]
})

export const Elementum = model('Elementum', ElementumsSchema)
