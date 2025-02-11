<script setup lang="ts">
import type { SongJsonSchema } from '@nl/schema/type'

defineProps<{
  lyricsData: SongJsonSchema
}>()
</script>

<template>
  <div class="lyrics">
    <div
      class="one-line"
      v-for="(lyric, index) in lyricsData.lyrics"
      :key="index"
    >
      <div class="japanese">
        <template v-for="(annotation, index) in lyric.annotation" :key="index">
          <span v-if="annotation.annotation">
            <ruby>
              <span>{{ annotation.original }}</span>
              <rp>(</rp>
              <rt>{{ annotation.annotation }}</rt>
              <rp>)</rp>
            </ruby>
          </span>
          <span v-else>{{ annotation.original }}</span>
        </template>
      </div>
      <div class="translation">{{ lyric.translation }}</div>
      <div class="romanization">
        {{ lyric.romanization }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
rt {
  font-size: 80%;
  margin-right: 0.5rem;
}
.one-line {
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
}

.lyrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
