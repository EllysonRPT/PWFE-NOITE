function enviar() {
    
    let cep
    let endereço
    let email
    let Remail
    let senha;
    let Rsenha;
  
    endereço = document.getElementById("endereço").value;
    email = document.getElementById("email").value;
    Remail = document.getElementById("Remail").value;
    senha = document.getElementById("senha").value;
    Rsenha = document.getElementById("Rsenha").value;
    cep = document.getElementById("cep").value;

    if (cep=="") {
        alert("prenecha o cep ");
        return false;
    }
    else if (endereço=="") {
        alert("prenecha seu endereço ");
        return false;
    }
    else if (email=="") {
        alert("prenecha seu email ");
        return false;
    }
    else if (senha=="") {
        alert("prenecha sua senha ");
        return false;
    }
    else if (email != Remail) {
        alert("a confirmação do email não coincide ");
        return false;
    }else if (senha!=Rsenha) {
        alert("a confirmação da senha não coincide ");
        return false;
    }
    else {   alert(" 'PARABENS FORMULARIO CONCLUIDO'!!!")
    return true;}
    }
    function login() {
        let email2
        let senha2

        email2 = document.getElementById("email2").value;
        senha2 = document.getElementById("senha2").value;
        
        if (senha2=="") {
            alert("prenecha sua senha ");
            return false;
        }
        else if (email2=="") {
            alert("prenecha seu email ");
            return false;
        }
    }
    
    