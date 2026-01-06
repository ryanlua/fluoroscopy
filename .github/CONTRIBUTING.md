# Contributing

## Specific Guidelines

Contributions to this resource pack are welcome!

### Use Beachball Versioning

All PRs submitted for any package **must** contain a change file using the Beachball tool to indicate the severity of the change. When a change is submitted, it will automatically update versions and publish to NPM via our pipelines. Use `npm run change` to generate changefiles with Beachball.

### Use a Consistent Coding Style

- Use ESLint to lint (`npm run lint`)
- Use Prettier to style
  - VS Code is set up to format on save
  - The lint command also runs Prettier and can fix issues: `npm run lint:fix`
