import React from 'react';
import './Post.css';

// todo: each post should have a postID
// and who posted it, the data
// take the who and fill in the name, at handle, and picture
// list of postIDs is in a database, list of people is in a database.
const Post: React.FC = () => {
  return (
    <div className="post">
      <div className="post__profile-pic-container">
        <div>profile pic</div>
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

          <div className="post__ellipses-button">...</div>
        </div>

        <div className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere veritatis provident, eos suscipit placeat? Dolor vero excepturi
          facilis nulla totam impedit, hic perspiciatis tempora ullam, magnam
          necessitatibus. Nostrum, explicabo?
        </div>
        <div className="post__actions-container">
          <div className="post__action">
            <div>icon1</div>
            <div className="post__icon-number">1</div>
          </div>
          <div className="post__action">
            <div>icon2</div>
            <div className="post__icon-number">1</div>
          </div>
          <div className="post__action">
            <div>icon3</div>
            <div className="post__icon-number">1</div>
          </div>
          <div className="post__action">
            <div>icon4</div>
            <div className="post__icon-number">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
