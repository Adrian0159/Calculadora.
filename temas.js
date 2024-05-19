const btnTema1 = document.getElementById("btn-tema1");
const btnTema2 = document.getElementById("btn-tema2");
const btnTema3 = document.getElementById("btn-tema3");
const bola1 = document.getElementById("circulo1");
const bola2 = document.getElementById("circulo2");
const bola3 = document.getElementById("circulo3");
const botoes = document.querySelectorAll("button");

function escolherTema(tema1, tama2, tema3) {
  if (btnTema1.checked) {
    bola1.classList.remove("invisivel");
    bola2.classList.add("invisivel");
    bola3.classList.add("invisivel");
    document.body.style.backgroundColor = "#3a4764";
    document.querySelector(".retangulo").style.backgroundColor = "#232c43";
    document.querySelector("#circulo1").style.backgroundColor = "#d03f2f";
    document.querySelector(".resultado").style.backgroundColor = " #182034";
    document.querySelector(".teclas").style.backgroundColor = "#232c43";
    document.querySelector(".resultado").style.color = "#ffffff";
    document.querySelector("header").style.color = "#ffffff";
    botoes.forEach((button) => {
      button.style.backgroundColor = "#eae3dc";
      button.style.boxShadow = "0 4px 0 0   #b4a597";
      button.style.color = "#444b5a";
    });
    document.querySelector("#reset").style.backgroundColor = "#637097";
    document.querySelector("#reset").style.boxShadow = "0 4px 0 0 #404e72";
    document.querySelector("#reset").style.color = "#ffffff";
    document.querySelector("#del").style.backgroundColor = "#637097";
    document.querySelector("#del").style.color = "#ffffff";
    document.querySelector("#del").style.boxShadow = "0 4px 0 0 #404e72";
    document.querySelector("#igual").style.backgroundColor = " #d03f2f";
    document.querySelector("#igual").style.boxShadow = "0 4px 0 0 #93261a";
    document.querySelector("#igual").style.color = "#ffffff";
  } else if (btnTema2.checked) {
    bola2.classList.remove("invisivel");
    bola1.classList.add("invisivel");
    bola3.classList.add("invisivel");
    document.body.style.backgroundColor = "#e6e6e6";
    document.querySelector(".retangulo").style.backgroundColor = "#d1cccc";
    document.querySelector("#circulo2").style.backgroundColor = "#ca5502";
    document.querySelector(".resultado").style.backgroundColor = "#ededed";
    document.querySelector(".teclas").style.backgroundColor = "#d1cccc";
    document.querySelector(".resultado").style.color = "#35352c";
    document.querySelector("header").style.color = "#35352c";
    botoes.forEach((button) => {
      button.style.backgroundColor = "#e5e4e1";
      button.style.boxShadow = "0 4px 0 0  #a69d91";
      button.style.color = "#35352c";
    });
    document.querySelector("#reset").style.backgroundColor = "#377f86";
    document.querySelector("#reset").style.boxShadow = "0 4px 0 0 #1b5f65";
    document.querySelector("#reset").style.color = "#ffffff";
    document.querySelector("#del").style.backgroundColor = "#377f86";
    document.querySelector("#del").style.color = "#ffffff";
    document.querySelector("#del").style.boxShadow = "0 4px 0 0 #1b5f65";
    document.querySelector("#igual").style.backgroundColor = " #ca5502";
    document.querySelector("#igual").style.boxShadow = "0 4px 0 0 #893901";
    document.querySelector("#igual").style.color = "#ffffff";
  } else if (btnTema3.checked) {
    bola3.classList.remove("invisivel");
    bola1.classList.add("invisivel");
    bola2.classList.add("invisivel");
    document.body.style.backgroundColor = "#160628";
    document.querySelector(".retangulo").style.backgroundColor = "#1d0934";
    document.querySelector("#circulo3").style.backgroundColor = "#00e0d1";
    document.querySelector(".resultado").style.backgroundColor = "#1d0934";
    document.querySelector(".teclas").style.backgroundColor = "#1d0934";
    document.querySelector(".resultado").style.color = "#ffe53d";
    document.querySelector("header").style.color = "#ffe53d";
    botoes.forEach((button) => {
      button.style.backgroundColor = "#341c4f";
      button.style.boxShadow = "0 4px 0 0   #871c9c";
      button.style.color = "#ffe53d";
    });
    document.querySelector("#reset").style.backgroundColor = "#58077d";
    document.querySelector("#reset").style.boxShadow = "0 4px 0 0 #bc15f4";
    document.querySelector("#reset").style.color = "#ffffff";
    document.querySelector("#del").style.boxShadow = "0 4px 0 0 #bc15f4";
    document.querySelector("#del").style.backgroundColor = "#58077d";
    document.querySelector("#del").style.color = "#ffffff";
    document.querySelector("#igual").style.backgroundColor = "#00e0d1";
    document.querySelector("#igual").style.color = "#35352c";
    document.querySelector("#igual").style.boxShadow = "0 4px 0 0 #6cf9f2";
  }
}
