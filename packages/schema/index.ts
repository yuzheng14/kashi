/** the json schema of a song definition */
export interface SongJsonSchema {
  /** the title of the song */
  title: string
  /** the artist of the song */
  artist: string[]
  /** the name of album belonging to (extend in future) */
  album?: string
  /** the lyrics of the song */
  lyrics: SingleLineLyric[]
}

/** lyric of one line */
interface SingleLineLyric {
  /** when does this line start (extend in future) */
  start?: number
  /** when does this line end (extend in future) */
  end?: number
  /** translation of the song, now it could be chinese */
  translation?: string
  /** the original lyric */
  lyric: string
  annotation: AnnotatedLyricWord[]
}

/** lyric words splitted with annotation or without it */
interface AnnotatedLyricWord {
  /** the original word */
  original: string
  /** if it contains CJK character or katakana it will have this field to annotate it  */
  annotation?: string
}
