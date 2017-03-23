import React, { Component } from 'react'
import Tabs from './Tabs'
import Tab from './Tab'
import TabList from './TabList'
import TabPanel from './TabPanel'

class App extends Component {
  render() {
    return (
      <div className='container mt-2'>
        <Tabs selectedIndex={0}>
          <TabList>
            <Tab tabIndex={0}>Tab#1</Tab>
            <Tab tabIndex={1}>Tab#2</Tab>
            <Tab tabIndex={2}>Tab#3</Tab>
          </TabList>
          <TabPanel tabIndex={0}>TabPanel#1</TabPanel>
          <TabPanel tabIndex={1}>TabPanel#2</TabPanel>
          <TabPanel tabIndex={2}>TabPanel#3</TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default App
