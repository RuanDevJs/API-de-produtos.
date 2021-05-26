const repositories = require('../Repository/Repository');

class UserController {
  async index(req,res){
    const findAll = await repositories.findAll();
    res.json(findAll)
  }

  async show(req,res){
    const { id } = req.params;
    const findById = await repositories.findById(id);
    res.json(findById)
  }

  async store(req, res){
    const {name, email, cpf, senha} = req.body;

    if(!cpf && !email && !nome && !senha){
      return res.json({error: 404});
    }

    const findByEmail = await repositories.findByEmail(email);

    if(findByEmail){
      return res.json({error: "This email is already exists."});
    }

    const create = await repositories.create({name, email, cpf, senha});

    res.json({create});
  }

  async update(req, res){
    const { name, email } = req.body;
    const {id} = req.params;
    const row = await repositories.update(id, {name, email});
    res.json(row);
  }

}

module.exports = new UserController;