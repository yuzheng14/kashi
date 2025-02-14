import type { SongJsonSchema } from '@kashijs/schema/type'
import _セブンティーン from './セブンティーン.json'
import _群青 from './群青.json'
import _夜に駆ける from './夜に駆ける.json'
import _アイドル from './アイドル.json'
import _祝福 from './祝福.json'
import _UNDEAD from './UNDEAD.json'
import _HEART_BEAT from './HEART BEAT.json'
import _好きだ from './好きだ.json'
import _だぶん from './だぶん.json'
import _勇者 from './勇者.json'
import _ハルジオン from './ハルジオン.json'
import _もう少しだけ from './もう少しだけ.json'
import _怪物 from './怪物.json'

export const yoasobi = {
  セブンティーン: _セブンティーン as SongJsonSchema,
  群青: _群青 as SongJsonSchema,
  夜に駆ける: _夜に駆ける as SongJsonSchema,
  アイドル: _アイドル as SongJsonSchema,
  祝福: _祝福 as SongJsonSchema,
  UNDEAD: _UNDEAD as SongJsonSchema,
  'HEART BEAT': _HEART_BEAT as SongJsonSchema,
  好きだ: _好きだ as SongJsonSchema,
  だぶん: _だぶん as SongJsonSchema,
  勇者: _勇者 as SongJsonSchema,
  ハルジオン: _ハルジオン as SongJsonSchema,
  もう少しだけ: _もう少しだけ as SongJsonSchema,
  怪物: _怪物 as SongJsonSchema,
}
