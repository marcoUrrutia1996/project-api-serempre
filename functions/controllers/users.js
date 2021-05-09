const functions = require("firebase-functions");
let admin = require('../configFirebase')
const db = admin.firestore();
//let corsM = require('cors')
//let corsMiddleware = corsM({ origin: "*",  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"});

let usersRepository = require('../repository/users')
let userValidationEntity = require('../validacionEntities/users')
/*let usersController = {

    async createUser(data){
        console.log("el data : ",data)
        let respInsert = await db.collection('users').add(data)
        let respObj = {}
        respObj.code = 0;
        respObj.message = "Se guardo con exito";
        return respObj
    }

}

module.exports = usersController;*/

exports.createUser = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'POST') {
            let respValidaciones = userValidationEntity.usersCreate(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.create(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser POST.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});


exports.updateUser = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'PUT') {
            let respValidaciones = userValidationEntity.usersUpdate(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.update(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser PUT.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});


exports.deleteUser = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'DELETE') {
            let respValidaciones = userValidationEntity.usersDelete(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.delete(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser PUT.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});

exports.createUserPoint = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'POST') {
            let respValidaciones = userValidationEntity.usersPointCreate(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.createUserPoint(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser POST.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});

exports.updateUserPoint = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'PUT') {
            let respValidaciones = userValidationEntity.usersPointUpdate(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.updateUserPoint(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser POST.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});

exports.deleteUserPoint = functions.https.onRequest(async (request, response) => {

    console.log("request.method: ", request.method);
    try {
        if (request.method === 'DELETE') {
            let respValidaciones = userValidationEntity.usersPointDelete(request.body);
            if(respValidaciones.code == 2){
                return response.json(respValidaciones)
            }
            let respRepo = await usersRepository.deleteUserPoint(request.body);
            return response.json(respRepo)
        } else {
            return response.json({ messsage: 'El método tiene que ser POST.' });
        }
    } catch (error) {
        console.log("el error : ",error)
        return response.json({ messsage: 'Ocurrió un error en el api.', error: error });
    }

});