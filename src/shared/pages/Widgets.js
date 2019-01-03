import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Card from '../components/card'

class Widgets extends Component {

  constructor(props) {

    super(props)

    let widgets = props.staticContext;

    this.state = {
      loading: widgets && widgets.hasOwnProperty('data') ? false : true,
      widgets
    }

    this.fetchWidgets = this.fetchWidgets.bind(this)
  }

  componentDidMount() {

    const { loading, widgets } = this.state

    if (loading) {

      this.fetchWidgets()
    }
  }

  fetchWidgets() {

    const { fetchInitialData } = this.props
    this.setState(() => ({loading: true}))

    fetchInitialData()
    .then(widgets => this.setState({
      loading: false,
      widgets
    }))
  }

  render() {

    // const account = { ...this.props.account },
    //   accountIsInSession = Object.keys(account).length !== 0
    //
    // if (!accountIsInSession) return <Redirect to='/login' />

    let totalWidgets = 0;
    const { loading, widgets } = this.state

    if (loading === true) {
      return (<p>'Loading...'</p>)
    }else{
      totalWidgets = widgets.data.length

      return (
        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className='column'>
                {loading && totalWidgets === 0 && <h2>Loading...</h2>}
                {!loading && totalWidgets === 0 && <h2>Empty.</h2>}
                <Card apps={widgets.data} totalapps={totalWidgets} />
              </div>
            </div>
          </section>
        </div>
      )
    }
  }
}

export default Widgets
