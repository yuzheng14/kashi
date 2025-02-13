import type { SongJsonSchema } from '@kashijs/schema/type'
import _セブンティーン from './セブンティーン.json'
import _群青 from './群青.json'

export const yoasobi = {
  セブンティーン: _セブンティーン as SongJsonSchema,
  群青: _群青 as SongJsonSchema,
}
