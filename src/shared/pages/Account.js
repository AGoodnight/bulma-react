import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Account extends Component {

  render() {
    const account = { ...this.props.account },
      accountIsInSession = Object.keys(account).length !== 0

    if (!accountIsInSession) return <Redirect to='/login' />


    return (
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="./assets/img/profile-pic.png" alt="Profile Picture"/>
                      </figure>
                    </div>
                    <div className='media-content'>
                      <p className='title is-4'>{account.first_name}</p>
                      <p className='subtitle is-6'>{account.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Account
