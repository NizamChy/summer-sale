let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");

  const itemName = target.childNodes[3].childNodes[1].innerText;

  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);

  const price = target.childNodes[3].childNodes[3].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total.toFixed(2);

  checkPrice();
}

function checkPrice() {
  if (total >= 200) {
    document.getElementById("applyButton").removeAttribute("disabled");
  } else {
    document.getElementById("applyButton").setAttribute("disabled", "true");
  }

  if (total > 0) {
    document.querySelector(".cart-box button").removeAttribute("disabled");
  } else {
    document.querySelector(".cart-box button").setAttribute("disabled", "true");
  }
}

const applyButton = document.getElementById("applyButton");
const couponInput = document.getElementById("couponInput");
const totalSpan = document.getElementById("total");
const discountSpan = document.getElementById("discount");
const finalTotalSpan = document.getElementById("finalTotal");

applyButton.addEventListener("click", function () {
  const couponCode = couponInput.value.trim();

  if (couponCode === "SELL200") {
    const total = parseFloat(totalSpan.innerText);
    const discount = (total * 0.2).toFixed(2);

    discountSpan.innerText = discount;
    finalTotalSpan.innerText = (total - discount).toFixed(2);
  } else {
    discountSpan.innerText = "00";
    finalTotalSpan.innerText = totalSpan.innerText;
  }
});

document.getElementById("applyButton").setAttribute("disabled", "true");
document.querySelector(".cart-box button").setAttribute("disabled", "true");
