// // --- Admin Product Management Btns ---
// const addProductBtn = document.querySelector("#add-product-menu");
// const removeProductBtn = document.querySelector("#remove-product-menu");

// // Admin Management Containers
// const addContainer = document.querySelector(".add-container");
// const removeContainer = document.querySelector(".remove-container");

// // Admin Side URL
// const adminSRC = /admin-side.html";

// // --- Admin Side ---
// if (adminSRC === window.location.href) {
//   console.log("admin side");
//   // Admin Management Btns
//   addProductBtn.addEventListener("click", () => {
//     addContainer.classList.toggle("show-container");
//     removeContainer.classList.remove("show-container");
//   });

//   // Admin Management Btns
//   removeProductBtn.addEventListener("click", () => {
//     removeContainer.classList.toggle("show-container");
//     addContainer.classList.remove("show-container");
//   });
// }



var removeButton = document.getElementById('remove-product-menu');
var removeSection = document.getElementById('remove_from_menu');
console.log("REgistered")
removeButton.addEventListener("click", function() {
    console.log("clicked")
    if (removeSection.style.display === 'none') {
        removeSection.style.display = 'block';
    } else {
        removeSection.style.display = 'none';
    }
  });

var addButton = document.getElementById('add-product-menu');
var addSection = document.getElementById('add_to_menu');
console.log("Registered")
addButton.addEventListener("click", function() {
    console.log("Clicked")
    if (addSection.style.display === 'none') {
        addSection.style.display = 'block';
    } else {
        addSection.style.display = 'none';
    }
});

// Function to send an AJAX request to add a product
function addProduct() {
    // product, category, price
    let food_name = document.getElementById('add-product-admin').value;
    let category = document.getElementById('add-category-admin').value;
    let price = document.getElementById('add-price-admin').value;

    fetch("/add_to_menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({food_name, category, price}),
      })
        .then(function (response) {
          // Handle the response from the server
          if (response.ok) {
            // Item added to cart successfully
            alert("Item added to cart!");
          } else {
            // Error occurred while adding item to cart
            alert("Error adding item to cart. Please try again.");
          }
        })
        .catch(function (error) {
          // Error occurred while making the request
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
}

function removeProduct() {
  let food_name = document.getElementById('remove-product-admin').value;
  console.log(food_name);
  fetch("/remove_from_menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({food_name}),
  })
    .then(function (response) {
      if (response.ok) {
        alert("Item removed to cart!");
      } else {
        alert("Error removing item to cart. Please try again.");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}


// var addButton = document.getElementById('add-product-menu');
// var addSection = document.getElementById('add_to_menu');
// console.log("REgistered")
// console.log("Registered")
// addButton.addEventListener("click", function() {
//     console.log("clicked")
//     console.log("Clicked")
//     if (addSection.style.display === 'none') {
//         addSection.style.display = 'block';
//     } else {
//         addSection.style.display = 'none';
//     }
//   });

// var removeButton = document.getElementById('remove-product-menu');
// var removeSection = document.getElementById('remove_from_menu');
// console.log("REgistered")
// removeButton.addEventListener("click", function() {
//     console.log("clicked")
//     if (removeSection.style.display === 'none') {
//         removeSection.style.display = 'block';
//     } else {
//         removeSection.style.display = 'none';
//     }
//   });
// });
