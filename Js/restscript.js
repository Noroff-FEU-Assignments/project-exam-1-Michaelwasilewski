const APIUrl =
  "https://gifted-signature.flywheelsites.com/wp-json/wc/store/products";

const blogContainer = document.querySelector(".blog-container");

async function getBlogs() {
  try {
    const response = await fetch(APIUrl);
    const blogData = await response.json();
    console.log(blogData);
    blogContainer.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      let blogPicture = blogData[i].images[0].src;
      let altText = blogData[i].images[0].alt;
      let blogName = blogData[i].name;
      let blogDescription = blogData[i].short_description;
      blogContainer.innerHTML += 
      `
            <div class="split-section">
                <div class="container-split">
                    <div class="featured-picture">
                    <img src="${blogPicture}" alt="${altText}">
                        </div>
                    <div class="featured-info">
                        <div class="post-date">
                            <span>Tuesday</span>
                                 <span>19.05.2022</span>
                         </div>
                            <h2 class="featured-title">${blogName}</h2>
                            <p class="featured-text"> ${blogDescription}</p>
                            <a class="featured-cta" href="/blogspecific.html?id=${blogData[i].id}">Read More</a>
                    </div>
                </div>
            </div>
            `;
    }
  } catch (error) {
    console.log("ops, there is an error", error);
  }
}

getBlogs();
