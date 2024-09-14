class CalcularMediaAtletas{
  constructor(ginastas){
      this.ginastas = ginastas;
  }
  
  calcularMedia(){
    this.ginastas.forEach(function(ginasta){
      let nome = ginasta.nome
      console.log(`Atleta: ${nome}`)
      
      let notas = ginasta.notas
      notas.sort((a,b) => a-b)
      console.log(`Notas Obtidas: ${notas.join(", ")}`)
      
      let notasComputadas = notas.slice(1,-1) //
      
      let soma = notasComputadas.reduce(function(total,atual){
        return total + atual
      },0) 
      
      let media = soma /  (notas.length -2)
      console.log(`Média Válida: ${media.toFixed(2)}`)
      console.log("")
      return media
    })
  }
      

}

let atletas = [
{
  nome: "Cesar Abascal",
  notas: [10, 9.34, 8.42, 10, 7.88]
},
{
  nome: "Fernando Puntel",
  notas:  [8, 10, 10, 7, 9.33]
},
{
  nome: "Daiane Jelinsky",
  notas: [7, 10, 9.5, 9.5, 8]
},
{
  nome: "Bruno Castro",
  notas: [10, 10, 10, 9, 9.5]
}
];

let resultado = new CalcularMediaAtletas(atletas)

resultado.calcularMedia()
   