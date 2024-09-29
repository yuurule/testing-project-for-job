'use client';

import styles from './PostImage.module.scss';

const PostImage = ({ 
  imgUrl, 
  isFeatureImg,
} : { 
  imgUrl : string, 
  isFeatureImg : boolean,
}) => {

  return (
    <figure className={`${styles.postImage} ${isFeatureImg ? styles.featureImg : ''}`}>
      <img src={imgUrl} />
    </figure>
  )
}

export default PostImage;