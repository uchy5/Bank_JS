document.getElementById("bankForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const validCard = /^\d{16}$/.test(cardNumber);
  const validCVV = /^\d{3}$/.test(cvv);
  const validPIN = /^\d{4}$/.test(pin);

  if (username && password && validCard && validCVV && validPIN) {
    window.location.href = "success.html";
  } else {
    document.getElementById("message").textContent = "Please fill out all fields correctly.";
    document.getElementById("message").style.color = "red";
  }
});
