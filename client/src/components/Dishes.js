import React, { Fragment } from 'react'
import axios from 'axios'


class Dishes extends React.Component {
 state = { dishes: [] }

 componentDidMount() {
   axios.get(`/api/menus/${this.props.match.params.id}/dishes`)
    .then( ({ data }) => this.setState({ dishes: data }) )
 }

render() {
  const { dishes } = this.state
  return ( 
    <Fragment>
      <h1>Dish Options</h1>
      <ul>
        { dishes.map( d => 
          <li key={d.id}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
              <h4>${d.price}</h4>
          </li>
        )
      }
    </ul>
    </Fragment>
  )
}

}

export default Dishes