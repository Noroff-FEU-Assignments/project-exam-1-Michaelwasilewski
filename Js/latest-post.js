const API = "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?per_page=1"

const latestContainer = document.querySelector(".split-section");



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
        latestContainer.innerHTML += `
              <div class="split-section">
                  <div class="container-split">
                      <div class="featured-picture">
                      <img src="${blogPicture}" alt="${altText}">
                      </div>
                      <div class="featured-info">
                          <div class="post-date">
                              <span>Tuesday</span>
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