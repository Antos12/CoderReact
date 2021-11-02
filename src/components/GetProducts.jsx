const productos =[
    
    {
        "id": "1",
        "producto":"figuras haikyuu",
        "tipo": "Anime",
        "precio": "$1390",
        "imagenUrl": ""
    },
    {
        "id": "2",
        "producto":"peluches deku ",
        "tipo": "Anime",
        "precio": "$2100",
        "imagenUrl": ""
    },
    {
        "id": "3",
        "producto":"Llavero MJOLNIR",
        "tipo": "comic",
        "precio": "$600",
        "imagenUrl": ""
    },
    {
        "id": "4",
        "producto":"Funko POP SHANG CHI",
        "tipo":"comic",
        "precio":"$3750",
        "imagenUrl": ""
    },
    {
        "id": "5",
        "producto":"Manga Shuumatsu no Valkyrie",
        "tipo": "Manga",
        "precio":"550",
        "imagenUrl": ""
    },
    {
        "id": "6",
        "producto":"Vaso termico Itachi",
        "tipo": "Anime",
        "precio": "$750",
        "imagenUrl": ""
    },
    {
        "id": "7",
        "producto":"Mascara Kakashi",
        "tipo": "Anime",
        "precio": "$1200",
        "imagenUrl": ""
    },
    {
        "id": "8",
        "producto":"juego de mesa juguemos + cerca invierno",
        "tipo": "Juego",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "9",
        "producto":"Billetera Harry Potter",
        "tipo": "Pelicula",
        "precio": "$980",
        "imagenUrl": ""
    },
    {
        "id": "10",
        "producto":"Tazon Jujutsu Kaisen",
        "tipo": "Anime",
        "precio": "$1300",
        "imagenUrl": ""
    }
    
]

export const getProducts= new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve(productos)
    },2000)
 })
 