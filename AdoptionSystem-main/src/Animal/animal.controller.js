'use strict'//Modo Estricto

import { checkUpdate } from '../utils/validator.js'
import Animal from './animal.model.js'

export const testAnimal = (req, res) => {
    console.log('test is running')
    return res.send({ message: 'Test is running' })
}

//Guardar una Mascota
export const save = async (req, res) => {
    try {
        let data = req.body

        let animal = new Animal(data)
        await animal.save()
        return res.send({ message: `Pet ${animal.name} save successfully` })

    } catch (err) {
        console.error(err)
        return res.starus(500).send({ message: 'Error saving pet' })
    }
}

//Obtener todos los Animales
export const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        return res.send(animals);
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error retrieving animals' });
    }
};

//Buscar por medio de parametro
export const searchAnimal = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = { name: { $regex: new RegExp(search, 'i') } };
        }

        const animals = await Animal.find(query);

        return res.send(animals);
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error retrieving animals' });
    }
};


//Actualizar una Mascota
export const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body

        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data' })

        let updateAnimal = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )

        if (!updateAnimal) return res.status(401).send({ message: 'Animal not found and not updated' })
        return res.send({ message: 'Update Animal!', updateAnimal })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error updating animal' })
    }
}

export const deleteAnimal = async(req, res)=>{
    try {
        let { id } = req.params
        let deleteAnimal = await UserActivation.findOneAndDelete({_id: id})
        if(!deleteAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})

        return res.send({message: `Animal with username ${deletedAnimal.name} deleted successfully`})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting pet'})
    }
}




