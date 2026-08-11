---
title: Kujo Commerce demo release
description: A technical note on the standalone Commerce package and its external Kujo SSG composition.
date: 2026-08-11
order: 10
tags: [commerce, release]
---

# Kujo Commerce demo release

This site demonstrates Kujo Commerce as an optional package composed around an unmodified Kujo SSG build.

The catalog is generated from product frontmatter, the cart remains browser-local, and checkout is demonstrated with the safe Mock provider. Stripe, Polar, and hosted-link adapters are documented without exposing credentials or collecting real payments here.
