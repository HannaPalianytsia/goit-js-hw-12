import{a as l,i as c,S as u}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i={form:document.querySelector(".form"),input:document.querySelector("#user-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-button")};async function m(r,o){i.gallery.classList.add("loader"),l.defaults.baseURL="https://pixabay.com/api/";const a="42305784-5d55228baaa9a6392a5b2668b";l.defaults.params={key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};const{data:s}=await l.get();return s}function y(r){i.gallery.classList.remove("loader"),r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"}):(c.success({message:`A total of ${r.totalHits} images were successfully found`,position:"topLeft"}),h(r))}function h(r){let o=new u(".gallery a");o.refresh();const a=r.hits.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:d,comments:f,downloads:p})=>`<li class="gallery-item">
        <a href="${e}">
          <img src="${s}" alt="${t}" title="${t}"/>
          <ul>
            <li>
              <h3>Likes</h3>
              <p>${n}</p>
            </li>
            <li>
              <h3>Vievs</h3>
              <p>${d}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${f}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${p}</p>
            </li>
          </ul>
        </a></li>`).join("");i.gallery.insertAdjacentHTML("beforeend",a),o=new u(".gallery a",{captions:!1}),r.totalHits>15&&i.loadMore.classList.remove("is-hidden")}function g(r){r.preventDefault(),i.loadMore.classList.add("is-hidden"),i.gallery.innerHTML="";const o=i.input.value.trim();o!==""?m(o,1).then(y):c.error({message:"Sorry, the search bar is empty. Please try again!",position:"topLeft"})}i.form.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
