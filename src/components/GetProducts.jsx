const productos =[
    
    {
        "id": "1",
        "producto":"figuras haikyuu",
        "categoria": "Anime",
        "precio": "1390",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "2",
        "producto":"peluches deku ",
        "categoria": "Anime",
        "precio": "2100",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "3",
        "producto":"Llavero MJOLNIR",
        "categoria": "comic",
        "precio": "600",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "4",
        "producto":"Funko POP SHANG CHI",
        "categoria":"comic",
        "precio":"3750",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "5",
        "producto":"Manga Shuumatsu no Valkyrie",
        "categoria": "Manga",
        "precio":"550",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "6",
        "producto":"Vaso termico Itachi",
        "categoria": "Anime",
        "precio": "750",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "7",
        "producto":"Mascara Kakashi",
        "categoria": "Anime",
        "precio": "1200",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "8",
        "producto":"juego de mesa juguemos + cerca invierno",
        "categoria": "Juego",
        "precio": "1000",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "9",
        "producto":"Billetera Harry Potter",
        "categoria": "Pelicula",
        "precio": "980",
        "imagenUrl": "",
        "descripcion": "insert description"
    },
    {
        "id": "10",
        "producto":"Tazon Jujutsu Kaisen",
        "categoria": "Anime",
        "precio": "1300",
        "imagenUrl": "",
        "descripcion": "insert description"
    }
    
]

export const getProducts= new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve(productos)
    },2000)
 })
 