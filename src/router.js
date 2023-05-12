import { createRouter, createWebHistory } from 'vue-router'
import CharacterList from '@/views/Home.vue'
import CharacterDetail from '@/views/DetailsPage.vue'

const routes = [
    {
        path: '/',
        name: 'character-list',
        component: CharacterList
    },
    {
        path: '/character/:id',
        name: 'character-detail',
        component: CharacterDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
