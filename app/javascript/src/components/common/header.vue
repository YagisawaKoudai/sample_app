<template>
  <header class="navbar navbar-fixed-top navbar-inverse">
    <div class="container">
      <router-link id="logo" to="/">Sample App</router-link>
      <nav>
        <ul class="nav navbar-nav navbar-right">
          <li>
  	  <router-link to="/">Home</router-link>
  	</li>
          <li>
  	  <router-link to="/help">Help</router-link>
  	</li>
       </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>
