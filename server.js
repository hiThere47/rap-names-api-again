const express = require('express')
const app = express()
const PORT = 8000

const rapperName= {
    '21 savage':{
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age':28,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age':29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan'
        },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}
    

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html') //__dirname + helps get the index.html
})

app.get('/api', (request, response)=>{
    response.json(rapperName)
})

app.get('/api/:name',(request, response)=>{
    const artistName = request.params.name.toLowerCase()

    if (rapperName[artistName]){
        response.json(rapperName[artistName])
    }
    else{
        response.json(rapperName['unknown'])
    }
    
})

app.listen(PORT , ()=>{
    console.log(`the server is now running on port ${PORT}!`)
})