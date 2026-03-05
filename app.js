let pecas = JSON.parse(localStorage.getItem("pecas")) || []
let vendas = JSON.parse(localStorage.getItem("vendas")) || []
let notas = JSON.parse(localStorage.getItem("notas")) || []

function login(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u==="admin" && p==="123"){
document.getElementById("loginBox").style.display="none"
document.getElementById("painel").style.display="block"
pagina("pecas")
}else{
alert("Login inválido")
}

}

function logout(){
location.reload()
}

function pagina(id){

document.querySelectorAll(".page").forEach(p=>{
p.style.display="none"
})

document.getElementById(id).style.display="block"

}


function addPeca(){

let p = {
nome: nomePeca.value,
marca: marcaPeca.value,
modelo: modeloPeca.value,
preco: precoPeca.value
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
<td>${p.modelo}</td>
<td>${p.preco}</td>
</tr>
`

})

}

function addVenda(){

let v = {
cliente:clienteVenda.value,
produto:produtoVenda.value,
qtd:quantidadeVenda.value,
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
<td>${v.qtd}</td>
<td>${v.valor}</td>
</tr>
`

})

}

function addNota(){

notas.push(nota.value)

localStorage.setItem("notas",JSON.stringify(notas))

mostrarNotas()

}

function mostrarNotas(){

listaNotas.innerHTML=""

notas.forEach(n=>{

listaNotas.innerHTML+=`<li>${n}</li>`

})

}

mostrarPecas()
mostrarVendas()
mostrarNotas()