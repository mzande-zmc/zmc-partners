// ZMC Partners — shared site script
(function(){
  // turn every [data-view] element into a real cross-page link
  document.addEventListener('click', function(e){
    var t = e.target.closest('[data-view]');
    if(!t) return;
    e.preventDefault();
    var v = t.getAttribute('data-view');
    location.href = (v === 'home' ? 'index' : v) + '.html';
  });
  // highlight the current page in the menu
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var cur = path.replace('.html','') || 'index';
  if(cur === 'index' || cur === '') cur = 'home';
  document.querySelectorAll('.navlinks a.lnk').forEach(function(a){
    a.classList.toggle('active', a.getAttribute('data-view') === cur);
  });
  // mobile menu toggle
  var nav = document.getElementById('nav'), hamb = document.getElementById('hamb');
  if(hamb) hamb.addEventListener('click', function(){
    nav.classList.toggle('open'); hamb.classList.toggle('open');
  });
  // contact form -> opens email client (replace with your Squarespace form action on the live site)
  var send = document.getElementById('sendbtn');
  if(send) send.addEventListener('click', function(){
    var g = function(id){ var el=document.getElementById(id); return el ? (el.value||'').trim() : ''; };
    var body = 'Name: '+g('fn')+' '+g('ln')+'\nEmail: '+g('em')+'\nCompany: '+g('co')
             + '\nRole: '+g('rl')+'\nOperation size: '+g('sz')+'\n\n'+g('ms');
    var subject = encodeURIComponent('Leadership systems inquiry — ' + (g('co')||g('fn')||'ZMC Partners'));
    try { window.location.href = 'mailto:info@zmc-partners.com?subject='+subject+'&body='+encodeURIComponent(body); } catch(e){}
    var ok = document.getElementById('okmsg'); if(ok) ok.classList.add('show');
  });
})();
