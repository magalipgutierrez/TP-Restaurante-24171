let header = ` 
<a href="index.html"><img src="img/logo.jpg" alt="logo"></a>
<a href="index.html"><h1>Cerveceria los 4</h1></a>
<nav>
    <ul class="navegacion">
        <li><a href="index.html">INICIO</a></li>
        <li><a href="menu.html">MENU</a></li>
        <li><a href="reservas.html">RESERVAS</a></li>
        <li><a href="nosotros.html">NOSOTROS</a></li>
    </ul>
</nav>
`;
document.getElementById("idheader").innerHTML = header;

let footer = `
<div class="footer">
    <a href="mailto:cerveceria@los4.com.ar" target="_blank" rel="noopener"><img src="img/email.png" alt="logo mail"></a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener"><img src="img/facebook.png" alt="logo facebook"></a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener"><img src="img/instagram.png" alt="logo instagram" rel="noopener"></a>
    <a href="https://www.whatsapp.com" target="_blank" rel="noopener"><img src="img/whatsap.png" alt="logo whatsapp"></a>
    <h4>Aceptamos efectivo, tarjeta de débito y crédito. © 2024 - Moncada Cervecería artesanal - Munro</h4>               
</div>
`;
document.getElementById("idfooter").innerHTML = footer;