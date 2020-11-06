<template>
  <div class='application-page'>
    <app-page-wrapper header-title="Hello">
    	<div class="container">
    		<h1>Welcome to the App</h1>
    	</div>
    </app-page-wrapper>
  </div>
</template>

<script>
  import AppPageWrapper from '@components/application-components/app-page-wrapper.vue'
  export default {
    name: 'application-page',
    components: {
    	AppPageWrapper
    }
  }
</script>