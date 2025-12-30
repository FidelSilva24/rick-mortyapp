const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchCharacters({ page = 1, status = '', species = '' }) {
  try {
    const params = new URLSearchParams()

    params.append('page', page)
    if (status) params.append('status', status)
    if (species) params.append('species', species)

    const response = await fetch(
      `${BASE_URL}/character?${params.toString()}`
    )

    if (!response.ok) {
      throw new Error('No characters found')
    }

    const data = await response.json()

    return {
      results: data.results,
      info: data.info
    }
  } catch {
    throw new Error('Unable to fetch characters')
  }
}
