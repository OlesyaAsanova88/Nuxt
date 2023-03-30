<!-- Please remove this file from your project -->
<template>
    <div class="wrapper">
      <div class="container">
        <h1 class="title">Анкета для друзей</h1>
        <p class="text">Найди понравившегося пользователя по интересам и свяжись с ним по почте. Вспомни старые добрые времена... Напиши письмо другу =) </p>
        <nuxt-link class="active" :to="`/users`">
          
          Перейти к списку пользователей <strong> > </strong>
          
        </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://celes.club/uploads/posts/2022-10/1667214295_1-celes-club-p-fon-druzya-krasivo-1.jpg);
  }
  .container {
    max-width: 1200px;
    text-align: center;
  }
  .title {
    color: #5f5e5e;
  }
  .text {
    font-size: 20px;
    max-width: 500px;
    line-height: 2;
    color: #5f5e5e;
  }
  .active {
    color: brown;
    font-size: 22px;
  }
 
</style>
