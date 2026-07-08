



/*import { useState } from "react";

export default function Atleta({addAtleta}){

const [nome,setNome]=useState("");
const [idade,setIdade]=useState("");
const [tempo,setTempo]=useState("");

function enviar(e){

e.preventDefault();

addAtleta({

nome,
idade,
tempo:Number(tempo)

});

setNome("");
setIdade("");
setTempo("");

}

return(

<form onSubmit={enviar}>

<h2>Novo Atleta</h2>

<input
placeholder="Nome"
value={nome}
onChange={(e)=>setNome(e.target.value)}
/>

<input
placeholder="Idade"
value={idade}
onChange={(e)=>setIdade(e.target.value)}
/>

<input
placeholder="Tempo (segundos)"
value={tempo}
onChange={(e)=>setTempo(e.target.value)}
/>

<button>Cadastrar</button>

</form>

)

}*/