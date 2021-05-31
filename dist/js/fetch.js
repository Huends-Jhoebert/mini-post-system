const btnGet = document.querySelector(".btn-get");
const btnRemove = document.querySelector(".btn-remove");
const postContainer = document.querySelector(".post-container");
const loadingAnimation = document.querySelector(".loader");
var number = 0;
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
            number += 1; //increament by 1
            if (element.id != jsonLength && element.id != jsonLength / 2) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p class="title">${element.title}</p>
   			<p>${element.body}</p>
			<button class="btn btn-danger" id="remove-post${number}" onClick="removePost(this.id);">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>
   			`;
            } else if (element.id == jsonLength / 2) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p id="middle" class="title">${element.title}</p>
   			<p>${element.body}</p>
			   <button class="btn btn-danger" id="remove-post${number}" onClick="removePost(this.id);">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>
   			`;
            } else if (element.id == jsonLength) {
               postContainer.innerHTML += `
   			<div class="container">
   			<p id="bottom" class="title">${element.title}</p>
   			<p>${element.body}</p>
			   <button class="btn btn-danger remove-post${number}" id="remove-post${number}" onClick="removePost(this.id);">REMOVE POST <i class="bi bi-trash"></i></button>
   			</div>`;
            }
         });
      });
});

btnRemove.addEventListener("click", () => {
   postContainer.innerHTML = "";
});

//remove post
function removePost(idName) {
   var nameId = idName.toString();
   var getIdName = document.getElementById(`${nameId}`).parentNode;
   //    var x = document.getElementById("myLI").parentNode.nodeName;
   getIdName.remove();
}
