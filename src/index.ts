import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// 404 handler
app.use((req, res, next) => {
	res.status(404).json({ message: "Not Found" });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.error(err);
	res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});


const PORT = process.env.PORT || 3000;
if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
}

export default app;