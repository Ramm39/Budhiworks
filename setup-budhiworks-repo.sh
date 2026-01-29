#!/bin/bash
# Create git repo named budhiworks (remote: budhiworks)
# Run from project root: ./setup-budhiworks-repo.sh [remote-url]

set -e
cd "$(dirname "$0")"

if [ -d .git ]; then
  echo "Git repo already exists."
else
  git init
  echo "Git repository initialized."
fi

# Add remote named "budhiworks" if URL provided
if [ -n "$1" ]; then
  if git remote get-url budhiworks 2>/dev/null; then
    git remote set-url budhiworks "$1"
    echo "Updated remote 'budhiworks' to $1"
  else
    git remote add budhiworks "$1"
    echo "Added remote 'budhiworks' -> $1"
  fi
else
  echo "To add remote 'budhiworks', run:"
  echo "  git remote add budhiworks <your-repo-url>"
  echo "  e.g. git remote add budhiworks https://github.com/budhiworks/IT.git"
fi

git add .
if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to commit (working tree clean)."
else
  git commit -m "Initial commit"
  git branch -M main
  echo "Committed on branch 'main'."
fi

echo ""
echo "Done. To push: git push -u budhiworks main"
