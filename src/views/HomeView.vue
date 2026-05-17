<script setup lang="ts">
import { SCROLLBURGLARS } from '@/scripts/scrollburglars.ts';
</script>

<template>
  <main class="home-view">
    <ol class="scrollburglar-list">
      <li v-for="SCROLLBURGLAR in SCROLLBURGLARS" :key="SCROLLBURGLAR.file">
        <img :src="SCROLLBURGLAR.file" :alt="SCROLLBURGLAR.label" v-if="SCROLLBURGLAR.type === 'image'" />
        <video controls autoplay loop muted v-else>
          <source :src="SCROLLBURGLAR.file" />
        </video>

        <p>
          <span>{{ SCROLLBURGLAR.label }}</span>
          <span class="scrollburglar-date"
            >&nbsp;&nbsp;-&nbsp;&nbsp;{{ new Date(SCROLLBURGLAR.date).toLocaleDateString() }}</span
          >
        </p>
      </li>
    </ol>
  </main>
</template>

<style scoped lang="scss">
.home-view {
  --scrollburglar-size: 3rem;
  --padding-inline: 2rem;

  width: calc(100% + var(--scrollburglar-size));
  padding-block: 2rem;
  padding-left: var(--padding-inline);
  padding-right: calc(var(--padding-inline) + var(--scrollburglar-size));

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  p {
    margin-top: 0.5rem;
  }

  .scrollburglar-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(32rem, 100%), 1fr));
    gap: 2rem;

    .scrollburglar-date {
      color: var(--color-foreground-secondary);
      font-size: 0.875rem;
    }
  }
}
</style>
