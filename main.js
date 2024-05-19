const res = document.querySelector(".resultado");

function inserir(n) {
  res.innerHTML += n;
}

function limpar() {
  res.innerHTML = "";
}

function voltar() {
  res.innerHTML = res.innerHTML.slice(0, -1);
}

function calcular() {
  if (res) {
    res.innerHTML = eval(res.innerHTML);
  }
}
