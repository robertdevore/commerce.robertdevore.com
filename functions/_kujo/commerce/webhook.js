import { webhookHandler } from '@kujolang/commerce/runtime';
export async function onRequestPost(context){return webhookHandler(context.request,{provider:'mock',secret:context.env.MOCK_WEBHOOK_SECRET||'public-demo-disabled'})}
