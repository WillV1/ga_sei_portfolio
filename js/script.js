// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".floating");

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks on the button, open the modal

btn.addEventListener("click", () => {
  modal.style.display = "block"
});

// When the user clicks on <span> (x), close the modal

span.addEventListener("click", () => {
  modal.style.display = "none"
});

// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", (e) => {
  if(e.target == modal) {
    modal.style.display = "none";
  }
})

