import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {capabilities} from '@kujolang/commerce';

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
  assert.match(layout, /kujo-logomark-white\.svg/);
  assert.equal(fs.existsSync('assets/images/kujo-logomark-white.svg'), true);
});

test('homepage hero and desktop product split are present', () => {
  const home = fs.readFileSync('templates/page-home.html', 'utf8');
  const shop = fs.readFileSync('templates/shop.html', 'utf8');
  const styles = fs.readFileSync('assets/css/store.css', 'utf8');
  assert.match(home, /class="hero-art" aria-hidden="true"/);
  assert.equal(fs.existsSync('assets/images/hero/commerce-dither.webp'), true);
  assert.match(shop, /class="product-media"/);
  assert.match(shop, /class="product-details"/);
  assert.match(styles, /font-family: var\(--sk-font-mono\)/);
  assert.match(styles, /grid-template-columns: minmax\(0, 1\.08fr\)/);
  assert.match(styles, /commerce-dither\.webp/);
  assert.match(styles, /@keyframes commerce-glitch/);
  assert.match(styles, /@keyframes commerce-static/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /border-radius: 0 !important/);
  assert.match(styles, /--sk-text-link: var\(--store-accent\)/);
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

test('acceptance harness covers every first-party provider contract',()=>{assert.deepEqual(Object.keys(capabilities).sort(),['lemon-squeezy','link','mock','paddle','paypal','polar','square','stripe']);assert.equal(capabilities.polar.multi_item_checkout,false);assert.equal(capabilities.paddle.merchant_of_record,true);});

test('product sources use structured money and exercise variants',()=>{for(const product of products){const source=fs.readFileSync(`content/shop/${product}.md`,'utf8');assert.match(source,/price:\s*(?:\{|\n)[^]*?amount:/);}const tee=fs.readFileSync('content/shop/developer-tee.md','utf8');assert.match(tee,/variants:/);assert.match(tee,/kujo-developer-tee-black-m/);});

test('public Mock webhook fails closed without a configured secret',()=>{const source=fs.readFileSync('functions/_kujo/commerce/webhook.js','utf8');assert.match(source,/if\(!context\.env\.MOCK_WEBHOOK_SECRET\)/);assert.doesNotMatch(source,/public-demo-disabled|\|\|\s*['"]/);});

test('Mock deployment exercises rate-limited checkout and authenticated portal handlers',()=>{const checkout=fs.readFileSync('functions/_kujo/commerce/checkout.js','utf8'),portal=fs.readFileSync('functions/_kujo/commerce/portal.js','utf8'),account=fs.readFileSync('content/pages/account.md','utf8'),browser=fs.readFileSync('assets/js/store.js','utf8');assert.match(checkout,/createMemoryRateLimiter/);assert.match(checkout,/cf-connecting-ip/);assert.match(portal,/customerPortalHandler/);assert.match(portal,/resolveCustomer/);assert.match(account,/#mock-portal/);assert.match(browser,/commerce\/portal/);assert.match(browser,/aria-live/);});

test('Mock portal function returns only its configured same-origin demo URL',async()=>{const {onRequestPost}=await import('../functions/_kujo/commerce/portal.js');const response=await onRequestPost({request:new Request('https://commerce.robertdevore.com/_kujo/commerce/portal',{method:'POST'}),env:{}});assert.equal(response.status,200);assert.equal((await response.json()).portal_url,'https://commerce.robertdevore.com/account/?mock=portal');});
