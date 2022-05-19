const APIUrl = "gifted-signature.flywheelsites.com/wp-json/wc/store/products";

const blogContainer = document.querySelector(".blog-container")

async function getBlogs(){
    try {
        const response = await fetch(APIUrl);
        const blogData = await response.json();
        console.log(blogData);
        blogContainer.innerHTML = "";
        for (let i = 0; i < blogData.length; i++) {
        }
    } catch (error) {
        console.log ("ops, there is an error", error);
    }
}


getBlogs ();