(function() {
  $formSubmit = document.querySelector(".contact-form_submit");
  $contactEmail = document.querySelector("#contactEmail");

  if (!$formSubmit || !$contactEmail) return;

  $formSubmit.addEventListener("click", e => {
    removeErrorMessage();
    if (
      String($contactEmail.value)
        .toLowerCase()
        .includes("@")
    )
      return;

    $contactEmail.parentElement.appendChild(getError());
  });
  
  // Function to remove existing error message
  function removeErrorMessage() {
    var error = $contactEmail.parentElement.querySelector(
      ".email_error-message"
    );
    if (error) $contactEmail.parentElement.removeChild(error);
  }

  // Function to create error message
  function getError() {
    var errorMessage = document.createElement("p");
    errorMessage.innerText = "Your email address needs an at (@) sign.";
    errorMessage.classList.add("email_error-message");
    return errorMessage;
  }
})();
