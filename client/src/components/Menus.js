import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Menus extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get('/api/menus')
      .then( ({ data }) => this.setState({ menus: data }) )
  }

  render() {
    const { menus } = this.state
    return (
      <Fragment>
      <h1>Menus</h1>
      <ul>
        { menus.map( m => 
          <li key={m.id}>
            <Link to={`/menus/${m.id}`}>
              {m.meal}
            </Link>
          </li>
        )
      }
    </ul>
    </Fragment>
    )
  }


}

export default Menus;