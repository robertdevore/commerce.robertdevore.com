---
title: Kujo Developer Tee
description: A fake physical product used to demonstrate shipping-capable providers.
featured_image: images/products/developer-tee.webp
commerce:
  enabled: true
  id: kujo-developer-tee
  type: physical
  price: { amount: 3200, display: "$32.00", currency: USD }
  providers: { mock: {} }
  cart: { enabled: true, quantity: true, min: 1, max: 5 }
  availability: available
  variants:
    - id: black-medium
      name: Black / Medium
      sku: kujo-developer-tee-black-m
      attributes: { color: black, size: M }
    - id: white-large
      name: White / Large
      sku: kujo-developer-tee-white-l
      price: { amount: 3400, display: "$34.00", currency: USD }
      attributes: { color: white, size: L }
---

Mock supports this physical-product demonstration. Polar correctly declares that
physical fulfillment and shipping are outside its supported capability set.
