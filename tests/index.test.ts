import { expect,it } from 'vitest'; import { createSubdomainToClient } from '../src/index.js';
it('creates a Nitro server client',async()=>{const client=createSubdomainToClient({apiKey:'key',fetch:async()=>new Response(JSON.stringify({status:'ok',service:'subdomain.to',version:'v1'}))});expect((await client.health()).service).toBe('subdomain.to');});
