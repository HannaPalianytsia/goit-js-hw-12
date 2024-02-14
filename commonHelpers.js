import{a as l,i as c,S as u}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery")};async function d(o,r){s.gallery.classList.add("loader"),l.defaults.baseURL="https://pixabay.com/api/";const a="42305784-5d55228baaa9a6392a5b2668b";l.defaults.params={key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};const{data:i}=await l.get();return i}function y(o){s.gallery.classList.remove("loader"),o.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"}):(c.success({message:`A total of ${o.totalHits} images were successfully found`,position:"topLeft"}),h(o))}function h(o){let r=new u(".gallery a");r.refresh();const a=o.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:f,comments:p,downloads:m})=>`<li class="gallery-item">
        <a href="${e}">
          <img src="${i}" alt="${t}" title="${t}"/>
          <ul>
            <li>
              <h3>Likes</h3>
              <p>${n}</p>
            </li>
            <li>
              <h3>Vievs</h3>
              <p>${f}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${p}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${m}</p>
            </li>
          </ul>
        </a></li>`).join("");s.gallery.insertAdjacentHTML("beforeend",a),r=new u(".gallery a",{captions:!1})}function g(o){o.preventDefault(),s.gallery.innerHTML="";const r=s.input.value.trim();r!==""?d(r,1).then(y):c.error({message:"Sorry, the search bar is empty. Please try again!",position:"topLeft"})}s.form.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
