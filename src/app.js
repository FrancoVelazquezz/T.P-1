//Declaracion de variables
const nameInput = document.getElementById('nameInput')
const priceInput = document.getElementById('priceInput')
const sumbitButton = document.getElementById('sumbitButton')
const nameList = document.querySelector('.nameList')
const priceList = document.querySelector('.priceList')
const amountList = document.querySelector('.amountList')
const subtotalList = document.querySelector('.subtotalList')
const deleteLastButton = document.getElementById('deleteLastButton')
const deleteAllButton = document.getElementById('deleteAllButton')
const totalButton = document.getElementById('totalButton')
const amountInput = document.getElementById('amountInput')

//Arrays
let arrNameProduct = []
let arrAmountProduct = []
let arrPriceProduct = []
let arrSubtotalProduct = []

let contador = 0

//Funcion Actualizar lista
const updateList = () => {
    console.log(arrNameProduct)
    console.log(arrPriceProduct)
    console.log(arrSubtotalProduct)
    nameList.innerHTML = ""
    amountList.innerHTML = ""
    priceList.innerHTML = ""
    subtotalList.innerHTML = ""
    for(i = 0; i < arrNameProduct.length; i++){
        let nameProducts = document.createElement('li')
        nameProducts.innerHTML = arrNameProduct[i]
        nameList.append(nameProducts)
    }
    for(i = 0; i < arrAmountProduct.length; i++){
        let amountProducts = document.createElement('li')
        amountProducts.innerHTML = arrAmountProduct[i]
        amountList.append(amountProducts)
    }
    for(i = 0; i < arrPriceProduct.length; i++){
        let priceProducts = document.createElement('li')
        priceProducts.innerHTML = arrPriceProduct[i]
        priceList.append(priceProducts)
    }
    for(i = 0; i < arrAmountProduct.length; i++){
        let subtotalProducts = document.createElement('li')
        arrSubtotalProduct[i] = arrAmountProduct[i] * arrPriceProduct[i]
        subtotalProducts.innerHTML = arrAmountProduct[i] * arrPriceProduct[i]
        subtotalList.append(subtotalProducts)
    }
}

//Funcion Eliminar Ultimo Producto
const deleteLastProduct = () => {
    arrNameProduct.pop();
    arrPriceProduct.pop();
    arrAmountProduct.pop();
    arrSubtotalProduct.pop();
    nameList.removeChild(nameList.lastChild)
    priceList.removeChild(priceList.lastChild)
    amountList.removeChild(amountList.lastChild)
    subtotalList.removeChild(subtotalList.lastChild)
}

//Funcion Añadir Producto
const addProduct = () => {
    arrNameProduct.push(nameInput.value);
    arrAmountProduct.push(Number(amountInput.value));
    arrPriceProduct.push(Number(priceInput.value));
    updateList();

}

//Funcion Borrar todos los productos
const deleteAllProducts = () => {
    arrNameProduct = [];
    arrPriceProduct = [];
    arrAmountProduct = [];
    arrSubtotalProduct = [];
    nameList.innerHTML = "";
    priceList.innerHTML = "";
    amountList.innerHTML = "";
    subtotalList.innerHTML = "";
}

//Funcion calcular total de la compra
const totalProducts = () => {
    console.log(arrSubtotalProduct)
    let total = 0
        for(i = 0; i < arrSubtotalProduct.length; i++){

            total = total + arrSubtotalProduct[i]
        }
    alert('Total de su compra: '+ total)
}

//Eventos
sumbitButton.addEventListener('click', addProduct)
deleteLastButton.addEventListener('click', deleteLastProduct)
deleteAllButton.addEventListener('click', deleteAllProducts)
totalButton.addEventListener('click', totalProducts)
