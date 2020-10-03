<template>
  <div class="container">
    <div>
      <div v-if="signedIn">
        <div id="nav">
          <div class="amplify-sign-out">
            {{username}} さんは現在サインイン中です
            <amplify-sign-out/>
          </div>
        </div>
        <router-view/>
      </div>
      <div v-else>
        <amplify-authenticator />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Auth } from 'aws-amplify'

export default Vue.extend({
  data(){
    return {
      signedIn: false,
      username: ''
    }
  },
  async beforeCreate() {
    try {
      let cognitoUser = await Auth.currentAuthenticatedUser()
      this.signedIn = true
      this.username = cognitoUser.username
    } catch (err) {
      this.signedIn = false
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
