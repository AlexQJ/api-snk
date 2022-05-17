const express = require('express');
const app = express();

app.use(express.json());

const titanes = [
    {
        excentricos: [
            {
                id: 1,
                nombre: "Dina Jaeger",
                altura: 15,
                portador: "Dina Jaeger",
                img: ""
            },
            {
                id: 2,
                nombre: "Rod Reiss",
                altura: 120,
                portador: "Rod Reiss",
                img: ""
            },
            {
                id: 3,
                nombre: "Sra. Springer",
                altura: 0,
                portador: "Sra. Springer",
                img: ""
            },
            {
                id: 4,
                nombre: "Titán Parlante",
                altura: 6,
                portador: "desconocido",
                img: ""
            },
            {
                id: 5,
                nombre: "Titanes del Muro / Colosales",
                altura: 50,
                portador: "desconocidos",
                img: ""
            },
            {
                id: 6,
                nombre: "Titán que observa",
                altura: "3-4",
                portador: "desconocido",
                img: ""
            },
            {
                id: 7,
                nombre: "Titán que observa",
                altura: "3-4",
                portador: "desconocido",
                img: ""
            },
            {
                id: 8,
                nombre: "Titán que observa",
                altura: "3-4",
                portador: "desconocido",
                img: ""
            },
            {
                id: 9,
                nombre: "Titán que observa",
                altura: "3-4",
                portador: "desconocido",
                img: ""
            },
        ]
    },
    {
        guerreros: [
            {
                id: 1,
                nombre: "Titán Fundador",
                altura: 15,
                portadores: [
                    "Eren Jaeger",
                    "Grisha Jaeger",
                    "Frieda Reiss",
                    "Uri Reiss",
                    "Padre de Rod y Uri Reiss",
                    "Karl Fritz",
                    "Ymir Fritz"
                ],
                img: ""
            },
            {
                id: 2,
                nombre: "Titán de Ataque",
                altura: 15,
                portadores: [
                    "Eren Jaeger",
                    "Grisha Jaeger",
                    "Eren Kruger"
                ],
                img: ""
            },
            {
                id: 3,
                nombre: "Titán Colosal",
                altura: 60,
                portadores: [
                    "Armin Arlert",
                    "Bertolt Hoover"
                ],
                img: ""
            },
            {
                id: 4,
                nombre: "Titán Acorazado",
                altura: 15,
                portadores: [
                    "Reiner Braun"
                ],
                img: ""
            },
            {
                id: 5,
                nombre: "Titán Hembra",
                altura: 14,
                portadores: [
                    "Annie Leonhart"
                ],
                img: ""
            },
            {
                id: 6,
                nombre: "Titán Bestia",
                altura: 17,
                portadores: [
                    "Zeke Jaeger",
                    "Tom Xaver"
                ],
                img: ""
            },
            {
                id: 7,
                nombre: "Titán Mandíbula",
                altura: 5,
                portadores: [
                    "Falco Grice",
                    "Porco Galliard",
                    "Ymir",
                    "Marcel Galliard"
                ],
                img: ""
            },
            {
                id: 8,
                nombre: "Titán Carguero",
                altura: 4,
                portadores: [
                    "Pieck Finger"
                ],
                img: ""
            },
            {
                id: 9,
                nombre: "Titán Martillo De Guerra",
                altura: 14,
                portadores: [
                    "Eren Jaeger",
                    "Lara Tybur"
                ],
                img: ""
            }
        ]
    }   
];

// ? GET 

app.get('/', (req, res)=>{
    res.send('Node JS api');
})

app.get('/api/titanes',(req, res)=>{
    res.send(titanes);
})
app.get('/api/titanes/excentricos',(req, res)=>{
    res.send(titanes[0].excentricos);
})

app.get('/api/titanes/guerreros/',(req, res)=>{
    res.send(titanes[1].guerreros);
})

app.get('/api/titanes/excentricos/:id',(req, res)=>{
    const titan = titanes[0].excentricos.find(c => c.id === parseInt(req.params.id));
    if(!titan){
        return res.status(404).send('Titán no encontrado')
    }else{
        return res.send(titan);
    }
})

app.get('/api/titanes/guerreros/:id',(req, res)=>{
    const titan = titanes[1].guerreros.find(c => c.id === parseInt(req.params.id));
    if(!titan){
        return res.status(404).send('Titán no encontrado')
    }else{
        return res.send(titan);
    }
})

// ? POST

app.post('/api/titanes/excentricos/:id',(req, res)=>{
   res.status(409).send('No tienes permiso para postear');
});

app.post('/api/titanes/guerreros/:id',(req, res)=>{
    res.status(409).send('No tienes permiso para postear');
 });

 // ! DELETE

app.delete('/api/titanes/excentricos/:id',(req, res)=>{
    res.status(409).send('No tienes permiso para borrar');
 });
 
 app.delete('/api/titanes/guerreros/:id',(req, res)=>{
     res.status(409).send('No tienes permiso para borrar');
  });

  const PORT = process.env.port || 3000;

  app.listen(PORT, ()=>{console.log(`Escuchando en el puerto ${PORT}...`);})
