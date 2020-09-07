import nc from "next-connect";
import dbApi from "../../../src/db/dbApi";

const handler = nc().delete((req, res) => {
  const erasedDriver = dbApi.deleteDriver(req.query);

  if (!erasedDriver) {
    res.status(404);
    res.end();
    return;
  }

  res.json(erasedDriver);
});

export default handler;
