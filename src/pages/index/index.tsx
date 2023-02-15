import { Component, PropsWithChildren } from 'react'
import { ScrollView, View } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  state: any
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1500)
  }

  render () {
    const { loading } = this.state

    return (
      <View className='index'>
        <ScrollView scrollY enhanced showScrollbar={false} style={{ height: 600 }}>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_tab: any, key: number) => {
              return (
                <View key={key} style={{ height: 200 }}>
                  {key}
                </View>
              )
            })
          }
        </ScrollView>

        {loading && <View>loading</View>}
        {/*<View>*/}
        {/*  {loading && <View>loading</View>}*/}
        {/*</View>*/}
      </View>
    )
  }
}
