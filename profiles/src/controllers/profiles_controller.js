const Profile = require('../models/profile');

// Crear un nuevo perfil
const createProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los perfiles
const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un solo perfil por ID
const getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Perfil no encontrado' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un perfil por ID
const updateProfileById = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!profile) {
            return res.status(404).json({ error: 'Perfil no encontrado' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un perfil por ID
const deleteProfileById = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Perfil no encontrado' });
        }
        res.json({ message: 'Perfil eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfileById,
    deleteProfileById,
};
