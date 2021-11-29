/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  const shippingName = document.getElementById("shippingName");
  const shippingZip = document.getElementById("shippingZip");
  const billingName = document.getElementById("billingName");
  const billingZip = document.getElementById("billingZip");

  const aktiviert = document.getElementById("same");

  if (aktiviert.checked === true) {
    billingName.value = shippingName.value;
    billingZip.value = shippingZip.value;
  } else {
    billingName.value = "";
    billingZip.value = "";
  }
}
