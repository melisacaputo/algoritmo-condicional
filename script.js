let grados = parseInt(prompt("Indica cuantos grados hace actualmente en tu ciudad"));

if (grados <= 0) {
    alert("En tu ciudad hace mucho frio ☃");
} else if ((grados > 0) && (grados <= 18)) {
    alert("En tu ciudad hace frio ❄");
} else if ((grados > 18) && (grados <= 26)) {
    alert("En tu ciudad el clima esta ideal 🌈");
} else if ((grados > 26) && (grados <= 34)) {
    alert("En tu ciudad hace calor 🌤");
} else {
    alert("En tu ciudad hace mucho calor ☀");
}