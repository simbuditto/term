# Git Workflow for Term Insurance Website

## 🔄 Recommended Workflow with Git

This workflow lets you seamlessly move between Emergent and your local machine while keeping everything in sync.

---

## Initial Setup

### 1. Create GitHub Repository
```bash
# On GitHub.com
1. Create new repository: "term-insurance-website"
2. Don't initialize with README (we have code already)
3. Copy the repository URL
```

### 2. Initialize Git in Emergent
```bash
cd /app/frontend
git init
git add .
git commit -m "Initial commit - Term Insurance Website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/term-insurance-website.git
git push -u origin main
```

### 3. Clone to Your Local Machine
```bash
# On your computer
git clone https://github.com/YOUR-USERNAME/term-insurance-website.git
cd term-insurance-website
npm install
```

---

## Daily Workflow

### Scenario A: Make Changes in Emergent

**Step 1: Make Changes with AI**
```
You: "Add a new testimonials section to the home page"
AI: [Implements the changes]
```

**Step 2: Commit and Push from Emergent**
```bash
cd /app/frontend
git add .
git commit -m "Added testimonials section to home page"
git push origin main
```

**Step 3: Pull on Your Local Machine**
```bash
# On your computer
git pull origin main
npm run build
# Deploy the new build
```

---

### Scenario B: Make Changes Locally

**Step 1: Edit Locally**
```bash
# On your computer
npm start  # Test your changes
# Edit files in your code editor
```

**Step 2: Commit and Push**
```bash
git add .
git commit -m "Updated color scheme to match brand"
git push origin main
```

**Step 3: Pull in Emergent (if you want to continue there)**
```bash
# In Emergent
cd /app/frontend
git pull origin main
```

---

## Common Commands

### Check Status
```bash
git status                    # See what files changed
git log --oneline -5          # See recent commits
```

### Update from Remote
```bash
git pull origin main          # Get latest changes
```

### Save Your Changes
```bash
git add .                     # Stage all changes
git commit -m "Your message"  # Commit with description
git push origin main          # Push to GitHub
```

### Undo Changes
```bash
git checkout -- filename      # Discard changes to a file
git reset --hard HEAD         # Discard all local changes
```

---

## Branching Strategy (Advanced)

### For Experimenting with Changes
```bash
# Create feature branch
git checkout -b feature/new-calculator-design

# Make changes and commit
git add .
git commit -m "Experimental calculator design"
git push origin feature/new-calculator-design

# If you like it, merge to main
git checkout main
git merge feature/new-calculator-design
git push origin main

# If you don't like it, just delete the branch
git branch -d feature/new-calculator-design
```

---

## Integration with Emergent

### Connect GitHub in Emergent UI
1. Go to Emergent settings
2. Connect your GitHub account
3. Select your repository
4. Now Emergent can directly push/pull from GitHub

### Benefits
- ✅ Work in both places seamlessly
- ✅ Never lose your changes
- ✅ Easy rollback to previous versions
- ✅ Collaborate with team members
- ✅ Track all changes with history

---

## Deployment Workflow

### Option 1: Manual Deploy
```bash
# Pull latest changes
git pull origin main

# Build
npm run build

# Deploy build folder to your hosting
```

### Option 2: Automated Deploy (CI/CD)

**With Vercel/Netlify:**
```bash
# One-time setup
1. Connect your GitHub repo to Vercel/Netlify
2. Set build command: npm run build
3. Set publish directory: build

# After that
- Every push to main branch auto-deploys
- Preview deployments for feature branches
```

**With GitHub Actions:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - name: Deploy to Server
        run: |
          # Your deployment commands here
```

---

## Quick Reference

| Task | Command |
|------|---------|
| See changes | `git status` |
| Save changes | `git add . && git commit -m "message"` |
| Upload to GitHub | `git push origin main` |
| Download from GitHub | `git pull origin main` |
| Create branch | `git checkout -b branch-name` |
| Switch branch | `git checkout branch-name` |
| See history | `git log --oneline` |
| Undo all changes | `git reset --hard HEAD` |

---

## Pro Tips

1. **Commit Often**: Make small commits with clear messages
   ```bash
   git commit -m "Fixed calculator rounding issue"
   git commit -m "Updated FAQ section content"
   ```

2. **Use .gitignore**: Already included in your project
   ```
   node_modules/
   build/
   .env
   ```

3. **Protect Main Branch**: On GitHub settings:
   - Require pull request reviews
   - Prevent direct pushes to main

4. **Tag Releases**:
   ```bash
   git tag -a v1.0.0 -m "Initial production release"
   git push origin v1.0.0
   ```

---

## Troubleshooting

### Conflict When Pulling
```bash
# If you have local changes and remote changes
git stash              # Save local changes temporarily
git pull origin main   # Get remote changes
git stash pop          # Apply your local changes back
# Resolve any conflicts manually
```

### Wrong Commit Message
```bash
git commit --amend -m "Correct message"
git push --force origin main  # Use with caution!
```

### Need to Go Back in Time
```bash
git log --oneline          # Find the commit hash
git checkout abc123        # Go back to that commit
git checkout -b old-version-test  # Create branch if you want to keep it
```

---

**With Git, you have the best of both worlds:**
- Use Emergent's AI for complex changes
- Edit locally for quick updates  
- Always have a backup
- Easy deployment workflow
