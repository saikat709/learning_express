const bcrypt = require('bcrypt');

function getHash(password){
    const saltRounds = 10; // betweem 10-12
    bcrypt.hash(password, salt, (error, hash)=>{
        if(error){
            return undefined;
        }
        return hash;
    });
}

function checkHash(password, hash){
    bcrypt.compare(password, hash, (error, result)=>{
        if(error)  return undefined;
        return result;
    });
}

module.exports = {getHash, checkHash};