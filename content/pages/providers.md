---
title: Providers
custom_url: providers
description: Explicit capabilities prevent providers from being treated as interchangeable.
---

| Provider | Checkout | Multi-item | Quantity | Subscriptions | Physical | Portal | Webhooks |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Stripe | Session/link | Yes | Yes | Yes | Yes | Yes | Yes |
| Polar | Session/link | No | No | Yes | No | Yes | Yes |
| PayPal | Orders/Billing | One-time | Yes | Yes | Yes | No | Yes |
| Square | Payment Link | Yes | Yes | No* | Yes | No | Yes |
| Paddle | Transaction | Yes | Yes | Yes | No | Yes | Yes |
| Lemon Squeezy | Variant checkout | No | No | Yes | No | URL | Yes |
| Link | Hosted URL | No | No | Delegated | Delegated | No | No |
| Mock | Simulation | Yes | Yes | Yes | Yes | Simulated | Fixture |

`*` The current Square adapter intentionally does not claim subscription checkout.

This public deployment selects Mock and cannot collect payment. CI runs all eight
provider adapters through the shared contract suite and fixture request tests.
Credential-gated workflows are ready for provider sandboxes, but skip cleanly
when repository secrets are absent. Link proves the completely static path.
