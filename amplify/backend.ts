import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getTrendsFunction } from './getTrends-function/resource';

defineBackend({
  auth,
  data,
  getTrendsFunction,
});
