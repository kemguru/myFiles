function check(qnum, title, x1, x2, x3, x4, x5, x6, x7, left_side, right_side) {
  const equations = document.forms["equations"];
  const getValue = (name) => convert(equations[name]?.value || "");

  const a = getValue(`q${qnum}a`);
  const b = getValue(`q${qnum}b`);
  const c = x3 > 0 ? getValue(`q${qnum}c`) : -1;
  const d = x4 > 0 ? getValue(`q${qnum}d`) : -1;
  const e = x5 > 0 ? getValue(`q${qnum}e`) : -1;
  const f = x6 > 0 ? getValue(`q${qnum}f`) : -1;
  const g = x7 > 0 ? getValue(`q${qnum}g`) : -1;

  const x = window.open("", "temp", "width=250,height=150");
  x.document.open();
  x.document.write(`<title>${title}</title>`);

  if (a == x1 && b == x2 && (c == x3 || c == -1) && (d == x4 || d == -1) && (e == x5 || e == -1) && (f == x6 || f == -1) && (g == x7 || g == -1)) {
    x.document.write(`<font size="+1" color="green"><center><h1>Correct!</h1><p>Now close this window!</center></font>`);
  } else {
    x.document.write(`<font size="+1" color="red"><center><h1>Incorrect!</h1><p>Now close this window <br>and try again!</center></font>`);
  }

  x.document.close();
}

function show(qnum, title, x1, x2, x3, x4, x5, x6, x7, left_side, right_side) {
  const equations = document.forms["equations"];
  const getValue = (name) => convert(equations[name]?.value || "");

  const a = getValue(`q${qnum}a`);
  const b = getValue(`q${qnum}b`);
  const c = x3 > 0 ? getValue(`q${qnum}c`) : -1;
  const d = x4 > 0 ? getValue(`q${qnum}d`) : -1;
  const e = x5 > 0 ? getValue(`q${qnum}e`) : -1;
  const f = x6 > 0 ? getValue(`q${qnum}f`) : -1;
  const g = x7 > 0 ? getValue(`q${qnum}g`) : -1;

  const x = window.open("", "temp", "width=850,height=250,left=100,top=150,resizable=yes");
  x.document.open();
  x.document.write(`<title>${title}</title>`);
  x.document.write(`<font size="+1" color="blue"><center><h1>`);

  const isSpecialCase = (num, title) => {
    return (
      (num == 2 && title == "Manufacture of Sulphuric Acid") ||
      (num == 3 && title == "Manufacture of Nitric acid") ||
      (num == 4 && title == "Preparation of Ammonia")
    );
  };

  if (isSpecialCase(qnum, title)) {
    x.document.write("The correct equation is :");
    x.document.write(`<p><center><font size="+2">${left_side} &#8652; ${right_side}`);
  } else {
    x.document.write("The correct equation is :");
    x.document.write(`<p><center><font size="+2">${left_side} &#8594; ${right_side}`);
  }

  x.document.write(`<p>Now close this window!</font></center>`);
  x.document.close();
}

// If a box is blank, it contains 1. The following function does the conversion:
function convert(z) {
  return z === "" ? "1" : z;
}
