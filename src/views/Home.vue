<template>
    <div>
        <h1>Character List</h1>
        <div v-if="loading">Loading...</div>
        <ul>
            <li v-for="character in characters" :key="character.id">
                <router-link :to="{ name: 'character-detail', params: { id: character.id } }">
                    <img :src="character.image" :alt="character.name" />
                    <div>{{ character.name }}</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import rickandmortyApi from '@/services/rickandmorty-api.js'

export default {
    name: 'CharacterList',
    data() {
        return {
            loading: false,
            characters: []
        }
    },
    async created() {
        this.loading = true
        const response = await rickandmortyApi.get('character')
        this.characters = response.data.results
        this.loading = false
    }
}
</script>
  