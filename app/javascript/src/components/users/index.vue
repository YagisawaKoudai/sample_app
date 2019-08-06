<template>
  <div>
    <h1>All users</h1>
    <ul class="users">
      <li v-for="user in users">
	{{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted: function() {
    this.fetchAllUsers();
  },
  methods: {
    fetchAllUsers: function() {
      var vm = this;
      var path = window.Routes.ajax_users_path();
      vm.$http.get(path).then((res) => {
	vm.users = res.body;  
      });
    }
  }
}
</script>
