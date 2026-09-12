import DefaultTheme from 'vitepress/theme';
import './custom.css';
import DvHome from './DvHome.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DvHome', DvHome);
  },
};
