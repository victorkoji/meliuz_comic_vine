const axios = require('axios')
const Character = {}

class CharacterController {
	constructor(dao) {
		this.dao = dao;
	}

	list = async (req, res)=>{   
        const API_URL = process.env.API_URL
        const parameters = req.query
        parameters.api_key = process.env.API_KEY
        parameters.format = 'json'
    
        axios.get(`${API_URL}/characters`, {
                params: parameters
            })
            .then(function(response){
                res.json(response.data)
            })

        return res
    };
}

module.exports = new CharacterController(Character);