import express from 'express'
import { create } from 'express-handlebars'
import Handlebars from 'handlebars'
import { creaturesRouter, elementumsRouter, locationsRouter, mainRouter, npcsRouter } from './routes'
import { conditional, increment } from './helpers'
import { connect } from 'mongoose'

const app = express()
const port = 80

// eslint-disable-next-line @typescript-eslint/no-floating-promises
connect('mongodb://127.0.0.1/miscrits')

// This is ti make handlebars able to reed the properties that recives from the mongodb object
const hbs = create({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
})

// Set and execute engine
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

Handlebars.registerHelper('inc', increment)

Handlebars.registerHelper('condition', conditional)

// Folder with views
app.set('views', './views')

// Understand json request
// app.use(express.json())

// Understand forms request
// app.use(express.urlencoded({ extended: true }))

// Publish the public folder, so the web page can get the files inside (css, img, js...)
app.use(express.static('./public'))

// Routes
app.use('/creatures', creaturesRouter)
app.use('/elementums', elementumsRouter)
app.use('/locations', locationsRouter)
app.use('/npcs', npcsRouter)
app.use('/', mainRouter)

// Not found
app.all('*', mainRouter)

// For testing the app.listen(port) line, must be commented
// Web in localhost: ${port}
app.listen(port)

console.log(`Server ready at port: ${port}`)

export { app }
