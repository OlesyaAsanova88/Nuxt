<template>
  <div class="container">
    
    <div 
    class="card"
    v-for="user in users"
            :key="user.id"
    >
        <h1 class="title"> {{ id }} {{ user.name }} </h1>
        <img :src="`${user.img}`">
        <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sapiente illo minima, in, eaque veritatis fugiat iste deserunt mollitia, maxime autem? Esse quo sunt ipsa, quisquam consectetur explicabo in cumque.</p>
        <span class="email"> {{ user.email }} </span>
        <span class="db-text">Я в сетях</span>
        <a  class="social-link" href="#"> {{ user.social }} </a>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
    computed: {
        id() {
            return this.$route.params.id
        },
        

        ...mapGetters({
            users: 'users/getUsers'
        })
    }
}

</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-M_U5zTp3lppPI7NvhWZWnfsByuRc4JU7AQ&usqp=CAU);
    
}
.title {
    color: #383737;

}
img {
    height: 420px;
}
.card {
    margin-top: 50px;
    height: 700px;
    box-shadow: 0 0 15px coral;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 300px;
}
.text {
    width: 280px;
    color: #383737;
}
.email {
    color: blue;
    cursor: pointer;
    margin-bottom: 20px;
}
.db-text {
    color: #383737;
   
}
.social-link {
    margin-bottom: 20px;
    color: blueviolet;
    font-size: 20px;
    text-decoration: none;
}
</style>