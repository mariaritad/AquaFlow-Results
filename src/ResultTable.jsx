export default function ResultTable({atletas}){

const ranking=[...atletas].sort((a,b)=>a.tempo-b.tempo);

const podio=ranking.slice(0,3);

return(

<div>

<h2>🏆 Pódio</h2>

{podio.map((a,index)=>(

<p key={index}>

{index+1}º Lugar - {a.nome} ({a.tempo}s)

</p>

))}

</div>

)

}