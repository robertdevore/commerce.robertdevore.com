import { customerPortalHandler } from '@kujolang/commerce/runtime';

export function onRequestPost(context){
  const origin=new URL(context.request.url).origin;
  return customerPortalHandler(context.request,{
    provider:'mock',
    env:context.env,
    config:{providers:{mock:{portal_url:`${origin}/account/?mock=portal`}}},
    resolveCustomer:async()=>({customerId:'public-mock-demo'})
  });
}
