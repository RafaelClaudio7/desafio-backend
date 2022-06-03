import Cliente from '../models/Cliente';

class HomeController {
  async index(req, res) {
    const novoCliente = await Cliente.create({
      nome: 'Rafael',
      sobrenome: 'Claudio',
      email: 'rafaeltulaclaudio@gmail.com',
      idade: 22,
    });
    res.json(novoCliente);
  }
}

export default new HomeController();
