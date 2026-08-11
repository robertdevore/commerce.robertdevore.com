import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('required product variety exists',()=>{for(const f of ['handbook','developer-tee','pro-demo','architecture-review','hosted-link','unavailable'])assert.equal(fs.existsSync(`content/shop/${f}.md`),true)});
test('SiteKit consumer artifact retains fonts and licenses',()=>{for(const f of ['assets/sitekit/sitekit.css','assets/sitekit/sitekit.js','assets/sitekit/fonts/DepartureMono-Regular.woff2','assets/sitekit/fonts/DepartureMono-LICENSE.txt'])assert.equal(fs.existsSync(f),true)});
test('no obvious committed credential values',()=>{const text=fs.readFileSync('kujo-commerce.yml','utf8');assert.doesNotMatch(text,/sk_(live|test)_|polar_oat_/)});
