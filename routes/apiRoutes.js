const pizzaController = require('../controllers/getPizza');

module.exports = (server) => {
    server.get('/api/pizza', async(req, res) => await pizzaController.getAll(req, res));
    server.get('/api/snack', async(req, res) => await pizzaController.getAll(req, res));

    server.post('/api/create_pizza', async(req, res) => await pizzaController.create(req, res));
    server.get('/api/ping', function (req, res) {
        res.send('API is running');
    });
};
