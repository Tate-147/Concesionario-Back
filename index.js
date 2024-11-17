import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

// Data
let cars = [
    {
        id: 1,
        brand: "Mitsubishi",
        model: "Montero",
        color: "Gris",
        year: 2009,
        description: "Distribución hecha hace 20.000 kms, gomas nuevas, recién encerado y pulido. Dos juegos de llaves y todos los manuales.",
        price: "$2814.46",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mitsubishi_Montero_4.jpg/413px-Mitsubishi_Montero_4.jpg",
        enabled: true
    },
    {
        id: 2,
        brand: "Volkswagen",
        model: "Passat",
        color: "Plateado",
        year: 2011,
        description: "Única dueña desde 0km, todos los services oficiales (ultimo hecho el 19/09/2024 el mas completo), 4 cubiertas nuevas.",
        price: "$1731.98",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Volkswagen_Passat_CN_II_01_China_2012-04-22.jpg/375px-Volkswagen_Passat_CN_II_01_China_2012-04-22.jpg",
        enabled: true
    },
    {
        id: 3,
        brand: "Saturn",
        model: "L-Series",
        color: "Blanco",
        year: 2003,
        description: "No Funciona el Asistente de Estacionamiento Automatico y a veces funciona la camara de marcha atras",
        price: "$2238.35",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/00-02_Saturn_L-Series_sedan.jpg/420px-00-02_Saturn_L-Series_sedan.jpg",
        enabled: true
    },
    {
        id: 4,
        brand: "Jeep",
        model: "Compass",
        color: "Violeta",
        year: 2012,
        description: "Cierre y alarma de fabrica, único dueño, excelente Estado, las 4 cubiertas nuevas (Pirelli), auxilio sin usar.",
        price: "$2732.99",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/0_Jeep_Compass_%28MP%29_1.jpg/480px-0_Jeep_Compass_%28MP%29_1.jpg",
        enabled: true
    },
    {
        id: 5,
        brand: "Mitsubishi",
        model: "Lancer Evolution",
        color: "Rojo",
        year: 2002,
        description: "Titular particular, al día sin deudas. Tope de gama, el más completo de la línea, estado impecable, VTV al día realizada en agosto.",
        price: "$3849.47",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg/420px-2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg",
        enabled: true
    },
    {
        id: 6,
        brand: "Chevrolet",
        model: "Suburban",
        color: "Verde",
        year: 2009,
        description: "Levas al volante, sensores de estacionamiento delantero y trasero. Tratamiento gráfeno realizado en Detail Oeste, Apple car play y Android auto última generación.",
        price: "$1252.30",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2021_Chevrolet_Suburban_High_Country_Front_View_%28United_States%29.png/375px-2021_Chevrolet_Suburban_High_Country_Front_View_%28United_States%29.png",
        enabled: true
    },
    {
        id: 7,
        brand: "Dodge",
        model: "Ram Van",
        color: "Celeste",
        year: 1987,
        description: "Excelente Estado, documentación al día, lista para ser transferida.",
        price: "$1762.42",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1990_Dodge_Ram_350_Maxi%2C_front_right.jpg/420px-1990_Dodge_Ram_350_Maxi%2C_front_right.jpg",
        enabled: true
    },
    {
        id: 8,
        brand: "Isuzu",
        model: "Ascender",
        color: "Blanco",
        year: 2004,
        description: "Cuidado como un hijo, soy titular, Inmaculado. El color más lindo, siempre durmió en cochera bajo techo.",
        price: "$1081.40",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2008_Isuzu_Ascender_5-Passenger_S_in_Arctic_White_%26_Gray_Metallic%2C_Front_Left%2C_06-17-2023.jpg/420px-2008_Isuzu_Ascender_5-Passenger_S_in_Arctic_White_%26_Gray_Metallic%2C_Front_Left%2C_06-17-2023.jpg",
        enabled: true
    },
    {
        id: 9,
        brand: "BMW",
        model: "6 Series F12",
        color: "Negro",
        year: 2008,
        description: "Camara de retroceso alta definición, Cree led en altas y bajas, Cubiertas nuevas con menos de 5 mil kilometros.",
        price: "$1258.99",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2018_BMW_640_3.0_Front.jpg/420px-2018_BMW_640_3.0_Front.jpg",
        enabled: true
    },
    {
        id: 10,
        brand: "Mitsubishi",
        model: "GTO",
        color: "Rojo",
        year: 1994,
        description: "No hace un ruido, se puede escanear, venir a ver con mecánico.",
        price: "$3822.92",
        urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/1991_Mitsubishi_GTO_%2836949085656%29.jpg/330px-1991_Mitsubishi_GTO_%2836949085656%29.jpg",
        enabled: true
    },
];

/*
Status Code: 200 - OK
Status Code: 201 - Created
Status COde: 400 - Bad Request
Status Code: 404 - Not Found
Status Code: 500 - Internal Server Error
*/

// Middleware
app.use((req, res, next) => {
    console.log("Peticion HTTP recibida");
    const UserLogged = true;
    if (UserLogged) {
        next();
    } else {
        res.status(401).json({error: "No estas logueado"});
    }
});

// Cars Endpoint
app.get("/cars", (req, res) => {
    try {
        res.status(200).json(cars);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Car Endpoint
app.get("/cars/:id", (req, res) => {
    try {
        const id = req.params.id;
        const car = cars.find(car => car.id == id);
        if (!car || !car.enabled) {
            res.status(400).json({error: "Auto no encontrado"});
        }else {
            res.status(200).json(car);    
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Create Car Endpoint
app.post("/cars", (req, res) => {
    try {
        const {brand, model, color, year, description, price, urlToImage} = req.body;
        if (!brand || !model || !color || !year || !description || !price || !urlToImage) {
            res.status(400).json({error: "Faltan datos"});    
        };
        const car = {
            id: cars.length + 1,
            brand: brand,
            model: model,
            color: color,
            year: year,
            description: description,
            price: price,
            urlToImage: urlToImage,
            enabled: true
        };
        cars.push(car);
        res.status(201).json(car);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Update Car Endpoint
app.put("/cars/:id", (req, res) => {
    try {
        const id = req.params.id;
        const {brand, model, color, year, description, price, urlToImage} = req.body;
        if (!id || !brand || !model || !color || !year || !description || !price || !urlToImage) {
            res.status(400).json({error: "Faltan datos"});    
        }else {
            const car = cars.find(car => car.id == id);
            if (!car || !car.enabled) {
                res.status(400).json({error: "Auto no encontrado"});
            }else {
                car.brand = brand;
                car.model = model;
                car.color = color;
                car.year = year;
                car.description = description;
                car.price = price;
                car.urlToImage = urlToImage;
                cars.push(car);
                res.status(201).json(car);   
            };
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Logical Delete Car Endpoint
app.delete("/cars/logical/:id", (req, res) => {
    try {
        const id = req.params.id;
        const car = cars.find(car => car.id == id);
        if (!car || !car.enabled) {
            res.status(400).json({error: "Auto no encontrado"});
        }else {
            car.enabled = false;
            res.status(200).json(car);
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Delete Car Endpoint
app.delete("/cars/:id", (req, res) => {
    try {
        const id = req.params.id;
        const car = cars.find(car => car.id == id);
        if (!car || !car.enabled) {
            res.status(400).json({error: "Auto no encontrado"});
        }else {
            cars = cars.filter(car => car.id != id);
            res.status(200).json(car);
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error en el Servidor"});
    }
});

// Bad Request
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada"});
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})