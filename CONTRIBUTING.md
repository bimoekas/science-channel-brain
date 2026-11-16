# Contributing

## Branch and collaboration

- Work directly on `main`; do not create new branches. Commit on `main` and push from `main`.
- Attribute Claude collaboration so GitHub detects it: end each commit message with this trailer (blank line before it):

  ```
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

## Commit rules

- Make each commit one reviewable, logical unit. Keep unrelated changes in separate commits.
- For this project, commit each independent document or feature separately; group files only when they form one coherent deliverable.
- Split work when one commit would combine independent deliverables or become hard to review. Do not split a small, inseparable change just to reduce line count.
- Use Conventional Commit messages: `docs:`, `feat:`, `fix:`, `chore:`, or `refactor:` followed by a specific, concise summary.
- Before committing, inspect the staged diff and confirm it contains only the intended files. For documentation changes, check links and facts against the approved source material.
- Do not include secrets, generated media, or unrelated formatting changes.
