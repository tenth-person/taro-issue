import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

export default class Index extends Component {

  componentDidMount () {

  }

  //  监听用户下拉刷新事件。
  onPullDownRefresh() {
    console.warn('------------------------------------- onPullDownRefresh => user -------------------------------------')
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 800)
  }

  onSwitchTab() {
    // Taro.redirectTo({
    //   url: '/pages/test/index'
    // })

    Taro.navigateTo({
      url: '/pages/test/index'
    })
  }

  render () {
    return (
      <View className={styles.page} onClick={this.onSwitchTab.bind(this)}>
        <Text>我的</Text>
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
