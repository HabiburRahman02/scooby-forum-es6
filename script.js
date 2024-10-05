const loadAllPosts = async (category) => {
    console.log(category);
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);
    const data = await res.json();
    displayAllPosts(data.posts);
}


const displayAllPosts = (posts) => {
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        console.log(post);
        const { category, author, comment_count, description, view_count, posted_time, title, image, isActive } = post;
        const div = document.createElement('div');
        div.innerHTML = `
          <div class="bg-[#F3F3F5] rounded-lg p-4 md:flex gap-6">
            <div class="md:w-1/6 relative">
              <div class="indicator">
                  ${isActive ? '<span class="indicator-item badge badge-secondary bg-green-500 border-white"></span>' : '<span class="indicator-item badge badge-secondary bg-red-500 border-white"></span>'}
                    <div class="bg-base-300 grid h-32 w-32 place-items-center"><img src="${image}" /></div>
                </div>
            </div>
            <div class="md:w-5/6 space-y-4">
              <div class="flex gap-6">
                <p># ${category}</p>
                <p>${author.name}</p>
              </div>
              <h4 class="text-3xl font-bold">${title}</h4>
              <p class="border-b-2 border-dashed pb-6">${description}</p>
              <div class="flex justify-between items-center">
                <div class="flex gap-6">
                  <p>comment: ${comment_count}</p>
                  <p>View: ${view_count}</p>
                  <p>time: ${posted_time}</p>
                </div>
                <button class="btn">Mark</button>
              </div>
            </div>
          </div>
        `
        postContainer.appendChild(div)
    });
}


const handleSearch = () => {
    const searchText = document.getElementById('searchPosts').value;
    loadAllPosts(searchText);
}


loadAllPosts();