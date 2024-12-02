const btn = document.querySelector (".cat-1")
btn.addEventListener("click", () => {
    console.log ("hiciste click")
  if(btn.style.border === "2px solid red") {
btn.style.border = ""
  } else{
btn.style.border = "2px solid red"
  } 
  });
  
  const selectorUno = document.getElementById("colA")
  const selectorDos = document.getElementById("colB")
  const selectorTres = document.getElementById("colC")
  const respuesta = document.getElementById("respuesta")
  const verifyBtn = document.getElementById ("btn")

verifyBtn.addEventListener ("click",() => {
  const pass = selectorUno.value + selectorDos.value + selectorTres.value
  if(pass === "911"){
    respuesta.innerHTML = "password 1 correcta"
  }else if(pass ==="714"){
    respuesta.innerHTML = "password 2 correcta"
  }else{
    respuesta.innerHTML = "password incorrecta"
  }

})

const sticker1 = document.getElementById("pegatinasB")
const sticker2 = document.getElementById("pegatinasM")
const sticker3 = document.getElementById("pegatinasV")
const verify = document.querySelector(".comprar");
const reply = document.getElementById("cantidad");

verify.addEventListener("click", () => {
 
  const total = +sticker1.value + +sticker2.value + +sticker3.value

  if (total > 10) {
    reply.innerHTML = "La avaricia rompió el saco."
  } else {
    reply.innerHTML = `Llevas ${total} pegatinas. ¡Buen trabajo!`
  }
});
