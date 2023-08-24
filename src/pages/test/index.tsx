import React from 'react'
import Taro, { useLoad } from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import SvgIcon from '@/components/svg-icon'
import styles from './index.module.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded. Text')
  })

  return (
    <View className={styles.page}>
      <Text>测试</Text>

      <SvgIcon
        src={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs><style>.a{fill:#ffdd00;}.b{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px;}</style></defs><circle class="a" cx="31.5" cy="31.5" r="31.5"/><path class="b" d="M19.28,41.14s13.47,11.45,21.84-1.21a3.41,3.41,0,0,1,4.31-1.25h0"/></svg>`}
        className={styles.icon}
      />

      <Button className={styles.button} onClick={() => Taro.navigateBack()}>返回</Button>
      <Button className={styles.button} onClick={() => Taro.navigateTo({ url: '/pages/index/index' })}>跳转</Button>
    </View>
  )
}
