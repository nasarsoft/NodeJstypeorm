import express ,{ Request , Response} from "express";
import { createConnection } from "typeorm";
import { DataSource } from "typeorm"

import { User } from "./entity/User";

const app=express();
const PORT=4011;


const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "node_sequelize_api_db", 
  synchronize: true,
  entities:['./entity/*.ts'],
 // entities:[User],
  logging:true
})

AppDataSource.initialize()
    .then(() => {
      console.log('DB Connection');
    })
    .catch((error) => console.log(error))

//  createConnection   ({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "admin",
//   database: "truck_ways_2022", 
//   synchronize: true
// }).then(()=>{
//   console.log('DB Connection');
// }).catch(()=>{
//   console.log('Error');
// });


app.get('/test',(req:Request,res:Response)=>{
    res.json({
        Data:"test done"
    });
}); 

app.listen(PORT,():void=>{
  console.log('server is running on '+PORT)
});