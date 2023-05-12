<template>
    <div>
        <h1>{{ character.name }}</h1>
        <div>
            <img :src="character.image" :alt="character.name" />
        </div>
        <div>
            <p><strong>Species:</strong> {{ character.species }}</p>
            <p><strong>Gender
                    :</strong> {{ character.gender }}</p>
            <p><strong>Status:</strong> {{ character.status }}</p>
            <p><strong>Origin:</strong> {{ character.origin.name }}</p>
            <p><strong>Location:</strong> {{ character.location.name }}</p>
        </div>

    </div>
</template>
<script>
import rickandmortyApi from '@/services/rickandmorty-api.js'

export default {
    name: 'CharacterDetail',
    data() {
        return {
            character: null,
            loading: false
        }
    },
    async created() {
        this.loading = true
        const id = this.$route.params.id
        const response = await rickandmortyApi.get(`character/${id}`)
        this.character = response.data
        this.loading = false
    }
}
</script>