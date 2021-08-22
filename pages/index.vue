<template>
<div>
  <LayoutNavbar 
      v-if="loggedIn" 
      :username="username" 
      :loggedIn="loggedIn" 
  />
  <LayoutNavbar v-else/>
  <Home/>
  <LayoutFooter/>
</div>
</template>

<script>
export default {}
</script>
