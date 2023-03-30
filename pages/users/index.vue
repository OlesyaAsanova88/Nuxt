<template>
    <div>
        <h1 class="title">Пользователи</h1>
        <ul class="list">
            <li 
            v-for="user in users"
            :key="user.id"
            >
            <nuxt-link class="active" :to="`/users/${user.id}`">
                {{ user.name }}
            </nuxt-link>
        </li>
        </ul>
        
    </div>
   
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            users: 'users/getUsers'
        })
    }
}

</script>

<style scoped>
    
    .title {
        color: #383737;
        text-align: center;
        margin-top: 100px;
    }
     .list {
        text-align: center;
     }   
    
    li {
        list-style: none;
    }
    .active {
        font-size: 20px;
        color: rgb(62, 88, 62);
        font-weight: 500;
        list-style: none;
        text-decoration: none;
        }
</style>