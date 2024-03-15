import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function SimpleCard(props) {
  return (
    <div className={cn(styles.postContainer, props.className, 'simple-card')}>
      <div className={styles.mainContent}>
        <div className={styles.headerRow}>
          <div className={styles.profileSection}>
            <img className={styles.profileImage} src={'/assets/logo.png'} alt="alt text" />

            <div className={styles.profileDetails}>
              <h5 className={styles.username}>pxCode</h5>
              <div className={styles.editTimestamp}>Edited just now</div>
            </div>
          </div>

          <img className={styles.postImage} src={'/assets/more.png'} alt="alt text" />
        </div>

        <h5 className={styles.postTitle}>
          pxCode - the visual editor, empower our users to code the design to the web in a brand new way. But how much
          could pxCode can help?
        </h5>
        <div className={styles.readMoreButton}>Continue Reading</div>
        <img className={styles.postThumbnail} src={'/assets/cover.png'} alt="alt text" />

        <div className={styles.statsRow}>
          <div className={styles.likesCount}>320M likes</div>
          <div className={styles.commentsViewsInfo}>123K comments • 370M views</div>
        </div>

        <hr className={styles.dividerLine} size={1} />

        <div className={styles.actionsRow}>
          <div className={styles.likeButtonContainer}>
            <img className={styles.likeIcon} src={'/assets/like.png'} alt="alt text" />
            <div className={styles.likeText}>Like</div>
          </div>

          <div className={styles.commentButtonContainer}>
            <img className={styles.commentIcon} src={'/assets/comment.png'} alt="alt text" />
            <div className={styles.commentText}>Comment</div>
          </div>

          <div className={styles.shareButtonContainer}>
            <img className={styles.shareIcon} src={'/assets/share.png'} alt="alt text" />
            <div className={styles.shareText}>Share</div>
          </div>
        </div>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  className: PropTypes.string
};

export default SimpleCard;
