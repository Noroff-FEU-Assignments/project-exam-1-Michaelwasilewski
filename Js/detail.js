const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIUrl = `https://gifted-signature.flywheelsites.com/wp-json/wc/store/products/${id}`;

const blogDetails = document.querySelector(".split-section");

async function getBlogDetails () {
    try {
        const response = await fetch (APIUrl);
        const singleBlogDetail = await response.json();
        let blogPicture = singleBlogDetail.images[0].src;
        let altText = singleBlogDetail.images[0].alt;
        let blogTitle = singleBlogDetail.name;
        let bloginfo = singleBlogDetail.short_description;
        blogDetails.innerHTML += `
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
                        <h2 class="featured-title">${blogTitle}</h2>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>4.5(65)</span>
                        </div>
                        <p class="featured-text">${bloginfo}</p>
                        <h2 class="featured-title"> Pro's & Cons </h2>
                        <p class="featured-text">${bloginfo}</p>
                        <a class="featured-cta" href="/blogspecific.html">Visit site</a>
                    </div>
                </div>
            </div>
        `
    } catch (error) {
        console.log(error);
    }
    
}
getBlogDetails();