import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB CONNECTION FAIL`, error);
    process.exit(1); // Exit the node app with an error code of 1
  }
};

export default connectDB;





// (async () => {
//     try {
//       await mongoose.connect(`${procces.env.MONGODB_URI}/${MONGODB_URI}`);
//       app.on("error", (error) => {
//         console.log("ERROR", error);
//         throw error;
//       });

//       app.listen(procces.env.PORT, () => {
//         console.log(`App is listening on port${process.env.PORT}`);
//       });
//     } catch (error) {
//       console.log("ERROR", error);
//       throw error;
//     }
//   })()
