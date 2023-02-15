require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/uploads")

const express = require("express");
const cors = require("cors")

//Importação de rotas
const routes = require('./routes');

const app = express();
app.use(cors());

migrationsRun();
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);


app.use((error, request, response, next) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })

})


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})