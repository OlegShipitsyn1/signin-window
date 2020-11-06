<template>
  <div class='auth-window'
      :class="{'on-wrong-data' : gotWrongData }">
    <div class="auth-window__inner">
      <auth-form
        class="auth-window__auth-form" 
        @onWrongData="addShakingClass" 
      />
    </div>
  </div>
</template>

<script>
  import AuthForm from '@components/auth-form.vue'
  export default {
    name: 'auth-window',

    components: {
      AuthForm
    },

    data() {
      return {
        gotWrongData: false
      }
    },

    methods: {
      addShakingClass() {
        this.gotWrongData = true
        setTimeout( () => this.gotWrongData = false, 500)
      }
    }

  }
</script>

<style lang="scss">
  .auth-window {
    z-index: 100;
    position: relative;
    border-radius: 1em;
    background: #fff;
    max-width: 440px;
  }

  .auth-window, .auth-window::before, .auth-window::after {
    transition: .3s ease;
  }

  .auth-window::before, .auth-window::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    border-radius: 1em;
  }

  .auth-window::before {
    box-shadow: -10px -10px 0 0 rgb(76, 76, 165);
  }

  .auth-window::after {
    box-shadow: 10px 10px 0px 0px #e2748a;
  }

  .auth-window__inner {
    padding: 1.5em 2em 1.5em 2em;
    position: relative;
    z-index: 10;
  }

  .on-wrong-data {
    animation: shake 1.43s cubic-bezier(.36,.07,.19,.77) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    &::after {
      box-shadow: 10px 10px 0px 0px #ca1136;
    }
     &::before {
       box-shadow: -10px -10px 0px 0px #ca1136;
    }
  }

@keyframes shake {
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(3deg);
  }
  
  20%, 40%, 60%, 80% {
    transform: rotate(-3deg);
  }
}

  // .auth-window__inner {
  //   box-shadow: -10px -10px 0 0 rgba(80,138,255,.52);
  // }
</style>