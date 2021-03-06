import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Feed from './feed'

class FeedsList extends React.Component {
  render() {
    const feeds = this.props.feeds.map((feed, idx) => <Feed
      key={feed.title}
      feedInfos={feed}
      feedIdx={idx}
    />)

    return (
      <div className='feed-list'>
        {feeds}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    feeds: state.FeedsReducer.feeds
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(FeedsList)
