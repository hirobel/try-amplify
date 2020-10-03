import Vue from 'vue'
import awsExports from '../src/aws-exports'
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';

Amplify.configure(awsExports)
Vue.use(AmplifyPlugin, AmplifyModules);