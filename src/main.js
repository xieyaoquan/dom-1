const div = dom.find("#test>.red")[0];
console.log(div);
dom.style(div, "color", "green");
const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
