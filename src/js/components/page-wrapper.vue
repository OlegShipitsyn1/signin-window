<template>
  <div class='page-wrapper'>
    <div class="page-wrapper__heading">
      <h1 class="page-wrapper__title">
        <strong> Sign in </strong>
      </h1>

      <p class="page-wrapper__subtitle">
        Please fill in this form to sign in.
      </p>
    </div>

    <auth-window class="page-wrapper__auth-window" />
  </div>
</template>

<script>
import AuthWindow from './auth-window.vue'
export default {
  name: 'page-wrapper',
  
  components: {
    AuthWindow
  },
}
</script>

<style lang="scss"> 
  .page-wrapper {
    display: flex;
    flex-basis: 1170px;
    flex-direction: column;
    padding: 0 1.5rem;
    width: 100%;
    height: 100vh;
    background: url('~/assets/img/mountains.jpg') no-repeat center center /cover;
    // background: #522f6f;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      height: unset;
      min-height: 100vh;
    }
  }

  .page-wrapper::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    display: block;
    background-color: #522f6f;
    opacity: .8;
  }

  .page-wrapper__heading {
    position: relative;
    z-index: 100;
    margin-top: 30px;
    font-size: 15px;
    background: #00000023;
    border-radius: 2em 2em 0em 0;
    padding: 5px 10px 0px;
    border-bottom: 5px solid crimson;
  }

  .page-wrapper__title {
    font-size: 3.2em;
    color: white;
    letter-spacing: .03em;
  }

  .page-wrapper__subtitle {
    font-size: 1.7em;
    color: rgb(207, 199, 199);
    letter-spacing: .05em;
  }

  .page-wrapper__auth-window {
    margin: auto;
  }
</style>