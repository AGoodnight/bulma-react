import React, { Component } from 'react'

class TextInput extends Component {

  render() {

    const { name, onChange, placeholder, value } = this.props

    return (
      <div className='field'>
        <label className='label'>{name}</label>
        <div className='control'>
          <input className='input'
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type='text'
            value={value} />
        </div>
      </div>
    )
  }
}

export default TextInput
