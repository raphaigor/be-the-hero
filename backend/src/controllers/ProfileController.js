const conection = require('../database/conection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {

        const ong_id = request.headers.authorization;

        const incidents = await conection('incidents')
            .where('ong_id', ong_id)
            .select('*');
            
        response.json(incidents);
    
    },

};
