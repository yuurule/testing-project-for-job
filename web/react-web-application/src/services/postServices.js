import axios from 'axios';

const SERVER_API = 'http://localhost:9000/';

export const getPosts = async (keyword='') => {
  const getPostsAPI = (resolve, reject) => {
    let url = SERVER_API + 'trips';
    if(keyword) {
      url += '?keyword=' + keyword;
    }
    axios
      .get(url)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        console.log(err);
        reject(`getPostsAPI failed: ${err}`);
      });
  }
  return new Promise(getPostsAPI);
}
