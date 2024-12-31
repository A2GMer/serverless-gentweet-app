import { defineFunction } from "@aws-amplify/backend";
    
export const getTrendsFunction = defineFunction({
  name: "getTrends-function",
  entry: "./handler.ts"
});