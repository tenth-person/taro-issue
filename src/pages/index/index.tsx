import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

export default class Index extends Component {

  componentDidMount () {

  }

  //  监听用户下拉刷新事件。
  onPullDownRefresh() {
    console.warn('------------------------------------- onPullDownRefresh => index -------------------------------------')
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 800)
  }

  onSwitchTab() {
    // Taro.switchTab({
    //   url: '/pages/user/index'
    // })

    Taro.navigateTo({
      url: '/pages/user/index'
    })
  }

  render () {
    return (
      <View className={styles.page} onClick={this.onSwitchTab.bind(this)}>
        <Text>首页</Text>
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
        <View className={styles.content} />
      </View>
    )
  }
}
