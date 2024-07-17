const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./DB");
const app = express();
const userRoute = require("./Routes/users.js");
const authRoute = require("./Routes/auth.js");
const newsRoutes = require("./Routes/NewsR");
const programsRoutes = require("./Routes/ProgramR");
const testimonialsRoutes = require("./Routes/TestimonialR");
const teamRoutes = require("./Routes/TeamR");
const faqRoutes = require("./Routes/FaqR");

//connect to DB
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/news", newsRoutes);
app.use("/api/programs", programsRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/faq", faqRoutes);

//server
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
