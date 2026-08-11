---
title: Hosted Link Example
description: A harmless external link demonstrating the zero-runtime commerce level.
commerce:
  enabled: true
  sku: hosted-link-example
  type: digital
  price: { display: "$0.00 demo", currency: USD }
  providers:
    mock: {}
    link: { url: "https://example.com/" }
  cart: { enabled: true, quantity: true, min: 1, max: 1 }
  availability: available
---

Switch the site provider to `link` and this product becomes a normal hosted URL
with no API key, function, SDK, or database.
