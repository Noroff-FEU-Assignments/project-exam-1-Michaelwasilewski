const API =
  "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?per_page=1";

const latestContainer = document.querySelector(".split-section");

const carouselContainer = document.getElementById("content");

const APIcarousel =
  "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?per_page=10";

async function getBlogs() {
  try {
    const response = await fetch(APIcarousel);
    const blogData = await response.json();
    carouselContainer.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      let altText = blogData[i].x_metadata.alt_text;
      carouselContainer.innerHTML += `
        
            <div id="content">
                <a href="blogspecific.html?id=${blogData[i].id}"><img class="item" src="${blogPicture}" alt="${altText}"></a>
            </div>
              `;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}
getBlogs();



const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));



async function getLatestBlogs() {
  try {
    const response = await fetch(API);
    const blogData = await response.json();
    latestContainer.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      console.log(blogPicture);
      let altText = blogData[i].x_metadata.alt_text;
      let blogName = blogData[i].acf.title;
      let blogDescription = blogData[i].acf.paragraf;
      let blogDate = blogData[i].x_date;
      let author = blogData[i].x_author;
      latestContainer.innerHTML += `
              <div class="split-section">
                  <div class="container-split">
                      <div class="featured-picture">
                      <img src="${blogPicture}" alt="${altText}">
                      </div>
                      <div class="featured-info">
                          <div class="post-date">
                              <span>${author}</span>
                              <span>${blogDate}</span>
                           </div>
                              <h2 class="featured-title">${blogName}</h2>
                              <p class="featured-text"> ${blogDescription}</p>
                              <a class="featured-cta" href="blogspecific.html?id=${blogData[i].id}">Read More</a>
                      </div>
                  </div>
              </div>
              `;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getLatestBlogs();


