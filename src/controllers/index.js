const Model = require('../models/index'); // Adjust the model import as necessary

export const createItem = async (req, res) => {
    try {
        const resource = new Model(req.body);
        await resource.save();
        res.status(201).send(resource);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getAllItems = async (req, res) => {
    try {
        const resources = await Model.find();
        res.status(200).send(resources);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getItemById = async (req, res) => {
    try {
        const resource = await Model.findById(req.params.id);
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateItem = async (req, res) => {
    try {
        const resource = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteItem = async (req, res) => {
    try {
        const resource = await Model.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).send();
        }
        res.status(200).send(resource);
    } catch (error) {
        res.status(500).send(error);
    }
};