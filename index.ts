import express from 'express'
import type { Express } from 'express'
const app: Express = express();
const pet :{
    name:string,
    speices:string,
    adopted:boolean,
    age: number
}={
    name:"Rubik",
    species:"Cat",
    adopted: true,
    age: 3
}
app.get('/', (req, res) => {
    res.json({pet})
})
const PORT = 8000;
app.listen(PORT, (): void => {
    console.log("Listening on port:",PORT);
})