/** the json schema of a song definition 歌曲的 json schema 定义 */
export interface SongJsonSchema {
  /** the title of the song 歌名 */
  title: string
  /** the artist of the song 歌手 */
  artist: string[]
  /** the name of album belonging to (extend in future) 专辑名（日后拓展） */
  album?: string
  /** the lyrics of the song 歌词数据 */
  lyrics: SingleLineLyric[]
}

/** lyric of one line 一行歌词 */
interface SingleLineLyric {
  /** when does this line start (extend in future) 开始时间（日后拓展） */
  start?: number
  /** when does this line end (extend in future) 结束时间（日后拓展） */
  end?: number
  /** translation of the song, now it could be chinese 翻译，目前只能是中文 */
  translation?: string
  /** the original lyric 原始歌词 */
  lyric: string
  /** the romanization of the lyric 歌词罗马音 */
  romanization: string
  annotation: AnnotatedLyricWord[]
}

/** lyric words splitted with annotation or without it 带有注音的歌词 */
interface AnnotatedLyricWord {
  /** the original word */
  original: string
  /** if it contains CJK character or katakana it will have this field to annotate it  */
  annotation?: string
}
