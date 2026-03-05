let users = JSON.parse(localStorage.getItem("users")) || []
let produtos = JSON.parse(localStorage.getItem("produtos")) || []
let vendas = JSON.parse(localStorage.getItem("vendas")) || []

function register(){

let u = regUser.value
let p = regPass.value

users.push({user:u,pass:p})

localStorage.setItem("users",JSON.stringify(users))

alert("Usuário criado")

}

function login(){

let u = loginUser.value
let p = loginPass.value

let ok = users.find(x=>x.user==u && x.pass==p)

if(ok){

login.style.display="none"
dashboard.style.display="block"

openPage("produtos")

}else{

alert("Login inválido")

}

}

function logout(){

location.reload()

}

function openPage(p){

document.querySelectorAll(".page").forEach(x=>x.style.display="none")

document.getElementById(p).style.display="block"

}

function addProduto(){

let p = {

nome:nomePeca.value,
marca:marcaPeca.value,
preco:precoPeca.value

}

produtos.push(p)

localStorage.setItem("produtos",JSON.stringify(produtos))

showProdutos()

}

function showProdutos(){

listaProdutos.innerHTML=""

produtos.forEach(p=>{

listaProdutos.innerHTML+=`
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

cliente:cliente.value,
produto:produto.value,
valor:Number(valor.value)

}

vendas.push(v)

localStorage.setItem("vendas",JSON.stringify(vendas))

showVendas()

relatorio()

}

function showVendas(){

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

function relatorio(){

let total = vendas.reduce((s,v)=>s+v.valor,0)

totalVendas.innerText="Total vendido: R$ "+total

}

showProdutos()
showVendas()
relatorio()
