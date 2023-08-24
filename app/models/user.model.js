import {db} from '../configs/sequelize.config.js';
import { DataTypes as dt } from 'sequelize';

const User = db.define('User', {
    firstName: {
        type: dt.STRING,
        allowNull: false
    },
    lastName: {
        type: dt.STRING,
        allowNull: false
    },
    email: {
        type: dt.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {timestamps: true});

export default User;