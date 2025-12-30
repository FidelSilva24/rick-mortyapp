import { defineStore } from 'pinia'
import { fetchCharacters } from '../services/charactersService.js'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [],
    page: 1,
    hasNext: false,
    hasPrev: false,
    loading: false,
    error: null
  }),

  actions: {
    async loadCharacters(page = 1) {
      this.loading = true
      this.error = null

      try {
        const data = await fetchCharacters(page)

        this.characters = data.results
        this.page = page
        this.hasNext = !!data.info.next
        this.hasPrev = !!data.info.prev
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    nextPage() {
      if (this.hasNext) {
        this.loadCharacters(this.page + 1)
      }
    },

    prevPage() {
      if (this.hasPrev) {
        this.loadCharacters(this.page - 1)
      }
    }
  }
})
