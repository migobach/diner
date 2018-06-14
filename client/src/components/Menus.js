import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MenuForm from './MenuForm'


class Menus extends React.Component {
  state = { menus: [], edit: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( ({ data }) => this.setState({ menus: data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  submit = (menu) => {
    debugger
    const { menus } = this.state
    axios.post('api/menus', { menu })
    .then( res => 
      this.setState({
        menus: [res.data, ...menus],
        edit: false
      })
    )
  }

  form() {
    return <MenuForm submit={this.submit} />
  }

  show() {
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

  render() {
    const { edit } = this.state
    return (
      <div>
        <h1>Menu Options</h1>
        <button onClick={this.toggleEdit}>
          { edit ? 'Hide' : 'Show' } Form
        </button>
        { edit ? this.form() : this.show() }
      </div>  
    )
  }

}

export default Menus;