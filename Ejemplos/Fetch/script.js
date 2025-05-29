// const baseUrl = "https://fakestoreapi.com";

// function getAllProducts() {
//   fetch(`${baseUrl}/products`)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.querySelector(".container .grid");
//       data.forEach((element) => {
//         container.innerHTML += `
//         <div class="g-col-4">
//            <div class="card" style="width: 18rem" data-id=${element.id}>
//               <img src="${element.image}" class="card-img-top" alt="..." />
//               <div class="card-body">
//                    <h5 class="card-title">${element.title}</h5>
//                    <p class="card-text">${element.description} </p>
//                    <a href="#" class="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//         </div>`;
//       });
//       console.log(data);
//     });
// }

// function getProductById(id) {
//   fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.querySelector(".container .grid");
//       container.innerHTML += `
//         <div class="g-col-4">
//            <div class="card" style="width: 18rem" data-id=${data.id}>
//               <img src="${data.image}" class="card-img-top" alt="..." />
//               <div class="card-body">
//                    <h5 class="card-title">${data.title}</h5>
//                    <p class="card-text">${data.description} </p>
//                    <a href="#" class="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//         </div>`;
//       console.log(data);
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   getAllProducts();
//   getProductById(7);
// });

// 🚀 GET POST PUT Y DELETED 🚀

// GET🚀
// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// POST🚀
// const product = { title: "New Product", price: 29.99 };

// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(product),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// GET (id)🚀
// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// PUT🚀
// const product = { title: "Updated Product", price: 39.99 };

// fetch("https://fakestoreapi.com/products/1", {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(product),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// DELETE🚀
/* fetch("https://fakestoreapi.com/products/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data)); */
