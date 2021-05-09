let admin = require('../configFirebase')
let jwt = require('jsonwebtoken')
const db = admin.firestore();
let serviceAccount = require('../serviceAccount')

let usersRepository = {

    async create(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').where('email',"==",data.email).get()
            if(respValidDuplid.size > 0){
                objRespuesta.code = 3
                objRespuesta.message = 'El correo ya existe en la base de datos, intente con otro, gracias.'
                return objRespuesta
            }
            let tokenPassword = ''
            try {
                tokenPassword = jwt.sign(data.email,serviceAccount.key)
                console.log("el tokenPassword : ",tokenPassword)
            } catch (error) {
                console.error("error en el jwt : ",error)
            }
            let dataEntity = {}
            dataEntity.name = data.name
            dataEntity.email = data.email
            dataEntity.password = tokenPassword
            let respInsert = await db.collection('users').add(dataEntity)
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    },

    async update(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').doc(data.idUser).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplid.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El usuario no existe.'
                return objRespuesta
            }
            let tokenPassword = ''
            try {
                tokenPassword = jwt.sign(data.email,serviceAccount.key)
                console.log("el tokenPassword : ",tokenPassword)
            } catch (error) {
                console.error("error en el jwt : ",error)
            }
            let dataEntity = {}
            dataEntity.name = data.name
            dataEntity.email = data.email
            dataEntity.password = tokenPassword
            let respInsert = await db.collection('users').doc(data.idUser).update(dataEntity)
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    },

    async delete(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').doc(data.idUser).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplid.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El usuario no existe.'
                return objRespuesta
            }
            let respInsert = await db.collection('users').doc(data.idUser).delete()
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    },

    async createUserPoint(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').doc(data.idUser).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplid.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El usuario no existe.'
                return objRespuesta
            }
            let respValidReason = await db.collection('users').doc(data.idUser).collection('points').where('reason',"==",data.reason).get()
            if(respValidReason.size > 0){
                objRespuesta.code = 3
                objRespuesta.message = 'La razón ya se encuentra registrada.'
                return objRespuesta
            }

            let dataEntity = {}
            dataEntity.quantity = data.quantity
            dataEntity.reason = data.reason
            let respInsert = await db.collection('users').doc(data.idUser).collection('points').add(dataEntity)
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    },
    
    async updateUserPoint(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').doc(data.idUser).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplid.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El usuario no existe.'
                return objRespuesta
            }

            let respValidDuplidReason = await db.collection('users').doc(data.idUser).collection('points').doc(data.idPoint).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplidReason.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El puntaje no existe.'
                return objRespuesta
            }
            

            let dataEntity = {}
            dataEntity.quantity = data.quantity
            dataEntity.reason = data.reason
            let respInsert = await db.collection('users').doc(data.idUser).collection('points').doc(data.idPoint).update(dataEntity)
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    },

    async deleteUserPoint(data){
        try {
            let objRespuesta = {}
            console.log("el data : ",data)
            let respValidDuplid = await db.collection('users').doc(data.idUser).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplid.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El usuario no existe.'
                return objRespuesta
            }

            let respValidDuplidReason = await db.collection('users').doc(data.idUser).collection('points').doc(data.idPoint).get()
            console.log("el respValidDuplid : ",respValidDuplid)
            if(!respValidDuplidReason.exists){
                objRespuesta.code = 3
                objRespuesta.message = 'El puntaje no existe.'
                return objRespuesta
            }
            
            let respInsert = await db.collection('users').doc(data.idUser).collection('points').doc(data.idPoint).delete()
            console.log("el respInsert : ",respInsert)
            let respObj = {}
            respObj.code = 0;
            respObj.message = "Se realizó la operación con éxito.";
            return respObj
        } catch (error) {
            console.error("error en el repository : ",error)
            let respObj = {}
            respObj.code = 4;
            respObj.message = "Ocurrió un error.";
            respObj.messageError = new Error(error).message;
            respObj.messageErrorDetails = error;
            return respObj
        }
    }

}

module.exports = usersRepository;