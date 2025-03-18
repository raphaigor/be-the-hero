const conection = require('../database/conection');
const crypto = require('crypto');

module.exports = {

    async create(request, response) {
    
        const { id } = request.body;

        const ong = await conection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: "ONG não encontrada!" })
        }
        
        response.json(ong);
    },

};
