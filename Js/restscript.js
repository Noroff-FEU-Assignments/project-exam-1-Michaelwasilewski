const APIUrl =
  "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?per_page=10";

const blogContainer = document.querySelector(".blog-container");

const loadMore = document.getElementById("load-more");
const ApiMore =
  "https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts?_page=2&offset=10";

async function getBlogs() {
  try {
    const response = await fetch(APIUrl);
    const blogData = await response.json();
    blogContainer.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      let altText = blogData[i].x_metadata.alt_text;
      let blogName = blogData[i].acf.title;
      let blogDescription = blogData[i].acf.paragraf;
      let blogDate = blogData[i].x_date;
      let blogPost = `
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
            `; blogContainer.innerHTML += blogPost;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getBlogs();



async function getMoreBlogs() {
  try {
    const response = await fetch(ApiMore);
    const blogData = await response.json();

    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].x_featured_media_original;
      console.log(blogPicture);
      let altText = blogData[i].x_metadata.alt_text;
      let blogName = blogData[i].acf.title;
      let blogDescription = blogData[i].acf.paragraf;
      let blogDate = blogData[i].x_date;
      let blogPost = 
      // blogContainer.innerHTML += 
      
      `
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
            `; blogContainer.innerHTML += blogPost;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getMoreBlogs();

loadMore.addEventListener("click", () => {
  getMoreBlogs();
});
