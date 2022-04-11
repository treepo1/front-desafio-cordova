var nome = document.getElementById("username").value
var password = document.getElementById("userpassword").value
function getData(){
    fetch('https://desafio-back-php.herokuapp.com/api/login', {method: 'POST', headers: {
        "Content-Type": "application/json"
    },
 body:JSON.stringify({
    name: nome,
    pass: password,
})}).then((resposta) => resposta.json()).
then((data) => {if(data.error == '' || !data.error){alert('Logado com sucesso')}else{
    alert("Usuário não encontrado ou credenciais não batem")
}})
}

window.onload = () => {
    let myButton = document.getElementById("getD");
    myButton.addEventListener('click', getData);
}

let myInputName = document.getElementById('username')
let myInputPass = document.getElementById('userpassword')
myInputName.addEventListener('change', () => {nome = myInputName.value} )
myInputPass.addEventListener('change',  () => {password = myInputPass.value})
