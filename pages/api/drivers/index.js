import nc from "next-connect";
import cors from "cors";
import dbApi from "../../../src/db/dbApi";

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((_, res) => {
    const drivers = dbApi.getAllDrivers();
    res.json({ drivers });
  })
  .post((req, res) => {
    const newDriver = dbApi.createDriver(req.body);
    res.json(newDriver);
  });

export default handler;
