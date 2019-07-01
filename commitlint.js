'use strict';

module.exports = {
  default: { extends: ['@commitlint/config-conventional'] },
  lerna: { extends: ['@commitlint/config-lerna-scopes'] },
};
