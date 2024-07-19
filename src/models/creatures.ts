import { model, Schema, Types } from 'mongoose'

const CreaturesSchema = new Schema({
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
  description: {
    type: String,
    required: true
  },
  rarity: {
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
  skills: [{
    Nombre: {
      type: String,
      required: true
    },
    Poder: {
      type: Number,
      required: true
    },
    Precision: {
      type: String,
      required: true
    },
    Objetivo: {
      type: String,
      required: true
    },
    Efecto: {
      type: String,
      required: true
    },
    Elemento: {
      type: String,
      required: true
    },
    Nivel: {
      type: Number,
      required: true
    }
  }]
})

export const Creature = model('Creature', CreaturesSchema)
