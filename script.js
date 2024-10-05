const loadAllPosts = async (category) => {
    console.log(category);
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts${category? `?category=${category}`: ''}`);
    const data = await res.json();
    displayAllPosts(data.posts);
}


const displayAllPosts = (posts) => {
    console.log(posts);
}


const handleSearch = () => {
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText);
}


loadAllPosts();