'use strict';

const common = {
  ignores: [message => message.includes('dependabot')],
};

module.exports = {
  default: { extends: ['@commitlint/config-conventional'], ...common },
  lerna: { extends: ['@commitlint/config-lerna-scopes'], ...common },
};
