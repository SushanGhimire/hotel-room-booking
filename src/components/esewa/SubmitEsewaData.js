var path = "https://uat.esewa.com.np/epay/main";

function post(amount, roomId) {
  var params = {
    amt: amount,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: amount,
    pid: `${new Date().getMonth()}-${new Date().getFullYear()}-${new Date().getTime()}`,
    scd: "EPAYTEST",
    su: "http://localhost:3000/user/sucess",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };
  var form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
}

export default post;
