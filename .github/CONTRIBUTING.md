Welcome to our web-based Next.js project! We appreciate your interest in contributing. This guide outlines how to get started, submit changes, and follow our standards.

Getting Started
Fork the repository on GitHub and clone your fork locally.

```bash
git clone https://github.com/quddus-larik/tiny-ground.git
cd your-nextjs-project
```
Install dependencies with `pnpm` package manager.

```bash
pnpm install
```

Run the development server.
```bash
pnpm run dev
```
### Development Workflow

Create a feature branch from main based on changing e.g 

1. Working on Bug `fix/code-bug-name`.
2. Working on Refactorization `refactor/refactored-code-for-what`
3. Working on Optimization  `optimation/optimization-for-what`

Make your changes and ensure the app builds without errors: npm run build.
Test locally with npm run dev and build also.
`Commit changes with clear messages: git commit -m "Add feature: description".`

### Coding Standards
Follow these conventions for consistency.

1. TypeScript: Use strict mode; prefer interfaces over types for props.
2. ESLint/Prettier: Run npm run lint before committing. Auto-fix with npm run lint:fix.
3. Components: Use PascalCase; keep functional components with hooks.
4. Styles: Use TailwindCSS and avoid inline styles.
5. Next.js v6 Best Practices: Leverage App Router, Server Components, and static exports where possible.

### Important Note
Commits	Use conventional commits (feat:, fix:, docs:, etc.)
Pull Requests	Include a summary, screenshots if UI changes, and related issues

### Submitting Contributions
- Push your branch: git push origin feature/your-feature-name.
- Open a Pull Request (PR) on GitHub targeting main.
- Reference any related issues in the PR description (e.g., "Fixes #123").

> [!IMPORTANT]
> Ensure CI passes (linting, tests, build).
> PRs are reviewed promptly; expect feedback within 2-3 business days.

### Common Tasks
- Bug Fixes: Reproduce the issue, fix it, add a test case.
- New Features: Discuss large changes in an issue first.

## Questions?
Open an issue or ask in discussions. We use GitHub Discussions for Q&A.

> [!WARNING]
> Before Creating Issue ensure by checking `issues` tab to avoid dublications

Thank you for contributing! 🚀
