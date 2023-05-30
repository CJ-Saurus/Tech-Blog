const { Post } = require('../models');

const postData = [{
    title: 'The Getaway',
    content: 'Here I am again, talking to myself sitting at a red light both hands on the wheel how am I supposed to feel? So much running through my mind first you wanna be free now you say you need me.',
    user_id: 1

},
{
    title: 'If I were a fish',
    content: 'If I were a fish and you caught me you would say look at that fish shimmering in the sun such a rare one cannot believe that you caught on.',
    user_id: 2
},
{
    title: 'Let go',
    content: 'Excuse me too busy writing your tragedy these mishaps you bubble wrap when you have no idea what you are like.',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;