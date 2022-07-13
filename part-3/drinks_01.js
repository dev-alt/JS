function stddFunction() {
  var unts_oz, unts_ml, vol, per, std_drinks, text;

  //-------------------------------------------------------------
  // Get the values of the input fields
  //-------------------------------------------------------------
  unts_oz = document.getElementById("units_oz").checked;
  unts_ml = document.getElementById("units_ml").checked;
  vol = document.getElementById("volume").value;
  per = document.getElementById("percent").value;

  //-------------------------------------------------------------
  // If vol is Not a Number or less than 100 or greater than
  // 2000, output "input is not valid"
  //-------------------------------------------------------------
  if (isNaN(vol)) {
    text = "Volume not valid";
  } else if (!unts_oz && !unts_ml) {
    text = "No volume units selected";
  } else if (unts_oz && (vol < 0.338 || vol > 67.6)) {
    text = "oz Volume not valid (valid range 0.338 to 169.07)";
  } else if (unts_ml && (vol < 10 || vol > 5000)) {
    text = "ml Volume not valid (valid range 10 to 5000)";
  } else {
    if (isNaN(per) || per < 1 || per > 100) {
      text = "Percent not valid (valid range 1 to 100)";
    } else {
      if (unts_oz) {
        std_drinks = (vol * 29.5735 * per) / 1705;
      } else {
        std_drinks = (vol * per) / 1705;
      }
      var fixed_std_drinks = parseFloat(std_drinks).toFixed(2);
      text = "Number of standard drinks in this product " + fixed_std_drinks;
    }
  }

  document.getElementById("stdd").innerHTML = text;
}
function volFunction() {
  var num, per, vol_ml, text;

  //-------------------------------------------------------------
  // Get the values of the input fields
  //-------------------------------------------------------------
  num = document.getElementById("numstdd").value;
  per = document.getElementById("percent2").value;

  //-------------------------------------------------------------
  // If num is Not a Number or less than 1 or greater than
  // 20, output "input is not valid"
  //-------------------------------------------------------------
  if (isNaN(num) || num < 1 || num > 20) {
    text = "Number not valid (valid range 1 to 20)";
  } else {
    if (isNaN(per) || per < 1 || per > 100) {
      text = "Percent not valid (valid range 1 to 100)";
    } else {
      //     std_drinks = (vol * 29.5735 * per)/1705;
      vol_ml = (num * 1705) / per;
      var fixed_vol_ml = parseFloat(vol_ml).toFixed(2);
      text =
        "Volume for " +
        num +
        " standard drinks with " +
        per +
        "% alcohol " +
        fixed_vol_ml +
        "ml";
    }
  }

  document.getElementById("vol").innerHTML = text;
}
