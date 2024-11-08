import { CoreConfig } from '@tenoxui/core/full'
import { property } from '@tenoxui/property'
import __attr from '@nousantx/list-attribute'

const config: CoreConfig = {
  property,
  attributify: true,
  attributifyIgnore: __attr.standardAttributes
}

export default config
