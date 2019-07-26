'use strict';

module.exports = {
  // '{*/**/*.js,*.js}': ['prettier --write', 'eslint', 'git add'],
  '{*/**/*.{js,json,md,html,vue,jsx},*.{md,js,json}}': [
    'prettier --write',
    'git add',
  ],
};
