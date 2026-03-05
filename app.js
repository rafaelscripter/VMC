let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let pecas = JSON.parse(localStorage.getItem("pecas")) || []
let vendas = JSON.parse(localStorage.getItem("vendas")) || []

function criarConta(){

let u = novoUser.value
let p = novoPass.value

usuarios.push({user:u,pass:p})

localStorage.setItem("usuarios",JSON.stringify(usuarios))

alert("Conta criada")

irLogin()

}

function irLogin(){

cadastro.classList.add("oculto")
login.classList.remove("oculto")

}

function login(){

let u = userLogin.value
let p = passLogin.value

let ok = usuarios.find(x=>x.user==u && x.pass==p)

if(ok){

login.classList.add("oculto")
painel.classList.remove("oculto")

}else{

alert("login errado")

}

}

function logout(){

location.reload()

}

function abrir(p){

document.querySelectorAll(".pagina").forEach(x=>x.classList.add("oculto"))

document.getElementById(p).classList.remove("oculto")

}

function addPeca(){

let p = {

nome:nomePeca.value,
marca:marcaPeca.value,
preco:precoPeca.value

}

pecas.push(p)

localStorage.setItem("pecas",JSON.stringify(pecas))

mostrarPecas()

}

function mostrarPecas(){

listaPecas.innerHTML=""

pecas.forEach(p=>{

listaPecas.innerHTML+=`
<tr>
<td>${p.nome}</td>
<td>${p.marca}</td>
<td>${p.preco}</td>
</tr>
`

})

}

function addVenda(){

let v = {

cliente:clienteVenda.value,
produto:produtoVenda.value,
valor:valorVenda.value

}

vendas.push(v)

localStorage.setItem("vendas",JSON.stringify(vendas))

mostrarVendas()

}

function mostrarVendas(){

listaVendas.innerHTML=""

vendas.forEach(v=>{

listaVendas.innerHTML+=`
<tr>
<td>${v.cliente}</td>
<td>${v.produto}</td>
<td>${v.valor}</td>
</tr>
`

})

}

mostrarPecas()
mostrarVendas()
