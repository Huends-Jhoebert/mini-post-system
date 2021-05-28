const btnGet = document.querySelector(".btn-get");
const btnRemove = document.querySelector(".btn-remove");
const postContainer = document.querySelector(".post-container");
const loadingAnimation = document.querySelector(".loader");
var jsonLength = 0;

loadingAnimation.style.display = "none";
btnGet.addEventListener("click", () => {
   loadingAnimation.style.display = "block";
   fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
         loadingAnimation.style.display = "none";
         jsonLength = json.length;
         json.forEach((element) => {
            if (element.id != jsonLength && element.id != jsonLength / 2) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p class="title">${element.title}</p>
   			<p>${element.body}</p>
			<button class="btn btn-danger remove-post">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>
   			`;
            } else if (element.id == jsonLength / 2) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p id="middle" class="title">${element.title}</p>
   			<p>${element.body}</p>
			   <button class="btn btn-danger">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>
   			`;
            } else if (element.id == jsonLength) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p id="bottom" class="title">${element.title}</p>
   			<p>${element.body}</p>
			   <button class="btn btn-danger">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>`;
            }
         });
      });
});

btnRemove.addEventListener("click", () => {
   postContainer.innerHTML = "";
});
