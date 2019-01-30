import React from 'react';
import { use } from '@rndm/render';
import methods from './methods';
import components from './components';
import renderers from './renderers';
import middleware from './middleware';

const plugin = {
  key: 'plugin-template',
  components,
  methods,
  renderers,
  middleware,
};

use(plugin);

export default plugin;
