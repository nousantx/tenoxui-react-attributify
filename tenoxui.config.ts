import { CoreConfig } from '@tenoxui/core/full'
import { property as txProps } from '@tenoxui/property'
import __attr from '@nousantx/list-attribute'

const config: CoreConfig = {
  property: { ...txProps, bg: 'background', text: 'color', px: ['paddingLeft', 'paddingRight'] },
  attributify: true,
  attributifyIgnore: __attr.standardAttributes
}

export default config
