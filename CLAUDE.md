# CLAUDE.md — TruVideo Marketing Site (Cloudflare)

## Purpose

TruVideo marketing website built on Cloudflare (Pages/Workers).

## Source of Truth

Strategy and voice live in the **truvideo-brain** repo at `/Users/douglasc/Documents/Truvideo-Brain/`. This code repo implements; the brain decides.

## Required Reading Before Writing Any Copy or Content

Before writing or editing any marketing copy, page content, or messaging in this repo, read these files first:

- `/Users/douglasc/Documents/Truvideo-Brain/company/voice.md` — load-bearing phrases, banned phrases, tone
- `/Users/douglasc/Documents/Truvideo-Brain/company/product.md` — what TruVideo is
- `/Users/douglasc/Documents/Truvideo-Brain/company/strategy.md` — positioning hierarchy
- `/Users/douglasc/Documents/Truvideo-Brain/domains/website/README.md` — website-specific strategy
- `/Users/douglasc/Documents/Truvideo-Brain/domains/website/content-plan.md` — page-level content plan

## Launch Modes

- **Content/copy sessions** (needs brain context):
  ```
  claude --add-dir /Users/douglasc/Documents/Truvideo-Brain
  ```
- **Pure code work** (fixes, build config, dependencies):
  ```
  claude
  ```
  No flag — keeps context lean.

## Critical Positioning Rules

This site must follow these rules at all times:

- Lead with **"Visual Intelligence Platform"**, not "video messaging" or "video for dealers"
- Use **"damage attribution"** language, not "damage detection"
- Anchor proof with **"5 million inspections per month"**
- **"Video isn't a feature — it's an operating system"** is available as a platform thesis headline

## Repo Scope

This repo owns: components, pages, routes, styling, build/deploy config.

Content strategy is **NOT** in this repo — it lives in the brain. When copy needs to change, update the brain first, then implement here.

## Decision Logging

If you make a product or content decision while working in this repo, append it to `/Users/douglasc/Documents/Truvideo-Brain/company/decisions.md` with the date. Do not rely on commit messages for decision history.
