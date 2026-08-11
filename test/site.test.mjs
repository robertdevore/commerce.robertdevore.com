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

test('homepage hero and desktop product split are present', () => {
  const home = fs.readFileSync('templates/page-home.html', 'utf8');
  const shop = fs.readFileSync('templates/shop.html', 'utf8');
  const styles = fs.readFileSync('assets/css/store.css', 'utf8');
  assert.match(home, /commerce-dither\.webp/);
  assert.equal(fs.existsSync('assets/images/hero/commerce-dither.webp'), true);
  assert.match(shop, /class="product-media"/);
  assert.match(shop, /class="product-details"/);
  assert.match(styles, /font-family: var\(--sk-font-mono\)/);
  assert.match(styles, /grid-template-columns: minmax\(0, 1\.08fr\)/);
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
