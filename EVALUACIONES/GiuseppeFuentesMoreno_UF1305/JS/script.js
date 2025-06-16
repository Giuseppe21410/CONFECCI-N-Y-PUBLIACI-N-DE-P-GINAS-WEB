function procesarStock() {
    let stock = document.getElementById("stock").value;
    stock = parseInt(stock); // Asegura que sea número entero.

    const mensaje = document.getElementsByName("stockMessage")[0]; // 

    if (stock === 0) {
        mensaje.innerHTML = "Sin Stock";
    } else if (stock > 0 && stock <= 10) {
        mensaje.innerHTML = "Crítico";
    } else if (stock >= 11 && stock <= 29) {
        mensaje.innerHTML = "Bajo";
    } else if (stock >= 30 && stock <= 79) {
        mensaje.innerHTML = "Normal";
    } else if (stock >= 80) {
        mensaje.innerHTML = "Máximo Stock";
    } else {
        const resultado = document.getElementById("resultado");
        resultado.className = "alert alert-primary mt-3 mb-3";
        resultado.innerHTML = "<p>Introduce una cantidad válida</p>";
    }
    return false;
}
