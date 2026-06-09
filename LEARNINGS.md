# Claude Code for Everyone — Learnings

## Module 1 — Claude Code Fundamentals

### 1.1 Introduction
Claude Code is not just a coding tool — it's a general-purpose AI assistant that lives on your computer. Core concept: learning by doing, not watching.

---

### 1.2 File Exploration & Visualization
- Use Claude to explore and map unfamiliar file structures
- Set up a visual workspace (Cursor/Nimbalyst) so you can see files while Claude works in the terminal

---

### 1.3 Working with Files — 5 Key Scenarios
- **@ single file** → extract structured info from messy docs
- **@ folder** → synthesize patterns across many files at once
- **@ template** → use a file to control output format
- **Image** → paste with Ctrl+V to analyze visuals
- **Web search** → pull in external research on demand

---

### 1.4 Commands & Navigation
- `/model`, `/clear`, `/compact`, `/resume` — key slash commands
- Custom commands live in `.claude/commands/`
- **Escape** to interrupt, **Esc×2** to rewind
- Think keywords: `think` → `think harder` → `ultrathink`
- Three modes: Edit (safe), Auto (fast), Plan (complex tasks)
- `claude --dangerously-skip-permissions` for full-speed mode

---

### 1.5 Agents
- Spin up multiple Claude instances to work **in parallel**
- Use for: many similar files, parallelizable tasks, multi-source research
- Don't use for: sequential work or tasks that depend on each other
- Mental model: if you could give the same task to 10 interns working independently → use agents

---

### 1.6 Custom Sub-agents
- Agents = **temporary** workers (spin up, use, done)
- Sub-agents = **permanent** team members with defined personalities
- Live in `.claude/agents/` — just files with a name + system prompt
- Create your own with `/agents` command
- Use for: getting diverse perspectives (exec, designer, skeptic, etc.)

---

### 1.7 CLAUDE.md (Project Memory)
- A special file Claude reads automatically every session
- Solves the "re-explaining everything" problem
- **CLAUDE.md = constitution**, your prompts = day-to-day decisions
- Can stack: Global (`~/.claude/CLAUDE.md`) → Project → Directory
- Put in: goals, context, stakeholders, brand voice, constraints, what's been done

---

### 1.8 Power Features
- Celebration and recap of Module 1
- Preview of Module 2: vibe coding, building a real app, deploying it live

---

## Module 2 — Vibe Coding

### 2.1 Setup
The vibecoding mindset: describe what you want, iterate visually, don't worry about the code.

---

### 2.2 Plan
Define requirements before building. Lock them in a `REQUIREMENTS.md` with questions, personality types, visual style, and scoring logic before writing a single line of code.

---

### 2.3 Build & Iterate
- Scaffolded Next.js manually when `create-next-app` conflicted with existing files
- Built Welcome screen → Quiz flow → Results screen
- Used **CSS Modules** for scoped styles, **Nunito** font via Google Fonts
- Added slide-in animation using CSS keyframes + React `key` prop trick
- Made it mobile-responsive with `@media` breakpoints

---

### 2.4 GitHub
- `git init` → `git add` (specific files only) → `git commit`
- Always add `.gitignore` before staging in a Next.js project
- Push using a Personal Access Token when credential prompts don't work in the terminal

---

### 2.5 Go Live
- Install Vercel CLI: `npm install -g vercel`
- Authenticate: `vercel login`
- Deploy: `vercel --yes` → live URL in ~12 seconds

---

## Things to Remember

1. **Always `.gitignore` before first commit**
When you have a Next.js project, there are two folders (`.next/` and `node_modules/`) that are huge and auto-generated — you never need to save them to GitHub. If you don't tell Git to ignore them before your first commit, they'll get uploaded and clutter your repo. Always create the `.gitignore` file first.

2. **`--resume` only works mid-execution**
The `/resume` command in Claude Code is only for picking up a session that was interrupted while Claude was doing something. If you just closed the chat normally, resume won't work — just start a new session and tell Claude what you were working on.

3. **Agents for volume, sub-agents for wisdom**
- Need to process 50 files at once? → Use **agents** (parallel workers, quantity)
- Need thoughtful feedback from different perspectives? → Use **sub-agents** (permanent personas like exec, designer, barista)

4. **CLAUDE.md is your memory**
Claude forgets everything when you close a session. CLAUDE.md is a file it reads automatically every time — so you write your project context once and never have to explain it again.

5. **The `key` prop trick**
In React, if you put `key={current}` on an element and the number changes, React treats it as a brand new element and replays any animations on it. That's how we made questions slide in each time.

6. **Never expose tokens in chat**
A GitHub Personal Access Token is like a password — if you paste it somewhere others can see it, go revoke it immediately in GitHub settings and generate a new one.

7. **`vercel --yes` skips all questions**
Normally Vercel asks you a bunch of setup questions. Adding `--yes` just accepts all the defaults and deploys immediately.

8. **Next.js Image needs a size**
The `<Image>` component in Next.js won't display unless you tell it how big to be. Either set `width` and `height` directly on it, or if using `fill`, make sure the parent container has a fixed height in CSS.

---

## Project: Coffee Personality Quiz
- **Live URL:** https://quiz-project-seven-wine.vercel.app
- **GitHub:** https://github.com/vanshikabhuyarkar-afk/vanshikabhuyarkar
- **Stack:** Next.js 16, CSS Modules, Google Fonts (Nunito)
- **Screens:** Welcome → 5 Questions → Results (percentage breakdown + coffee image)
