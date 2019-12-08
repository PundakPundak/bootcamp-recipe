
const fetchRecipe = function () {
    let input = $("#recipe-input").val()
    
    $.get(`/recipes/${input}`, function (data) {
        $("body").append(`<div>${data[0].idMeal}</div>`) //Change
        //$("body").append(`<div>${data.ti8} - ${data.teamName}`) //Change
        console.log(data)
    })
}