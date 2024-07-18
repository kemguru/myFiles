function check(qnum, title, x1, x2, x3, x4, x5, x6, left_side, right_side) {
  const form = document.forms['equations'];
  const a = convert(form[`q${qnum}a`].value);
  const b = convert(form[`q${qnum}b`].value);
  const c = convert(form[`q${qnum}c`].value);
  const d = x4 > 0 ? convert(form[`q${qnum}d`].value) : -1;
  const e = x5 > 0 ? convert(form[`q${qnum}e`].value) : -1;
  const f = x6 > 0 ? convert(form[`q${qnum}f`].value) : -1;

  const x = window.open("", "temp", "width=250,height=150");
  x.document.open();
  x.document.write(`<title>${title}</title>`);

  if (a == x1 && b == x2 && c == x3 && (d == x4 || d == -1) && (e == x5 || e == -1) && (f == x6 || f == -1)) {
    x.document.write("<font size='+1' color='green'><center><h1>Correct!</h1>");
    x.document.write("<p>Now close this window!</center></font>");
  } else {
    x.document.write("<font size='+1' color='red'><center><h1>Incorrect!</h1>");
    x.document.write("<p>Now close this window <br>and try again!</center></font>");
  }
  x.document.close();
}

function show(qnum, title, x1, x2, x3, x4, x5, x6, left_side, right_side) {
  const form = document.forms['equations'];
  const a = convert(form[`q${qnum}a`].value);
  const b = convert(form[`q${qnum}b`].value);
  const c = convert(form[`q${qnum}c`].value);
  const d = x4 > 0 ? convert(form[`q${qnum}d`].value) : -1;
  const e = x5 > 0 ? convert(form[`q${qnum}e`].value) : -1;
  const f = x6 > 0 ? convert(form[`q${qnum}f`].value) : -1;

  const x = window.open("", "temp", "width=700,height=200,left=100,top=150,resizable=yes");
  x.document.open();
  x.document.write(`<title>${title}</title>`);
  x.document.write(`<font size='+1' color='blue'><center><h1>The correct equation is :</h1>`);
  
  const equationDisplay = `<p><center><font size='+2'>${left_side} <img src='ebce2.gif' /> ${right_side}</font></center></p>`;
  const arrowEquationDisplay = `<p><center><font size='+2'>${left_side} &#8594; ${right_side}</font></center></p>`;
  
  if (qnum === 2 && title === "Manufacture of Sulphuric Acid" || 
      qnum === 3 && title === "Manufacture of Nitric Acid" || 
      qnum === 4 && title === "Preparation of Ammonia") {
    x.document.write(equationDisplay);
  } else {
    x.document.write(arrowEquationDisplay);
  }
  
  x.document.write("<p>Now close this window!</font></center>");
  x.document.close();
}

function convert(z) {
  return z === "" ? "1" : z;
}
