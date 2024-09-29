const dummyPosts = require('../dummyPost.json');

exports.getPosts = (req, res, next) => {

  const keyword = req.query.keyword;

  let resultTrips;
  if(keyword) {
    const tempResultTrips = {
      trips: []
    }
    dummyPosts.trips.map(trip => {
      if(trip.tags.find(tag => tag == keyword)) {
        tempResultTrips.trips.push(trip);
      }
    });
    resultTrips = tempResultTrips;
  }
  else {
    resultTrips = dummyPosts;
  }
  
  res.status(200).json({
    RESULT_CODE: 0,
    RESULT_MESSAGE: "get trips is successfully",
    RESULT_DATA: resultTrips,
  });
}