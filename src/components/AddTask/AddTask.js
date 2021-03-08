import React, { Component } from 'react'

class AddTask extends Component {
  state = {
    invalidForm: true,
    formData: {
      text: ''
    }
  }

  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddTask(this.state.formData, this.props.history)
  }
  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  render() {
    return (
        <div className='add-form'>
          <form
            ref={this.formRef}
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <p className="add-a-line">Add A Task</p>
            <div className='form-item'>
              <input
                name="text"
                value={this.state.formData.text}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="buttons">
              <button
                className="btn"
                type="submit"
                disabled={this.state.invalidForm}
              >
                Add
              </button>
            </div>
          </form>
        </div>
    )
  }
}

export default AddTask;
