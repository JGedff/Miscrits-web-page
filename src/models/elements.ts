import { model, Schema } from 'mongoose'

const ElementsSchema = new Schema({
  doc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

export const Element = model('Element', ElementsSchema)
