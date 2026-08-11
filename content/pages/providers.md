---
title: Providers
custom_url: providers
description: Explicit capabilities prevent providers from being treated as interchangeable.
---

| Capability | Stripe | Polar | Link | Mock |
|---|---:|---:|---:|---:|
| Hosted checkout | Yes | Yes | Yes | Yes |
| Dynamic checkout | Yes | Yes | No | Yes |
| Multi-item cart | Yes | No | No | Yes |
| Quantity | Yes | No | No | Yes |
| Physical products | Yes | No | Delegated | Yes |
| Subscriptions | Yes | Yes | Delegated | Yes |
| Customer portal | Yes | Yes | No | Yes |
| Webhooks | Yes | Yes | No | Yes |

This public deployment selects Mock. Stripe and Polar adapters are verified with
fixtures; no live payment credentials are configured and no production charge is
possible. Link proves the completely static purchase path.
