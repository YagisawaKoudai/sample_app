<template>
  <div>
    <Header></Header>
    <div class="center jumbotron">
      <h1>Welcome to the Sample App</h1>
    
      <h2>
        This is the home page for the
        <a href="http://railstutorial.jp/">Ruby on Rails Tutorial</a>
        sample application.
      </h2>
    
      <router-link class="btn btn-lg btn-primary" to="/signup">Sign up now!</router-link>
    </div>
    
    <a href="http://rubyonrails.org/">
      <img :src="railsImage" alt="Rails logo">
    </a>
  </div>
</template>

<script>
import Header from './common/header.vue';
import RailsImage from '../assets/images/rails.png';
export default {
  components: {
    Header
  },
  data() {
    return {
      railsImage: RailsImage
    }
  },
  methods: {
    
  }
}
</script>
