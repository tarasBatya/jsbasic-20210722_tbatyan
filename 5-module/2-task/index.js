function toggleText() {
  let button = document.querySelector(".toggle-text-button");

document.addEventListener('click', function() {
         
         if (!button) return; // Checking if clicked the button

    let elemToHide = document.getElementById("text");

    elemToHide.hidden = !elemToHide.hidden;
  });
}
