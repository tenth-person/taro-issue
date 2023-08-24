import classNames from 'classnames'
import { View } from '@tarojs/components'
import styles from './index.module.less'



/**
 * Svg 图标。
 */
function SvgIcon ({ src, className, onClick }: any) {
  return (
    <View
      className={classNames(styles.icon, className)}
      style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(src)}")` }}
      onClick={onClick}
    />
  )
}

export default SvgIcon

