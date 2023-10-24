const { CONFIGS } = require("../configs/index.config");
const User = require("../models/user");
const { dataResponse } = require("../response/response");

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(200).json(dataResponse(CONFIGS.STATUS_CODE["success"], null, user));
    } catch (error) {
        res.status(500).json(dataResponse(CONFIGS.STATUS_CODE["error"], "Failed to create user"));
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(dataResponse(CONFIGS.STATUS_CODE["success"], null, users));
    } catch (error) {
        res.status(500).json(dataResponse(CONFIGS.STATUS_CODE["error"], "Failed to fetch users"));
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findByPk(id);
        res.status(200).json(dataResponse(CONFIGS.STATUS_CODE["success"], null, users));
    } catch (error) {
        res.status(500).json(dataResponse(CONFIGS.STATUS_CODE["error"], "Failed to fetch user"));
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json(dataResponse(CONFIGS.STATUS_CODE["nothing"], "Not found user"));
        }

        const { name, email } = req.body;
        user.name = name;
        user.email = email;
        await user.save();

        res.status(200).json(dataResponse(CONFIGS.STATUS_CODE["success"], 'User updated', user));
    } catch (error) {
        res.status(500).json(dataResponse(CONFIGS.STATUS_CODE["error"], "Failed to update user"));
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json(dataResponse(CONFIGS.STATUS_CODE["nothing"], "Not found user"));
        }
        await user.destroy();
        res.json(dataResponse(CONFIGS.STATUS_CODE["success"], "User deleted", user));
    } catch (error) {
        res.status(500).json(dataResponse(CONFIGS.STATUS_CODE["error"], "Failed to delete users"));
    }
};
