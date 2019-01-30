import { identity } from 'lodash';

const log = {
  type: 'log',
  value: {
    method: (...args) => console.log(args) || identity,
    resolve: identity,
  },
};

export default log;
