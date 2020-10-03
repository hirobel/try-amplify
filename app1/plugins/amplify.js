import Vue from 'vue'
import awsExports from '../src/aws-exports'
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';

Amplify.configure(awsExports)
Vue.use(AmplifyPlugin, AmplifyModules);


// https://blog.u-chan-chi.com/post/ampilfy-vue-cli/