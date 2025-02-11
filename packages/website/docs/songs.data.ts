import { all } from '@nl/data'
import { defineLoader } from 'vitepress'

type Type = typeof all
declare const data: Type
export { data }

export default defineLoader({
  load: (): Type => all,
})
