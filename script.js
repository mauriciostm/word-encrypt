const $ = (el) => document.querySelector(el);

const btnEncriptar = $(".btn-encriptar");
const btnDesencriptar = $(".btn-desencriptar");
const input = $(".input");

function encriptar(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        result += "ai";
        break;
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += text[i];
    }
  }
  return result;
}

function desencriptar(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        result += "a";
        i += 1;
        break;
      case "e":
        result += "e";
        i += 4;
        break;
      case "i":
        result += "i";
        i += 3;
        break;
      case "o":
        result += "o";
        i += 3;
        break;
      case "u":
        result += "u";
        i += 3;
        break;
      default:
        result += text[i];
    }
  }
  return result;
}

btnEncriptar.addEventListener("click", () => {
  const text = input.value;
  const result = encriptar(text);
  $(".msg").innerHTML = `
  <div class="msg">${result}</div>
  <button class="btn-copy">Copiar</button>
  `;

  $(".btn-copy").addEventListener("click", () => {
    navigator.clipboard.writeText(result);
    $(".btn-copy").innerHTML = "✔️ Copiado";
  });
});

btnDesencriptar.addEventListener("click", () => {
  const text = input.value;
  const result = desencriptar(text);
  $(".msg").innerHTML = `
  <div class="msg">${result}</div>
  <button class="btn-copy">Copiar</button>
  `;

  $(".btn-copy").addEventListener("click", (el) => {
    navigator.clipboard.writeText(result);
    $(".btn-copy").innerHTML = "✔️ Copiado";
  });
});
