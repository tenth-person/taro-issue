import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

export default class Index extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <View className={styles.page}>
        <Text>测试</Text>
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
