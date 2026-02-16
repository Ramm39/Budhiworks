#!/bin/bash
# Create git repo named Buddhiworks (remote: Buddhiworks)
# Run from project root: ./setup-Buddhiworks-repo.sh [remote-url]

set -e
cd "$(dirname "$0")"

if [ -d .git ]; then
  echo "Git repo already exists."
else
  git init
  echo "Git repository initialized."
fi

# Add remote named "Buddhiworks" if URL provided
if [ -n "$1" ]; then
  if git remote get-url Buddhiworks 2>/dev/null; then
    git remote set-url Buddhiworks "$1"
    echo "Updated remote 'Buddhiworks' to $1"
  else
    git remote add Buddhiworks "$1"
    echo "Added remote 'Buddhiworks' -> $1"
  fi
else
  echo "To add remote 'Buddhiworks', run:"
  echo "  git remote add Buddhiworks <your-repo-url>"
  echo "  e.g. git remote add Buddhiworks https://github.com/Buddhiworks/IT.git"
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
echo "Done. To push: git push -u Buddhiworks main"
