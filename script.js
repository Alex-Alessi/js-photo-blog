const postRow = document.getElementById("posts-row");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);

    posts.forEach((post) => {
      postRow.innerHTML += `<div class="col-4">
              <div class="card h-100">
                <div class="mx-3 mt-3">
                  <img src="${posts.url}" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <em> ${posts.title} </em>
                  </p>
                </div>
              </div>
            </div>`;
    });

    const postCardsEl = document.querySelectorAll("#post-row .card");
    postCardsEl.forEach((cardEl) => {
      console.log(cardEl);
    });
  });
