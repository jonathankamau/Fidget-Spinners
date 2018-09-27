

function change_blog(newBlogNumber){
    document.getElementById("current_blog").innerHTML = "{% if post.blog-number ==" + newBlogNumber + " %}";

}
