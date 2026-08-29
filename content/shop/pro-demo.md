---
title: Kujo Commerce Pro Demo
description: A clearly fake monthly subscription for capability testing.
featured_image: images/products/pro-demo.webp
commerce:
  enabled: true
  sku: kujo-commerce-pro-demo
  type: subscription
  price: { amount: 1200, display: "$12.00 / month", currency: USD }
  providers: { mock: {} }
  cart: { enabled: true, quantity: true, min: 1, max: 1 }
  availability: available
---

No subscription is created. The Mock provider only proves the normalized flow.
