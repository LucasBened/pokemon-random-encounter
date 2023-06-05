//------------------------------------------------------------------------------------------
//Seção das variáveis

const encontros = ["Cyndaquil", "Charmander", "Cinderace","Larvitar", "Gengar", "Giratina", "Weavile"]
let box = []
let option = ""

//------------------------------------------------------------------------------------------
//Seção das funções

function encontrarPkmn(){
  let capturar = encontros[Math.floor(Math.random() * encontros.length)] 
  let confirmar = confirm(`Um ${capturar} selvagem foi encontrado, deseja capturar?`)

  if(confirmar){
    box.push(capturar)
    alert(`O ${capturar} foi capturado, e enviado para a box! `)
  }else{
    alert(`Voltando ao menu...`)
  }
}

function menu(){
  option = prompt(
    "Bem vindo ao simulador pokémon, o que você deseja fazer? " +
    "\n 1. Caçar Pokémon."+
    "\n 2. Olhar minha Box."+
    "\n 3. Sair."
  )
}

function pkmnCapturado(){
  let capturados = ""
  for(i = 0; i < box.length; i++){
    capturados += (i + 1) +" º " + box[i] + "\n" 
  }
  alert("Box: \n" + capturados) 
}

//------------------------------------------------------------------------------------------
//Seção de loop

do{

  menu()

  switch(option){
    case "1":
     encontrarPkmn()
      break

    case "2":
      pkmnCapturado()
      break

    case "3": 
      alert("Saindo...")
      break

    default:
      alert("Opção inválida")
  }



}while(option !== "3"  )

//------------------------------------------------------------------------------------------

