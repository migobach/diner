import React, { Fragment } from 'react'
import axios from 'axios'


class Dishes extends React.Component {
 state = { dishes: [], menuName: '' }

 componentDidMount() {
  const { menuid } = this.props.match.params.id

   axios.get(`/api/menus/${this.props.match.params.id}/dishes`)
    .then( ({ data }) => this.setState({ dishes: data }) )

    axios.get(`/api/menus/${this.props.match.params.id}`)
    .then( res => this.setState({ menuName: res.data.meal }) ) 
  }

render() {
  const { dishes, menuName } = this.state
  return ( 
    <Fragment>
      <h1>{ menuName }</h1>
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