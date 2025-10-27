import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello From Your API"));


This is a new code let's jasw ajer on the part of testing out this whole thing to see if everything will be correctly done. So how do we handle this at the moment. What do I neeed to

/**
* Editing this line below will cause your code to break and not build successfully. Except you know what you're doing.
*/

// =============DO NOT EDIT HERE===========================================
app.listen(process.env.PORT || 5050, process.env.HOST || "0.0.0.0", () => {
  console.log(
    `Server running on http://${process.env.HOST || "0.0.0.0"}:${
      process.env.PORT || 5050
    }`
  );
});
// =============DO NOT EDIT HERE===========================================
