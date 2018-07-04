import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      country: ''
    }
    this.changeCountry = this.changeCountry.bind(this)
  }

  changeCountry (event) {
    this.setState({
      country: event.target.value

    })
  }

  render () {
    return (
      <div>
        <input onChange={this.changeCountry}/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.country))}>Submit</button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
