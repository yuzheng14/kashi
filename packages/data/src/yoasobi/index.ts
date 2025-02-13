import type { SongJsonSchema } from '@kashijs/schema/type'
import _セブンティーン from './セブンティーン.json'
import _群青 from './群青.json'
import _夜に駆ける from './夜に駆ける.json'

export const yoasobi = {
  セブンティーン: _セブンティーン as SongJsonSchema,
  群青: _群青 as SongJsonSchema,
  夜に駆ける: _夜に駆ける as SongJsonSchema,
}
