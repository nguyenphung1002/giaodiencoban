const bbtn = document.querySelectorAll("button")
//console.log(bbtn)
bbtn.forEach(function(button,index){
    //console.log(button,index)
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h4").innerText
        var productPrice = product.querySelector("h5").innerText
        //console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)

    }})
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i< cartItem.length; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent ='<tr><td style="display: flex; align-items: center;"><img style="width:70px ;" src="'+productImg+'" alt=""><p><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup></sup></p></td><td><input style="width: 30px; outline: none;" type ="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    deleteCart()
    cartTotal()
}
//------------- Tính tổng tiền -----------------
function cartTotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i = 0; i< cartItem.length; i++){
       
        var inputValue = cartItem[i].querySelector("input").value
       // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(productPrice)
        totalA = inputValue*productPrice*1000
        totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC+totalA
        //console.log(totalC)
       // totalD = totalC.toLocaleString('de-DE')
       inputchange()
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".h-icons span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE') 
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    //console.log(cartTotalA)
}
//------------- Xóa ------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i< cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement.parentElement
            cartItemDelete.remove()
            cartTotal()
             //console.log(cartItemDelete)
        })
       
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i< cartItem.length; i++){
        var valueInput = cartItem[i].querySelector("input")
        valueInput.addEventListener("change",function(){
            cartTotal()
        })     
    }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".bxs-shopping-bag")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "-100%"
})
// dat hang
// function inputchangeorder(){
//     var orderItem = document.querySelectorAll("form")
//     for (var i = 0; i< orderItem.length; i++){
//         var valueInputorder = orderItem[i].querySelector(".Dat-hang")
//         valueInput[i].addEventListener("click",function(event){
//             var 
//             if(inputchangeorder[i]= productImg,productName,productPrice){
//                 alert("Dat hang thanh cong")
//                 deleteCart()
//             }
//         })     
//     }
// }
// function addcart(productPrice,productImg,productName){
//     for (var i = 0; i< cartItem.length; i++){
//         var productT = document.querySelectorAll(".title")
//         if(productT[i].innerHTML == productName){
//             alert("Sản phẩm đã có trong giỏ hàng")
//             return
//         }
//     }
//     var trcontent ='<tr><td style="display: flex; align-items: center;"><img style="width:70px ;" src="'+productImg+'" alt=""><p><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>VND</sup></p></td><td><input style="width: 30px; outline: none;" type ="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
//     addtr.innerHTML = trcontent
//     var cartTable = document.querySelector("tbody")
//     //console.log(cartTable)
//     cartTable.append(addtr)
//     deleteCart()
//     cartTotal()
// }