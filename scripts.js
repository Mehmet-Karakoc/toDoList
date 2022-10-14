var liste = document.querySelector("ul");
var urun = document.querySelector("#task");
var ekle = document.querySelector("#liveToastBtn");
var sil = document.querySelector("#liveToastBtn1");
var kaydet = document.querySelector("#save")
var tik = document.querySelector("#list")


ekle.addEventListener("click", function() {

    if (urun.value == "") {
        alert("!!!Gecerli ifade yaziniz!!!!")


    } else {
        // createElement ile yeni bir listItem (li) oluşturuyoruz

        var item = document.createElement("li");
        // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
        item.textContent = task.value;

        // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
        liste.appendChild(item);
        // liste sagindaki x koyuyoruz
        let span = document.createElement("span")
        let text = document.createTextNode("x")
        span.className = "close"
        span.appendChild(text)
        item.appendChild(span)
        span.onclick = function() {
                let item = this.parentElement;
                item.style.display = "none"
                item.classList.remove("checked")
            }
            //toast 
        $('.toast').toast('show')
            // Veri inputu içerisindeki metni siliyoruz.
        task.value = "";
    }
});

sil.addEventListener("click", function() {
    liste.lastElementChild.remove()

})

kaydet.addEventListener("click", function() {

    localStorage.setItem("Son Liste:", liste.innerText)


})
tik.addEventListener("click", function(item) {

    if (item.target.tagName == "LI") {
        item.target.classList.toggle("checked")


    }

})