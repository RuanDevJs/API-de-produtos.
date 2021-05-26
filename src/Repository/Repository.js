const {v4} = require('uuid');
const Query = require('../database');

class Reposiroty {
  async findAll(){
   const row = await Query("SELECT * FROM USUARIOS");
   return row; 
  }

  async findById(id){
    const row = await Query("SELECT * FROM USUARIOS WHERE id = $1", [id]);
    return row;
  }

  async findByEmail(email){
    const row = await Query("SELECT * FROM USUARIOS WHERE email = $1", [email]);
    return row;
  }

  async create({name, email, cpf, senha}){
    const [row] = await Query(`
      INSERT INTO USUARIOS(name, email, senha, cpf)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, email, senha, cpf]);

    return row;
  }

  async update(id ,{name,email}){
    const [row] = await Query(`
      UPDATE USUARIOS
      SET name = $2, email = $3
      WHERE id = $1
      RETURNING *
    `, [id,name,email]);

    return row;
  }
}

module.exports = new Reposiroty;