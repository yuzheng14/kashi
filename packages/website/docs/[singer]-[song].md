---
title: ''
---

<script setup>
import { data } from './songs.data.ts'
import { useData } from "vitepress";
import Lyrics from '../components/Lyrics.vue'

const { params, title } = useData()

title.value = `${params.value.song} - ${params.value.singer}`

/** @type {import('@kashijs/schema/type').SongJsonSchema} */
const lyricsData = data[params.value.singer][params.value.song]
</script>

# {{ lyricsData.title }} - {{ lyricsData.artist.join('/') }}

<Lyrics :lyricsData="lyricsData" />

