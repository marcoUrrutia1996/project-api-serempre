

let usersValidationEntity = {
    usersCreate(data){
        try {
            let objResp = {}
            if(!data.name || ((data.name+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del nombre no es correcto'
                return objResp
            }
            if(data.name.length < 2){
                objResp.code = 2
                objResp.message = 'El nombre tiene que tener mínimo 3 caracteres'
                return objResp
            }
            if(!data.email || ((data.email+' ').trim() == '') || !(new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$').test(data.email))){
                objResp.code = 2
                objResp.message = 'Formato del correo no es correcto'
                return objResp
            }
            if(!data.password || ((data.password+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del password no es correcto'
                return objResp
            }
            if(data.password.length < 2){
                objResp.code = 2
                objResp.message = 'El password tiene que tener mínimo 5 caracteres'
                return objResp
            }
            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    },

    usersUpdate(data){
        try {
            let objResp = {}
            if(!data.name || ((data.name+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del nombre no es correcto'
                return objResp
            }
            if(data.name.length < 2){
                objResp.code = 2
                objResp.message = 'El nombre tiene que tener mínimo 3 caracteres'
                return objResp
            }
            if(!data.email || ((data.email+' ').trim() == '') || !(new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$').test(data.email))){
                objResp.code = 2
                objResp.message = 'Formato del correo no es correcto'
                return objResp
            }
            if(!data.password || ((data.password+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del password no es correcto'
                return objResp
            }
            if(data.password.length < 2){
                objResp.code = 2
                objResp.message = 'El password tiene que tener mínimo 5 caracteres'
                return objResp
            }
            if(!data.idUser || ((data.idUser+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idUser no es correcto'
                return objResp
            }
            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    },

    usersDelete(data){
        try {
            let objResp = {}
            if(!data.idUser || ((data.idUser+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idUser no es correcto'
                return objResp
            }
            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    },

    usersPointCreate(data){
        try {
            let objResp = {}
            if(!(typeof data.quantity == 'number')){
                objResp.code = 2
                objResp.message = 'Formato de la cantidad de puntos no es correcto'
                return objResp
            }
            if(!data.reason || ((data.reason+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del motivo no es correcto'
                return objResp
            }
            if(data.reason.length < 2){
                objResp.code = 2
                objResp.message = 'El motivo tiene que tener mínimo 3 caracteres'
                return objResp
            }
            if(!data.idUser || ((data.idUser+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idUser no es correcto'
                return objResp
            }

            
            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    },

    usersPointUpdate(data){
        try {
            let objResp = {}
            if(!data.idUser || ((data.idUser+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idUser no es correcto'
                return objResp
            }
            if(!data.idPoint || ((data.idPoint+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idPoint no es correcto'
                return objResp
            }

            if(!(typeof data.quantity == 'number')){
                objResp.code = 2
                objResp.message = 'Formato de la cantidad de puntos no es correcto'
                return objResp
            }
            if(!data.reason || ((data.reason+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del motivo no es correcto'
                return objResp
            }
            if(data.reason.length < 2){
                objResp.code = 2
                objResp.message = 'El motivo tiene que tener mínimo 3 caracteres'
                return objResp
            }
            
            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    },

    usersPointDelete(data){
        try {
            let objResp = {}
            if(!data.idUser || ((data.idUser+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idUser no es correcto'
                return objResp
            }
            if(!data.idPoint || ((data.idPoint+' ').trim() == '')){
                objResp.code = 2
                objResp.message = 'Formato del idPoint no es correcto'
                return objResp
            }

            objResp.code = 0
            objResp.message = ''
            return objResp
        } catch (error) {
            console.log("el error en el validation createUser : ",error)
        }
        
    }
}

module.exports = usersValidationEntity;