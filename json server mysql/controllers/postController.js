const models = require('../models');

exports.getPosts = (req, res, next) => {

  const keyword = req.query.keyword;

  models.Post.findAll({
    include: [
      models.Photo,
      models.Tag
    ]
  }).then(result => {

    const resultObj = {
      trips: []
    };
    const obj = [];

    result.map(post => {
      const tempObj = {
        eid: post.id,
        title: post.title,
        url: post.url,
        description: post.description,
        photos: [],
        tags: []
      }
      post.Photos.map(i => tempObj.photos.push(i.url));
      post.Tags.map(i => tempObj.tags.push(i.name));

      obj.push(tempObj);
    })

    if(keyword) {
      obj.map(post => {
        if(post.tags.find(tag => tag == keyword)) {
          resultObj.trips.push(post);
        }
      });
    }
    else {
      resultObj.trips = [...obj];
    }

    res.status(200).json({
      RESULT_CODE: 0,
      RESULT_MESSAGE: "get trips is successfully",
      RESULT_DATA: resultObj,
    });
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong!"
    });
  });
}