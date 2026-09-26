## Description
A clear and concise description of what this pull request changes and why.

## Related issue
Closes #(issue number), if applicable.

## Type of change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Content update (copy, images, legal pages)
- [ ] Documentation update
- [ ] Refactor / cleanup

## How has this been tested?
Describe which pages you checked (home, platforms, account types, markets, partners, legal, contact, navigation, responsive layout) and whether you tested the dev server, the static export, or both.

## Checklist
- [ ] This pull request targets `dev` (or is a `dev` to `main` release)
- [ ] `npm run lint --workspace=apps/web` passes
- [ ] `npm run type-check --workspace=apps/web` passes
- [ ] `npm run build` completes without errors
- [ ] New paths to files in `public/` use `withBasePath()` and nothing hardcodes `/RestroFX`
- [ ] Links and navigation work, including links to the client portal
- [ ] No console errors in the browser
- [ ] I have updated documentation where needed
