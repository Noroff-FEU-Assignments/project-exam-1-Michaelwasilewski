const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIUrl = `https://gifted-signature.flywheelsites.com/wp-json/wp/v2/posts/${id}`;

const blogDetails = document.querySelector(".split-section");





async function getBlogDetails() {
  try {
    const response = await fetch(APIUrl);
    const singleBlogDetail = await response.json();
    let blogPicture = singleBlogDetail.x_featured_media_original;
    let altText = singleBlogDetail.x_metadata.alt_text;
    let blogTitle = singleBlogDetail.x_metadata.title;
    let bloginfo = singleBlogDetail.x_metadata.paragraf;
    let blogDate = singleBlogDetail.x_date;
    blogDetails.innerHTML += `
                <div class="container-split">
                    <div class="featured-picture" >
                    <img id="myImg" src="${blogPicture}" alt="${altText}" >
                    </div>
                    <div id="myModal" class="modal">
                    <span class="closed">&times;</span>
                    <img  src="${blogPicture}" class="modalContent" id="img01" />
                    <div id="caption">${altText}</div>
                    </div>
                    <div class="featured-info">
                        <div class="post-date">
                            <span>Tuesday</span>
                            <span>${blogDate}</span>
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
                        <h2 class="featured-title">Pro's & Cons</h2>
                        <p class="featured-text">${bloginfo}</p>
                        <a class="featured-cta" href="#">Visit site</a>
                    </div>
                </div>
        `;
  } catch (error) {
    console.log(error);
  } finally {
      const modal = document.querySelector(".modal");
      const image = document.getElementById("myImg");

      image.onclick = function () {
          modal.style.display = "block";
      }
  }
}
getBlogDetails();
getBlogDetails().then(() => {
    const closeModal = document.querySelector(".closed");
console.log(closeModal);
    closeModal.onclick = function () {
        console.log("hello");
    //   modal.style.display = "none";
    }
}) ;



