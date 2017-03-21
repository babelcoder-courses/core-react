import React, { Component } from 'react'
import Tabs from './Tabs'
import TabPane from './TabPane'

export default class App extends Component {
  render() {
    return (
      <div className='container mt-2'>
        <Tabs activeTab={0}>
          <TabPane title='Shade of You'>
            I’m in love with the shape of you
            We push and pull like a magnet do
            Although my heart is falling too
            I’m in love with your body
            Last night you were in my room 
            And now my bed sheets smell like you 
            Every day discovering something brand new
            I’m in love with your body
          </TabPane>
          <TabPane title="I Don't Wanna Live Forever">
            I don't wanna live forever
            'Cause I know I'll be livin' in vain
            And I don't wanna fit (fit, babe) wherever (wherever)
            I just wanna keep callin' your name
            Until you come back home
            I just wanna keep callin' your name
            Until you come back home
            I just wanna keep callin' your name
            Until you come back home
          </TabPane>
          <TabPane title='Chained To The Rhythm'>
            Turn it up, it’s your favorite song
            Dance, dance, dance to the distortion
            Come on, turn it up, keep it on repeat
            Stumbling around like a wasted zombie
            Yeah, we think we’re free
            Drink, this one is on me
            We’re all chained to the rhythm
            To the rhythm
            To the rhythm
          </TabPane>
        </Tabs>
      </div>
    )
  }
}