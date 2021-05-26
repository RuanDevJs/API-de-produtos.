const RepositoryProducts = require("../Repository/RepositoryProdutcs");

class ProductController {
   async index(req, res){
    const products = await RepositoryProducts.findAll();
    res.json(products)
  }

  async store(req, res){
    const { name, linha, descricao, preco, quantidade } = req.body;
    const products = await RepositoryProducts.create({name, linha, descricao, preco, quantidade});
    res.json(products)
  }
}

module.exports = new ProductController;