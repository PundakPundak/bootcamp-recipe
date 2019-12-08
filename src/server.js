const express = require( 'express' )
const app = express()
const path = require('path')
const port = 8080
let routeToAPI = `https://recipes-goodness.herokuapp.com/recipes/`
const successStringRemote = `Get request to remote server sent`
const successStringLocal =`Get request to local host on port ${port} received`
/*const data = {
    "key": "value",
}*/
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
    console.log(successStringLocal)
    const ingredient = req.params.ingredient
    routeToAPI += ingredient 
    request(routeToAPI, /* { json: true },*/ (error, response, body) => {
        console.log(successStringRemote)
        if (error) { 
            return console.log(error); }
        //console.log(body.url);
        //console.log(body.explanation);
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body)
    });
    /*http.get(routeToAPI, (res)=> { //http Request
        console.log(successStringRemote)

        let dataFromRemoteServer = ``
        res.on('data', (chunk) => {
            dataFromRemoteServer += chunk
        })
        res.on('end', () => {
            const parsedAPIinJSON = JSON.parse(dataFromRemoteServer)
            const allPlayersArray = parsedAPIinJSON.league.standard
            const teamIdFromReqParam =  teamToIDs[teamNameFromReqParam]
            console.log(teamIdFromReqParam)
            const playersFilteredArray = allPlayersArray.filter( player => 
                (player.teamId == teamIdFromReqParam) && (player.isActive == true) )
            
            FinalArray = playersFilteredArray.map(player => 
                {return {   firstName: player.firstName, 
                            LastName: player.lastName, 
                            jersey: player.jersey, 
                            pos:player.pos         
                            } 
                } )   
            
        })
    })*/
    
})
let socket = app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})
module.exports = { app, socket }

