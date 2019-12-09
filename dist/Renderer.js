class Renderer{
    render(data) {
        const recipes = {data}
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(recipes)
        $("#container").append(newHTML)
    }
}
