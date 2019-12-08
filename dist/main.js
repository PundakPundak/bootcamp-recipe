const Renderer = require(`./Renderer`)
const fetchRecipe = function () {
    let input = $("#recipe-input").val()
    const renderer = new Renderer()
    $.get(`/recipes/${input}`, function (data) {
        console.log(data) // We're checking we got the data 
        renderer.render(data)
    })
}