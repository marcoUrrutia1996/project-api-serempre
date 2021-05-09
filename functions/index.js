//const functions = require("firebase-functions");
//let usersController = require("./controllers/users")
//let admin = require('../config')
//const db = admin.firestore();

let usersController = require('./controllers/users')
 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

/*exports.createUsers = functions.https.onRequest(async (request, response) => {
    console.log("el data : ",data)
    let respInsert = await db.collection('users').add(data)
    let respObj = {}
    respObj.code = 0;
    respObj.message = "Se guardo con exito";
   response.json(respObj)
});*/


exports.createUser = usersController.createUser;
exports.updateUser = usersController.updateUser;
exports.deleteUser = usersController.deleteUser;