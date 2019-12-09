const express = require( 'express' )
const app = express()
const path = require('path')
const port = 8080
const routeToAPI = `https://recipes-goodness.herokuapp.com/recipes/`
const successStringRemote = `Get request to remote server sent`
const successStringLocal =`Get request to local host on port ${port} received`

//Dist and node_modules
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))
//
app.get(`/sanity`, function(request, response){
    console.log(successStringLocal)
    response.send(`OK`)
})
app.get(`/recipes/:ingredient`, function(req, res){
    var request = require('request')
    const ingredient = req.params.ingredient
    const finalRoute = routeToAPI + ingredient 
    request(finalRoute, /* { json: true },*/ (error, response, body) => {
        if (error) { 
            return console.log(error)}
        console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
        obj = JSON.parse(body)
        console.log('body:', obj.results) // Print the HTML for the Google homepage.
        res.send(obj.results)
        console.log(successStringLocal)
        console.log(successStringRemote)
    })
})
let socket = app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})
module.exports = { app, socket }

