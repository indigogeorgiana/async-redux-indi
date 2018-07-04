import React from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment';

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
  
        key={i}
        // title
        title={post.title}
        // date
        date= {d.toDateString()}
        // time
        time={post.created_utc}.toUTCString()
        // summary
        selftext:{post.selftext}
      />

    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
