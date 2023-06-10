function validaCampos() {

  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");
  

  if (document.querySelector("#nome").value.length > 50) {
    alert("Campo nome não pode ter mais de 50 caracteres");
    document.querySelector("#nome").focus();
    nome.value = "";
  } 
  
  if (document.getElementById("email").value.length > 50) {
    alert("Campo e-mail não pode ter mais de 50 caracteres");
    document.getElementById("email").focus();
    email.value = "";
  } 
  
  if (document.getElementById("assunto").value.length > 50) {
    alert("Campo assunto não pode ter mais de 50 caracteres");
    document.getElementById("assunto").focus();
    assunto.value = "";
  } 

  if (nome.value != "" && email.value != "" && assunto.value != "" && mensagem.value != "") {
    validaMensagem();
  } 
  
}

// Envia a mensagem seguindo as regras de negócio e mostra os dados transmitidos
function validaMensagem() {
  alert("Email Enviado Com Sucesso!!!" + "\n");
  alert("Dados Enviados: " + "\n" + "Nome: " + nome.value + "\n" + "E-mail: " + email.value + "\n" + "Assunto: " + assunto.value + "\n" + "Mensagem: " + mensagem.value);
}



// Mostra o limite de caracteres da mensagem
function limite_textarea(valor) {
  quant = 300;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('cont').innerHTML = resto;
  } else {
      document.getElementById('mensagem').value = valor.substr(0,quant);
  }
}