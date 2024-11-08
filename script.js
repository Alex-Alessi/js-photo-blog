const postRow = document.getElementById("posts-row");
const overlayPost = document.getElementById("overlay");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((posts) => {
    // console.log(posts);

    posts.forEach((post) => {
      postRow.innerHTML += `<div class="col-4" id="picture">
              <div class="card h-100">
                <div class="mx-3 mt-3">
                  <img src="${post.url}" class="card-img-top" />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <em> ${post.title} </em>
                  </p>
                </div>
              </div>
            </div>`;
    });

    const postCardsEl = document.querySelectorAll("#posts-row .card");
    postCardsEl.forEach((cardEl) => {
      console.log(cardEl);
      cardEl.addEventListener("click", () => {
        const imgCardEl = cardEl.querySelector("img").src;
        overlayPost.classList.remove("d-none");
        overlayPost.innerHTML = `<div class="col-4 mx-auto">
              <button
                onclick="closeFunction()"
                id="button"
                class="btn btn-danger my-4"
              >
                Chiudi
              </button>
              <div class="card h-100">
                <div>
                  <img src="${imgCardEl}" class="card-img-top" />
                </div>
              </div>
            </div>`;
      });
      const cardOverlay = document.querySelectorAll("#overlay");
    });
  });

function closeFunction() {
  overlayPost.classList.add("d-none");
}
