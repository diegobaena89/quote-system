const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('thoughts2', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectamos com sucesso');
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
