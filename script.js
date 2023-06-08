const selectTiposDeProducto = document.querySelector("#tipo-de-productos");
const selectCantidadDeProductos = document.querySelector("#cantidad-de-productos");
const selectColores = document.querySelector("#colores");
const fielsetVentas = document.querySelector("#ventas");
const fielsetCompras = document.querySelector("#compras-hechas")

const IMG_1 = "https://bocashop.vteximg.com.br/arquivos/ids/168354-1000-1000/HE6324_1.jpg?v=637922173135430000"
const IMG_2 = "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw58a33515/products/AD_HB0565/AD_HB0565-1.JPG"
const IMG_3 = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/602b7504b6d948d38064afb6017eac92_9366/Shorts_Boca_Juniors_Downtime_Azul_HC1011_01_laydown.jpg"
const IMG_4 = "https://http2.mlstatic.com/D_NQ_NP_794393-MLA40229214506_122019-O.jpg"
const IMG_5 = "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7682b2af/products/AD_GL4476/AD_GL4476-1.JPG"
const IMG_6 = "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/009/074/products/picsart_22-05-24_18-24-06-1381-2de2e01df29bbd155516534320364340-640-0.jpg"
const IMG_7 = "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcc7abbb7/products/NI_DH9666-065/NI_DH9666-065-1.JPG"
const IMG_8 = "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6a32eb15/products/NI_DB6241-406/NI_DB6241-406-1.JPG"
const IMG_9 = "https://woker.vtexassets.com/arquivos/ids/262955/4DH0558-001-1.jpg?v=637805266656730000"
const IMG_10 = "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwde310da9/products/ADGW4138/ADGW4138-1.JPG"

const PRODUCTO_1 = "camiseta de boca"
const PRODUCTO_2 = "campera de boca"
const PRODUCTO_3 = "short de boca"
const PRODUCTO_4 = "camperon de boca"
const PRODUCTO_5 = "pelota de futbol"
const PRODUCTO_6 = "campera nike"
const PRODUCTO_7 = "pantalon nike"
const PRODUCTO_8 = "camiseta del barcelona"
const PRODUCTO_9 = "zapatillas nike"
const PRODUCTO_10 = "zapatillas adidas"

let IMAGENES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10]
let PRODUCTO = [PRODUCTO_1, PRODUCTO_2, PRODUCTO_3, PRODUCTO_4, PRODUCTO_5, PRODUCTO_6, PRODUCTO_8, PRODUCTO_9, PRODUCTO_10]


function verificar() {
    generarCantidadDeProductos();
    cambiarColorAlProducto();
}


function generarProductos() {alert ("no compra");

}

function generarCantidadDeProductos() {fielsetVentas.innerHTML = "";
const cantidadDeProductosGenerar = parseInt(selectTiposDeProducto.value)
for (let i = 0; i <= cantidadDeProductosGenerar; i++) {
    nombreseimagenes = IMAGENES[i]
    nombredelproducto = PRODUCTO[i]
    let opcionesProductosGenerar = "";
    const cantidadDeArticulosSelecionar = parseInt(selectCantidadDeProductos.value);
    for (let e = 1; e <= cantidadDeArticulosSelecionar; e++) {
        opcionesProductosGenerar += `<option value="${e}">${e}</option>`

    }
    fielsetVentas.innerHTML += `
            <div class="nombredelproducto">
            <p>Producto = ${PRODUCTO[i]}</p>
            <img src = "${IMAGENES[i]}" alt="">
            <span> Cantidad a comprar </span>
            <select name="" id="">
            <option value="${opcionesProductosGenerar}"></option>   
            </select>
            <button onclick=generarProductos()>COMPRAR</button>
            </div>
            `;

}
}

function cambiarColorAlProducto() {const colorDelProducto= document.getElementsByClassName('nombredelproducto')
for (let i = 0; i < colorDelProducto.length; i++) {
    const  nombredelproducto= colorDelProducto[i];
    const par= (i+1)/2 == 0;
}
 switch (selectColores.value) {
    case "0":
         nombredelproducto.style.backgroundColor+= ""
        
        break;
 
    default:
        break;
 }
}