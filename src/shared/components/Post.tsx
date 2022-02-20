import React from 'react';
import './Post.css';

import iconReply from 'assets/iconReplyMinifiedCropped.svg';
import iconRepost from 'assets/iconRepostMinifiedCropped.svg';
import iconLike from 'assets/iconLikeMinifiedCropped.svg';
import iconShare from 'assets/iconShareCircles2MinifiedCropped.svg';
import iconEllipses from 'assets/iconEllipses2MinifiedCropped.svg';

import profilePic from 'assets/defaultProfilePic.jpg';

// todo: each post should have a postID
// and who posted it, the data
// take the who and fill in the name, at handle, and picture
// list of postIDs is in a database, list of people is in a database.
const Post: React.FC = () => {
  return (
    <div className="post">
      <div className="post__profile-pic-side-container">
        <div className="post__profile-pic-container">
          <img className="post__profile-pic" src={profilePic} alt="profile" />
        </div>
      </div>
      <div className="post__main">
        <div className="post__header">
          <div className="post__header-names-and-time-container">
            <div className="post__header-names-container">
              <div className="post__header-name collapsible">
                NameAasdfasdfasfasdfasdf
              </div>

              <div className="post__header-at-handle collapsible">
                @somethingName1
              </div>
            </div>
            <div className="post__header-dot">&#8901;</div>
            <div className="post__header-recentness">{`41m`}</div>
          </div>

          <div className="post__ellipses-button">
            <img className="icon__ellipses" src={iconEllipses} alt="ellipses" />
          </div>
        </div>

        <div className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere veritatis provident, eos suscipit placeat? Dolor vero excepturi
          facilis nulla totam impedit, hic perspiciatis tempora ullam, magnam
          necessitatibus. Nostrum, explicabo?
        </div>
        <div className="post__actions-container">
          <div className="post__action">
            <div className="icon__reply-container">
              <img className="icon__reply" src={iconReply} alt="reply" />
            </div>
            <div className="post__icon-number">1</div>
          </div>

          <div className="post__action">
            <div className="icon__repost-container">
              <img className="icon__repost" src={iconRepost} alt="repost" />
            </div>
            <div className="post__icon-number">1</div>
          </div>

          <div className="post__action">
            <div className="icon__like-container">
              <img className="icon__like" src={iconLike} alt="like" />
            </div>
            <div className="post__icon-number">1</div>
          </div>

          <div className="post__action">
            <div className="icon__share-container">
              <img className="icon__share" src={iconShare} alt="share" />
            </div>
            <div className="post__icon-number">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
