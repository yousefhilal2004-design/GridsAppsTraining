# Day 06 — GitHub Steps

Run these commands **from the `GridsAppsTraining` repository folder**. Each commit adds different project files. Push only after all three commits.

## Commit 1 — Homepage and image
```bash
git add Day06-Bootstrap-Grid-Utilities/index.html Day06-Bootstrap-Grid-Utilities/images/
git commit -m "Day 06: Add Bootstrap homepage and hero layout"
```

## Commit 2 — Pricing and dashboard
```bash
git add Day06-Bootstrap-Grid-Utilities/pricing.html Day06-Bootstrap-Grid-Utilities/dashboard.html
git commit -m "Day 06: Add B01 pricing and B03 dashboard challenges"
```

## Commit 3 — Styles and documentation
After testing and updating your real review answers:
```bash
git add Day06-Bootstrap-Grid-Utilities/css/ Day06-Bootstrap-Grid-Utilities/README.md Day06-Bootstrap-Grid-Utilities/CHALLENGES.md Day06-Bootstrap-Grid-Utilities/GIT-COMMITS.md
git commit -m "Day 06: Add custom CSS and project documentation"
```

## Push
```bash
git status
git pull --rebase origin main
git push origin main
```
If Git reports unstaged changes or conflicts, stop and resolve them before pushing. **Do not force push.**
