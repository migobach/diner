import React from 'react'
import axios from 'axios'


class Menus extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get('/api/menus')
      .then( ({ data }) => this.setState({ menus: data }) )
  }

  render() {
    // const{ menu: { meal }} = this.state 
    return (
      <div>
        <h2>test</h2>
      </div>
    )
  }
}

export default Menus;