import React from 'react'

class MenuForm extends React.Component {
  defaultValues = { meal: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault() 
    const menu = { ...this.state }
    debugger
    this.props.submit(menu)
    this.setState({...this.defaultValues})

  }

  handleChange = (e) => {
    const { target: {name, value } } = e
    this.setState({ [name]: value })
  }

  render() {
    const { meal } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="meal"
          placeholder="Make a Menu"
          value={meal}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default MenuForm