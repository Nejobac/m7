import User from '../models/user.model.js';
import Bootcamp from '../models/bootcamp.model.js';

// createBootcamp --> guardar y crear bootcamp
export async function createBootcamp(title, cue, description) {
    try {
        let bootcamp = await Bootcamp.create({title, cue, description});
        console.log(`Bootcamp creado: ${JSON.stringify(bootcamp, null, 4)}`)
    } catch (error) {
        console.log(`Error al intentar crear el bootcamp: `, error);
    }
};
// addUser--> agregar usuario al bootcamp
export async function addUser(bootcamp_Id, user_id) {
    try {
        const bootcamp = await Bootcamp.findByPk(bootcamp_Id)
        const user = await User.findByPk(user_id);
        if(!bootcamp || !user) {
            !bootcamp? console.log("No se pudo encontrar el bootcamp!") : console.log("No se pudo encontrar el usuario!"); 
            return null;
        };
        bootcamp.addUser(user);
        console.log('***************************');
        console.log(`Usuario con id=${user.id} agregado al bootcamp con id=${bootcamp.id}`); 
        console.log('***************************')
    } catch (error) {
        console.log("Error al intentar agregar Usuario al Bootcamp: ", error);
    }
};
// findById --> Obtener los bootcamp por id
export async function findById(id) {
    try {
        let bootcamp = await Bootcamp.findByPk(id, {
            include: [{
                model: User,
                as: 'users',
                attributes: ['id', 'firstName'],
                through: {
                    attributes: [],
                }
            }]
        });
        bootcamp = JSON.stringify(bootcamp, null, 2);
        console.log(bootcamp);
        return bootcamp;
    } catch (error) {
        console.log(`Error al intentar encontrar el bootcamp: `, error)
    }
};
// findAll --> obtener todos los bootcamp incluyendo los usuarios 
export async function findAll(){
    try {
        let bootcamps = await Bootcamp.findAll({
            include: [{
                model: User,
                as: 'users',
                attributes: ['id', 'firstName'],
                through: {
                    attributes: [],
                }
            }]
        });
        bootcamps = JSON.stringify(bootcamps, null, 2);
        console.log(bootcamps);
        return bootcamps;
    } catch (error) {
        console.log(`Error al intentar encontrar los bootcamps: `, error)
    }
};
