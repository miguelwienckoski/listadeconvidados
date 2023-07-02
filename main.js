var listadeconvidados = [];

function pegarNome() {
var nome = document.getElementById("input").value;
listadeconvidados.push(nome);
listadeconvidados.sort;
document.getElementById("lista").innerHTML = listadeconvidados + " ";
console.log(listadeconvidados);
}

function searching()
{
}
var s= document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<listadeconvidados.length; j++)
{
}
if(s ==listadeconvidados [j]){
found-found+1;
}
document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
console.log("Nome encontrado "+found+" vez(es)");

