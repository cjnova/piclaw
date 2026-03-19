---
id: folder-drag-drop-confirmation
title: Folder drag and drop operations should require confirmation
status: inbox
priority: medium
created: 2026-03-18
updated: 2026-03-18
tags:
  - work-item
  - kanban
  - web
  - workspace
  - ux
owner: pi
---

# Folder drag and drop operations should require confirmation

## Summary

Dragging and dropping folders in the workspace explorer currently executes the move immediately without any confirmation. This can lead to accidental moves of entire directory trees, which are disruptive and hard to notice/undo.

## Acceptance Criteria

- [ ] Folder drag-and-drop shows a confirmation dialog before executing the move.
- [ ] The confirmation shows source and destination paths clearly.
- [ ] Single file drag-and-drop behavior is unchanged (no confirmation needed).
- [ ] Cancel dismisses the operation without side effects.

## Updates

### 2026-03-18
- Created from user request.
