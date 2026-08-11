import { access } from 'node:fs/promises';import { spawn } from 'node:child_process';import path from 'node:path';
const root=path.resolve(new URL('..',import.meta.url).pathname);const ssg=path.join(root,'vendor/ssg/build.kujo');
const run=(cmd,args)=>new Promise((resolve,reject)=>{const p=spawn(cmd,args,{cwd:root,stdio:'inherit'});p.on('error',reject);p.on('exit',c=>c===0?resolve():reject(Error(`${cmd} exited ${c}`)))});
try{await access(ssg)}catch{await run('git',['clone','--depth','1','--branch','v1.0.0','https://github.com/kujolang/ssg.git','vendor/ssg'])}
let kujo=process.env.KUJO_BIN||'kujo';try{await run(kujo,['--version'])}catch{await run('bash',['scripts/install-kujo.sh']);kujo=path.join(root,'.kujo-bin/kujo')}
await run(path.join(root,'node_modules/.bin/kujo-commerce'),['build','--site',root,'--ssg',ssg,'--kujo',kujo]);
