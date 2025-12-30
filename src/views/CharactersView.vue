<script setup>
import { onMounted } from 'vue';
import { useCharactersStore } from '../stores/characters';

const store = useCharactersStore()

onMounted(() => {
  store.loadCharacters()
}) 
</script>

<template>

  <div class="container">

    <header class="header">
    <h1>Rick & Morty Explorer</h1>
    <p>Browse characters from the Rick and Morty universe</p>
    </header>

    <p v-if="store.loading" class="info">Loading characters...</p>
    <p v-if="store.error" class="error">{{ store.error }}</p>
      
      <div class="grid">
        <div
  v-for="character in store.characters"
  :key="character.id"
  class="card"
>
  <div class="image-wrapper">
    <img :src="character.image" :alt="character.name" />

    <div class="overlay">
      <p><strong>Status:</strong> {{ character.status }}</p>
      <p><strong>Species:</strong> {{ character.species }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Origin:</strong> {{ character.origin.name }}</p>
    </div>
  </div>

  <h3>{{ character.name }}</h3>
</div>

  </div>

  <div class="pagination">
    <button @click="store.prevPage" :disabled="!store.hasPrev || store.loading">
      Prev
    </button>

    <span>Page {{ store.page }}</span>

    <button @click="store.nextPage" :disabled="!store.hasNext || store.loading">
      Next
    </button>
  </div>

  </div>
</template>

<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.header {
  margin-bottom: 24px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.header p {
  color: #666;
  margin-top: 4px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.card img{
  width: 100%;
  border-radius: 6px;
}

.card h3 {
  font-size: 17px;
  margin: 10px 0 4px;
}

.card p {
  font-size: 14px;
  color: #666;
}

.info {
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 16px;
}

.error {
  padding: 12px;
  background: #ffe5e5;
  color: #900;
  border-radius: 6px;
  margin-bottom: 16px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 24px;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.image-wrapper img {
  width: 100%;
  display: block;
}

/* Overlay oculto por defecto */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 12px;
  opacity: 0;
  transition: opacity 0.25s ease;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.overlay p {
  margin: 0;
  opacity: 0.9;
}

/* Mostrar overlay al hover */
.card:hover .overlay {
  opacity: 1;
}

</style>