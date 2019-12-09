const renderer = new Renderer()
// $(`button`).onclick = function() {fetchRecipe()}
// function fetchRecipe() {
//     let input = $("#recipe-input").val()
//     $.get(`/recipes/${input}`, function (data) {
//         console.log(data) // We're checking we got the data 
//         renderer.render(data)
//     })
// }
$("button").on("click", function(){
    let input = $("#recipe-input").val()
    $.get(`/recipes/${input}`, function (data) {
        console.log(data) // We're checking we got the data 
        renderer.render(data)
    })
  })