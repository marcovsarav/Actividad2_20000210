const { ipcRenderer } = require('electron')
document.getElementById('formulario').addEventListener('submit', function(event){
  event.preventDefault()

  var error_pass = document.getElementById("error_pass")
  var pass = document.getElementById('pass')
  var errores = 0

  pass.classList.remove('invalid')
  error_pass.innerHTML = ""   

  if(pass.value.length < 8){
    error_pass.innerHTML += " No cumple con los 8 caracteres <br>"
    pass.classList.add('invalid')
    errores++
  }

  var exprMin = RegExp("[a-z]")
  var exprMay = RegExp("[A-Z]")
  var exprNum = RegExp("[0-9]")
  var exprSim = RegExp("[\-\\\_\+]")

  if(!pass.value.match(exprMin)){
    error_pass.innerHTML+=" Debe de incluir letras  minusculas<br>"
    pass.classList.add('invalid')
    errores++

  }
  if(!pass.value.match(exprMay)){
    error_pass.innerHTML+="Debe de incluir letras mayúsculas <br>"
    pass.classList.add('invalid')
    errores++

  }
  if(!pass.value.match(exprNum)){
    error_pass.innerHTML+="Incluya un numero <br>"
    pass.classList.add('invalid')
    errores++

  }
  if(!pass.value.match(exprSim)){
    error_pass.innerHTML+="Debe de incluir un  caracter especial (- \ _)<br>"
    pass.classList.add('invalid')
    errores++

  }

  if(!pass.classList.contains('invalid')){
    alert(' Formulario Enviado')
  }else{
    ipcRenderer.send('error-formulario', errores)
  }
  
})

