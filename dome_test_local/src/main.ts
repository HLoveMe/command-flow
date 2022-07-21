import { createApp } from 'vue';
import App from './App.vue';
import { createSafe } from 'safe-chain-object';
import { isArray, isEqual, isNumber, shape } from 'safe-chain-object/operators';

const dome = createSafe({ a: 1, b: 2 });
console.log(1111111111,dome.validator(shape({ a: isNumber, b: isEqual(2) })))

createApp(App).mount('#app');
