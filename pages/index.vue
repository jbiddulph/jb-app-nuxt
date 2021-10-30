<template>
  <div>
    <!-- <LayoutNavbar 
        v-if="isAuthenticated" 
        :username="username" 
        :loggedIn="isAuthenticated" 
    /> -->
    <LayoutNavbar/>
    <!-- <Home /> -->
    <VenuesSearch />
    <VenuesTowns />
        <EventsForm  />
    <LayoutFooter/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>