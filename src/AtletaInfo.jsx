export default function AtletaInfo({atletas}){

const ordem=[...atletas].sort((a,b)=>a.tempo-b.tempo);

return(

<table>

<thead>

<tr>

<th>Posição</th>
<th>Nome</th>
<th>Idade</th>
<th>Tempo</th>

</tr>

</thead>

<tbody>

{ordem.map((a,index)=>(

<tr key={index}>

<td>{index+1}</td>
<td>{a.nome}</td>
<td>{a.idade}</td>
<td>{a.tempo}s</td>

</tr>

))}

</tbody>

</table>

)

}