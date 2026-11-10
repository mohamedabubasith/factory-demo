---
verifier: claude
max_comments: 5
block_on: [security, bug, data]
ignore: []
---
# Review rules

- Money: follow docs/adr/0001-money.md. Line totals stay unrounded; round once, at the end.
- Flag any test that is removed or weakened so it no longer checks the behaviour it is named for.
- Do not comment on formatting, naming or style.
