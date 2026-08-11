import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const products = ['handbook', 'developer-tee', 'pro-demo', 'architecture-review', 'hosted-link', 'unavailable'];

test('required product variety and generated artwork exist', () => {
  for (const product of products) assert.equal(fs.existsSync(`content/shop/${product}.md`), true);
  for (const image of ['handbook', 'developer-tee', 'pro-demo', 'architecture-review', 'hosted-link', 'future-kit']) {
    assert.equal(fs.existsSync(`assets/images/products/${image}.webp`), true);
  }
});

test('mobile navigation and Kujo network footer are present', () => {
  const layout = fs.readFileSync('templates/layout.html', 'utf8');
  assert.match(layout, /aria-controls="mobile-menu"/);
  assert.match(layout, /class="icon-button cart-button"/);
  assert.match(layout, /https:\/\/kujolang\.ai/);
  assert.match(layout, /https:\/\/agents\.kujolang\.ai/);
});

test('SiteKit consumer artifact retains fonts and licenses', () => {
  for (const file of ['assets/sitekit/sitekit.css', 'assets/sitekit/sitekit.js', 'assets/sitekit/fonts/DepartureMono-Regular.woff2', 'assets/sitekit/fonts/DepartureMono-LICENSE.txt']) {
    assert.equal(fs.existsSync(file), true);
  }
});

test('no obvious committed credential values', () => {
  const text = fs.readFileSync('kujo-commerce.yml', 'utf8');
  assert.doesNotMatch(text, /sk_(live|test)_|polar_oat_/);
});
