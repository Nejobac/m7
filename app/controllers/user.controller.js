import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";

// createUser--> guardar y crear usuario
export async function createUser(firstName, lastName, email) {
    try {
        let user = await User.create({ firstName, lastName, email });
        console.log(`Usuario creado: ${JSON.stringify(user, null, 1)}`);
    } catch (error) {
        console.log(`Error al intentar crear el usuario`, error);
    }
}
// findUserById--> obtener los bootcamp por usuario
export async function findUserById(id) {
    try {
        let bootcampUser = await User.findByPk(id, {
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamps",
                    attributes: ["id", "title"],
                    through: {
                        attributes: [],
                    },
                },
            ],
        });
        bootcampUser = JSON.stringify(bootcampUser, null, 1);
        return bootcampUser;
    } catch (error) {
        console.log("Error al intentar encontrar el usuario:", error);
    }
}
// FindAll--> Obtener todos los usuarios incluyendo bootcamps
export async function findAll() {
    try {
        let users = await User.findAll({
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamps",
                    attributes: ["id", "title"],
                    through: {
                        attributes: [],
                    },
                },
            ],
        });
        users = JSON.stringify(users, null, 2);
        console.log(users);
        return users;
    } catch (error) {
        console.log(`Error al intentar encontrar a los usuarios:`, error);
    }
}
// updateUserById--> Actualizar usuario por id
export async function updateUserById(id, firstName) {
    try {
        await User.update({ firstName }, { where: { id } });
        let user = await User.findByPk(id);
        console.log(user.dataValues);
    } catch (error) {
        console.log(`Error al actualizar el usuario:`, error);
    }
}
// deleteUserById-->Eliminar usuario por id
export async function deleteUserById(id) {
    try {
        await User.destroy({ where: { id } });
        console.log(`El usuario con id ${id} ha sido eliminado \n`);
    } catch (error) {
        console.log(`>> Error al intentar eliminar el usuario:`, error);
    }
}
