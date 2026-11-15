/* TNGPTC shared config + safety net (one place for the Supabase URL/key).
   The key below is Supabase's PUBLIC "publishable" key; it is meant for browsers.
   Real protection = RLS policies + SECURITY DEFINER functions (see SECURITY_AUDIT.sql).
   NEVER put a service_role / secret key in any file in this repo. */
window.TNG={
 URL:"https://trunjmpvfdrxemjrndck.supabase.co",
 KEY:"sb_publishable_COevBDyL8fdCHJuIpEHGVA_mwPcIrKv",
 MIN_PW:8,
 client:function(){return window.supabase.createClient(this.URL,this.KEY)},
 netErr:function(e){return!navigator.onLine||!!(e&&!e.code&&/fetch|network|load failed/i.test(e.message||""))},
 fail:function(t){
  var b=document.body;if(!b)return;
  b.hidden=false;b.textContent="";b.style.cssText="margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;text-align:center;font:16px system-ui,sans-serif";
  var d=document.createElement("div"),p=document.createElement("p"),r=document.createElement("button");
  p.textContent=t||"Could not load. Check your internet and try again.";
  r.type="button";r.textContent="Retry";r.style.cssText="font:inherit;font-weight:700;padding:12px 26px;border:0;border-radius:12px;cursor:pointer";
  r.onclick=function(){location.reload()};d.appendChild(p);d.appendChild(r);b.appendChild(d);
 }
};
/* if a page is still hidden (booting) when an error happens, show a clear message instead of a blank screen */
window.addEventListener("error",function(){if(document.body&&document.body.hidden)TNG.fail()});
window.addEventListener("unhandledrejection",function(){if(document.body&&document.body.hidden)TNG.fail()});
