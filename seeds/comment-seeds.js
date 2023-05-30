const { Comment } = require('../models');

const commentData = [{
    comment_text: "Hey girl hey!",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "I used to like peaches...",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Embrace the Dickens.",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;