import type { SongJsonSchema } from '@kashijs/schema/type'
import _セブンティーン from './セブンティーン.json'
import _群青 from './群青.json'
import _夜に駆ける from './夜に駆ける.json'
import _アイドル from './アイドル.json'
import _祝福 from './祝福.json'
import _UNDEAD from './UNDEAD.json'
import _HEART_BEAT from './HEART BEAT.json'

export const yoasobi = {
  セブンティーン: _セブンティーン as SongJsonSchema,
  群青: _群青 as SongJsonSchema,
  夜に駆ける: _夜に駆ける as SongJsonSchema,
  アイドル: _アイドル as SongJsonSchema,
  祝福: _祝福 as SongJsonSchema,
  UNDEAD: _UNDEAD as SongJsonSchema,
  'HEART BEAT': _HEART_BEAT as SongJsonSchema,
}
