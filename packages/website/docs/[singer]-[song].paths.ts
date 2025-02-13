import { all } from '@kashijs/data'
export default {
  paths: () =>
    Object.entries(all).flatMap(([singer, songs]) =>
      Object.keys(songs).map((song) => ({ params: { singer, song: song } })),
    ),
}
