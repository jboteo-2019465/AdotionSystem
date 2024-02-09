import express from 'express'
import {deleteAnimal, getAllAnimals, save, searchAnimal, testAnimal, updateAnimal} from './animal.controller.js'

const api = express.Router();

api.get('/testAnimal', testAnimal)
api.post('/save', save)
api.get('/getAllAnimals', getAllAnimals)
api.get('searchAnimal', searchAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/delete/:id', deleteAnimal)

export default api
