import styles from './Post.module.scss';
import PostImage from '../PostImage/PostImage';
import { Link } from 'react-router-dom';

const Post = ({ postData, refresh }) => {

  const limitTile = 70;
  const limitDesc = 150;

  const renderLimitText = (textType) => {
    let limit = textType == 'title' ? limitTile : limitDesc;
    let originalText = textType == 'title' ? postData.title : postData.description;
    let words = originalText.split('');
    let resultText = '';
    for(let i = 0; i < limit; i++) {
      if(i < words.length) {
        resultText += words[i];
      }
      else {
        break;
      }
    }
    
    if(limit < words.length) {
      resultText += '...';
    }

    return (
      <>
      {resultText}
      {
        textType == 'desc' &&
        <Link 
          to={postData.url} 
          target="_blank"
          className={styles.readMoreLink}
        >อ่านต่อ</Link>
      }
      </>
    );
  }

  return (
    <div className={`${styles.post} ${postData.photos.length == 0 ? styles.noImg : ''}`}>
      {
        postData.photos.length > 0 &&
        <div className={styles.featureImage}>
          <PostImage 
            imgUrl={postData.photos[0]}
            isFeatureImg={true}
          />
        </div>
      }
      <div className={`${styles.content} ${postData.photos.length == 0 ? styles.fullWidth : ''}`}>
        <Link
          to={postData.url} 
          target="_blank"
          className={styles.postLink}>
          { renderLimitText('title') }
        </Link>
        <p className={styles.description}>
          { renderLimitText('desc') }
        </p>
        
        <div className={styles.tags}>
          <div>
            <strong>หมวด:</strong>
          </div>
          {
            postData.tags.length > 0 &&
            <ul className='list-inline d-inline-block'>
              {
                postData.tags.map((tag, index) => {
                  return (
                    <li key={index} className='list-inline-item'>
                      <Link to={`/?keyword=${tag}`} onClick={refresh}>{tag}</Link>
                    </li>
                  )
                })
              }
            </ul>
          }
        </div>
        {
          postData.photos.length > 1 &&
          <div className={styles.imgThumbnail}>
            <ul className='list-inline w-100'>
              {
                postData.photos.map((img, index) => {
                  if(index > 0)
                  return (
                    <li key={index} className='list-inline-item'>
                      <PostImage 
                        imgUrl={img}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Post;