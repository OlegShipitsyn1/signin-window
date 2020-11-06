<template>
  <form class="face auth-form">
    <div class="auth-form__wrapper">
      <div class="auth-form__field field">
        <label class="field__label" for="email">
          <b>Email</b>
        </label>

        <input
          class="field__input"
          type="text"
          name="email"
          placeholder="Enter Email"
          required
          v-model="emailFieldContent"
          :class="getClassDependOnValididy_EMAIL()"
        />
      </div>

      <div class="auth-form__field field">
        <label class="field__label" for="psw">
          <b>Password</b>
        </label>
        
        <input
          class="field__input"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="passwordFieldContent"
          :class="getClassDependOnValididy_PASSWORD()"
        />
      </div>

      <div class="auth-form__footer">
        <p class="auth-form__text">
          By visiting this site you agree to our official 
          <a class="link link--primary" href="#">Terms & Privacy</a>.
        </p>

        <button 
          class="auth-form__signin-btn"
          type="submit"
          to="/application"
          @click.prevent="getAccessResult"
          > Enter app </button
        >
      </div>
    </div>
  </form>
</template>

<script>

import router from '../router.js'
import axios from 'axios'

export default {
  name: 'auth-form',

  data() {
    return {
      emailFieldContent:    new String(),
      passwordFieldContent: new String(),
      isValidE: false,
      isValidP: false
    }
  },

  methods: {
    getClassDependOnValididy_PASSWORD() {
      const length = this.passwordFieldContent.length

      if ( length === 0 ) {
        this.isValidP = false
        return 'field__input--empty'
      } else if ( length > 3) {
        this.isValidP = true
        return 'field__input--valid'
      } else {
        this.isValidP = false
        return 'field__input--invalid'
      }
    },

    checkMailField() {
      if (/\@/.test(this.emailFieldContent)) {
        // Validate email address
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailFieldContent)) {
            return true
        }
      }
    },

    getClassDependOnValididy_EMAIL() {
      const length = this.emailFieldContent.length

      if ( length === 0 ) {
          this.isValidE = false
          return 'field__input--empty'
        } else if ( this.checkMailField() ) {
          this.isValidE = true
          return 'field__input--valid'
        } else {
          this.isValidE = false
          return 'field__input--invalid'
        }
    },

    denyAccess() {
      this.$emit('onWrongData')
    },

    giveAccess() {
      this.$router.push('/application')
    },

    makeRequestForAccess(URL) {
      axios
        .get(URL)
        .then(response => {

            const isAnyPassed = Object.keys(response.data).some(userDataKey => {
            const user = response.data[userDataKey]

            return user.email === this.emailFieldContent &&
                    user.password === this.passwordFieldContent
            })

            return isAnyPassed ? this.giveAccess() : this.denyAccess()
        })
        .catch((e) => {
            throw new Error(e)
        });
    },

    getAccessResult() {
      this.isValidE && this.isValidP ? 
        this.makeRequestForAccess('http://localhost:3030/users') :
        this.denyAccess()
    }
  }

}
</script>

<style lang="scss">
  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  .auth-form__field {
    margin-bottom: .5em;
  }

  .auth-form__wrapper {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }

  .auth-form__footer {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
  }

  .auth-form__signin-btn {
    margin: 0 auto;
    margin-top: 1.5em;
    align-self: center;
    padding: 1em 1.5em;
    border-radius: .3em;
    letter-spacing: .08em;
    background: #dc143c;
    color: white;
    box-shadow: 2px 3px 0 1px rgb(76, 76, 165);
    cursor: pointer;
    transition: transform .3s ease, box-shadow .5s ease;
  }

  .auth-form__signin-btn:hover {
    box-shadow: 2px 3px 10px 1px rgb(76, 76, 165);
  }
</style>
