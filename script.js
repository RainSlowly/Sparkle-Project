console.log("Scintilla site loaded");
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {

link.addEventListener("click", () => {

const targetId = link.getAttribute("data-target");

const section = document.getElementById(targetId);

const headerOffset = 80;

const elementPosition = section.offsetTop;

const offsetPosition = elementPosition - headerOffset;

window.scrollTo({
top: offsetPosition,
behavior: "smooth"
});

});

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if (window.scrollY >= sectionTop) {
currentSection = section.getAttribute("id");
}

});

menuLinks.forEach(link => {

link.classList.remove("active");

if(link.dataset.target === currentSection){

link.classList.add("active");

}

});

});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){
backToTop.style.display = "flex";
}else{
backToTop.style.display = "none";
}

});

backToTop.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const manifestoItems = document.querySelectorAll(".manifesto-item");

manifestoItems.forEach(item => {

const header = item.querySelector(".manifesto-header");

header.addEventListener("click", () => {

const isOpen = item.classList.contains("open");

manifestoItems.forEach(i => i.classList.remove("open"));

if(!isOpen){
item.classList.add("open");
}

});

});

const tabs = document.querySelectorAll(".tab-item");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

const target = tab.dataset.tab;



tabs.forEach(t => t.classList.remove("active"));
panels.forEach(p => p.classList.remove("active"));



tab.classList.add("active");
document.getElementById(target).classList.add("active");

});

});

const form = document.getElementById("apply-form");

form.addEventListener("submit", function(e){

e.preventDefault();

const data = new FormData();

const role = document.querySelector('input[name="role"]:checked');

data.append("entry.1965455677", role ? role.value : "");
data.append("entry.537032100", form.why.value);
data.append("entry.291942627", form.link.value);
data.append("entry.718315213", form.email.value);

if(!role){
  alert("Please select a role");
  return;
}

fetch("https://docs.google.com/forms/d/e/1FAIpQLScWVwjbHk39IDMFo1YW55UuCJEcHcyQhHhoosR9C90acVxbvA/formResponse", {
method:"POST",
mode:"no-cors",
body:data
});

form.innerHTML = `
<div class="success-message">
  <p>Application sent ✦</p>

  <p style="margin-top:10px;">
    Optional: if you want to share your work with us, we will be happy to see it!
    Upload your work here!
  </p>

  <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSeL-xLWTRjdOESPLzq0EgE_UC3rQ10A5LOfaf4_5ELYpa3TXw/viewform?usp=publish-editor"
    target="_blank"
    class="btn-submit"
  >
    Upload Now
  </a>
  </div>
`;

});