import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));



// 4. When the user goes to the home page it should render the index.ejs file.

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://bored-api.appbrewery.com/random");
//     const userSecret = response.data.secret;
//     const userName = response.data.username;
//     console.log(result);
//     res.render("index.ejs", { 
//       secret: userSecret, 
//       user: userName 
//     });
//   } catch (error) {
//     console.error("Failed to make request:", error.message);
//     res.render("index.ejs", {
//       error: error.message,
//     });
//   }
// });

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});


  // try {
  //   const result = await axios.get("https://secrets-api.appbrewery.com/random");
  //   res.render("index.ejs", {
  //     secret: result.data.secret,
  //     user: result.data.username,
  //   });
  // } catch (error) {
  //   console.log(error.response.data);
  //   res.status(500);
  // }

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.


app.listen(port, () => {
  console.log(`Server is running on port ${port} on index.js`)
});


