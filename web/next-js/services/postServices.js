import axios from 'axios';

const SERVER_API = 'http://localhost:9000/';

export const getPosts = async (keyword) => {
  console.log(keyword);
  const getPostsAPI = (resolve, reject) => {
    let url = SERVER_API + 'trips';
    if(keyword) {
      url += '?keyword=' + keyword;
    }
    axios
      .get(url)
      .then(result => {
        if(result.data.RESULT_CODE != '0') {
          throw new Error('get posts failed due to result code not 0')
        }
        //console.log(result.data);
        resolve(result.data.RESULT_DATA.trips);
      })
      .catch(err => {
        console.log(err);
        reject(`getPostsAPI failed: ${err}`);
      });
  }
  return new Promise(getPostsAPI);
}