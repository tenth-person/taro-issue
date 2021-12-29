import { Component } from 'react'
import './app.h5.scss'


class App extends Component {

  componentDidMount () {
    console.log(0)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
