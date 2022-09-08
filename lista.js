//Obeter os elementos da pagina HTML
const frm = document.querySelector("form");
const dvQuadro = document.getElementById("divQuadro");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const tarefa = frm.intarefa.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto); //define que o texto sera filho de h5
    dvQuadro.appendChild(h5); //define que h5 sera filho de dvQuadro 
    frm.intarefa.value = "";
    frm.intarefa.focus();

})


frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if(tarefas.length == 0){
        alert("Não ha tarefas para selecionar")
        return
    }

  //percorrer a lista de elementos h5  inserido na pagina
    for (let i = 0; i < tarefas.length; i++){

    }
})

    
 