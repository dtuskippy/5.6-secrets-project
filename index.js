import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const userSecret = response.data.secret;
    const userName = response.data.username;
    res.render("index.ejs", { 
      secret: userSecret, 
      user: userName 
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});
    
    

// app.get("/", async (req, res) => {
//   try {
//     const result = await axios.get("https://secrets-api.appbrewery.com/random");
//     res.render("index.ejs", {
//       secret: result.data.secret,
//       user: result.data.username,
//     });
//   } catch (error) {
//     console.log(error.response.data);
//     res.status(500);
//   }
// });



app.listen(port, () => {
  console.log(`Server is running on port ${port} on index.js`)
});


