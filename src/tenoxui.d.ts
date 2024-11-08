
import { CoreConfig } from '@tenoxui/core/full'
import config from '../tenoxui.config'
type TenoxUIPropertyKeys = keyof typeof config.property
type TenoxUIAttributes = {
  [K in TenoxUIPropertyKeys]?: string
}
declare module 'react' {
  interface HTMLAttributes<T> extends TenoxUIAttributes {
    [key: string]: any
  }
}
