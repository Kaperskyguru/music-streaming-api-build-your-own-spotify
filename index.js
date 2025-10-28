import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello From Your API"));


This is a new code that needs to work or I deal with it a way that's unimaginative and I will fuck it up badly due to my power and what my fears are really. What do I need t

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
