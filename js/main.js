'use strict';
class App {
  constructor() {
    this.tareas = [];
  }

  inicio(){
    $("#agregar").click( () => this.agregarTarea());
    $("#listaTareas").on("change",'.tacharLi', () => this.tacharTarea());
    $("#listaTareas").on("click",'.eliminarLi',() => this.eliminarTarea());
  }

  agregarTarea(){
    var nuevaTarea=$("#tarea").val();
    if (nuevaTarea === "") {
      alert("No has escrito nada!");
    } else {
      let tarea = $("#listaTareas").append("<li><input class='tacharLi' type='checkbox'>"
      + nuevaTarea + "<span class = 'glyphicon glyphicon-trash eliminarLi'></span></li>");
      $("#tarea").val("");
    }
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(){
  $('.eliminarLi').parent().remove();
  }

  tacharTarea(){
  $(".tacharLi").parent().toggleClass("tachar");
  }
}

$(document).ready(()=>{
   var app = new App ();
   app.inicio();
})
// Funciona
/*
$(document).ready(function(){
  $("#agregar").on("click", agregarTarea);
  $("#listaTareas").on("change",'.tacharLi', tacharTarea);
  $("#listaTareas").on("click",'.eliminarLi', eliminarTarea);

  function agregarTarea(){
    var nuevaTarea=$("#tarea").val();
    if (nuevaTarea === "") {
      alert("No has escrito nada!");
    } else {
      $("#listaTareas").append("<li><input class='tacharLi' type='checkbox'>"
      + nuevaTarea + "<span class = 'glyphicon glyphicon-trash eliminarLi'></span></li>");
      $("#tarea").val("");
    }
  }
  function eliminarTarea(){
    $(this).parent().remove();
  }
  function tacharTarea(){
    $(this).parent().toggleClass("tachar");
  }
});
*/
