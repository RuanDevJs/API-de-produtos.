const Query = require("../database")

class RepositoryProducts {
  async findAll(){
    const row = await Query("SELECT * FROM produtos");
    return row;
  }

  async create({name, linha, descricao, preco, quantidade}){
    const [row] = await Query(`
      INSERT INTO produtos(name, linha, descricao, preco, quantidade)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, linha, descricao, preco, quantidade]);
      return row;
  }
}

module.exports = new RepositoryProducts();