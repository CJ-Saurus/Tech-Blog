const { User } = require('../models');

const userData = [{
    username: 'Hilary',
    password: 'hilaryduff'

},
{
    username: 'Corook',
    password: 'fishy'
},
{
    username: 'Frou',
    password: 'frou'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;