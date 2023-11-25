import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { exec } from "child_process";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 3002;

const updateHandler = (req: any, res: any) => {
  if (req.params.updateKey === process.env.UPDATE_KEY) {
    exec("bun run update.ts", (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`status: ${stdout}`);
    });
  }
  res.status(200).json({ message: "update complete" });
};

app.get("/update/:updateKey", updateHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
