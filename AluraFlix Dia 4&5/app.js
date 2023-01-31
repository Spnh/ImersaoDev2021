var imagemFilmes = [
 "https://br.web.img2.acsta.net/c_310_420/pictures/21/06/22/22/19/1495362.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/thumb/7/74/Jojo_Rabbit_poster.jpg/200px-Jojo_Rabbit_poster.jpg",
 "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035",
 "https://upload.wikimedia.org/wikipedia/pt/3/31/Senna_p%C3%B4ster.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjq2LQfPcOeULbv808hH2pwLS1PVWulDyWjOfdagFnh-17U1yJfJtJrSKDHXpxEYLXac&usqp=CAU",
 "https://upload.wikimedia.org/wikipedia/pt/thumb/0/08/Little_Miss_Sunshine_P%C3%B4ster.jpg/225px-Little_Miss_Sunshine_P%C3%B4ster.jpg",
];

var nomeFilmes = [
  "O Esquadrão Suicida",
  "Jojo Rabbit",
  "Vingadores Ultimato",
  "Senna",
  "Operação Final",
  "Little Miss Sunshine,"
];

function mangaExiste(nomeFilme) {
  var index = 0;

  for (index; index < nomeFilmes.length; index++) {
    if (nomeFilmes[index] == nomeFilme) {
      return true;
    }
  }
  return false;
}

function slugfy(string) {
  return string
    .replace(/\s+/g, "-") // Replace spaces with -
    .trim()
    .toLowerCase();
}

function listaNaTela(nomeFilme, filme) {
  let localAdicionarFilme = document.getElementById("localAddFilme");
  let englobaFilme = document.createElement("div");
  let elemImgFilme = document.createElement("img");
  let elemnomeFilme = document.createElement("p");

  englobaFilme.setAttribute("id", slugfy(nomeFilme));
  elemImgFilme.setAttribute("src", filme);

  englobaFilme.append(elemImgFilme);
  englobaFilme.append(elemnomeFilme);
  localAdicionarFilme.append(englobaFilme);

  elemnomeFilme.innerHTML = nomeFilme;
}

imagemFilmes.forEach((element, index) => {
  listaNaTela(nomeFilmes[index], element);
});

function removeFilme() {
  let nomeFilme = document.getElementById("nomeFilme").value;
  let msgErro = document.getElementById("msgErro");

  msgErro.innerHTML = "Esse filme não existe!";

  for (let index = 0; index < nomeFilmes.length; index++) {
    if (nomeFilmes[index] == nomeFilme) {
      let divPai = document.getElementById("localAddFilme");
      let slugDiv = slugfy(nomeFilme);
      let divRemove = document.getElementById("" + slugDiv + "");
      console.log(slugDiv);
      nomeFilmes.splice(index, 1);
      imagemFilmes.splice(index, 1);

      divPai.removeChild(divRemove);
      msgErro.innerHTML = "Removido";
    }
  }
}

function adicionarFilme() {
  let valorLocalnomeFilme = document.getElementById("nomeFilme").value;
  let valorLocalfilme = document.getElementById("filme")
    .value;
  let localMsgErro = document.getElementById("msgErro");

  localMsgErro.innerHTML = "";
  if (valorLocalnomeFilme.trim() == "") {
    localMsgErro.innerHTML = "Insira o nome do filme por favor!";
  } else {
    if (!mangaExiste(valorLocalnomeFilme)) {
      if (valorLocalfilme.endsWith(".jpg")) {
        listaNaTela(valorLocalnomeFilme, valorLocalfilme);
        nomeFilmes.push(valorLocalnomeFilme);
        imagemFilmes.push(valorLocalfilme);
      } else {
        localMsgErro.innerHTML = "Insira o Endereço da imagem por favor!";
      }
    } else {
      localMsgErro.innerHTML = "Esse filme já existe na lista!";
    }
  }
}
