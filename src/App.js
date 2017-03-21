import React, { Component } from 'react'
import Tabs from './Tabs'

class App extends Component {
  tabs = [
    {
      title: 'Tab#1',
      content: 'Content#1'
    },
    {
      title: 'Tab#2',
      content: 'Content#2'
    },
    {
      title: 'Tab#3',
      content: 'Content#3'
    }
  ]

  state = {
    activeTab: 0
  }

  setActiveTab = (index) => {
    this.setState({ activeTab: index })
  }

  render() {
    return (
      <div className='container mt-2'>
        <Tabs 
          tabs={this.tabs} 
          activeTab={this.state.activeTab}
          onTabChange={this.setActiveTab} />
      </div>
    )
  }
}

export default App
