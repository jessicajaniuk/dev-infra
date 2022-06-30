module.exports = {
  branchPrefix: 'ng-renovate/',
  gitAuthor: 'Angular Robot <angular-robot@google.com>',
  platform: 'github',
  forkMode: true,
  onboarding: false,
  repositories: [
    'angular/angular',
    'angular/dev-infra',
    'angular/components',
    'angular/angular-cli',
    'angular/universal',
    'angular/vscode-ng-language-service',
    'angular/ngcc-validation',
  ],
  productLinks: {
    documentation: 'https://docs.renovatebot.com/',
    help: 'https://github.com/angular/dev-infra',
    homepage: 'https://github.com/angular/dev-infra',
  },
};