import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { v4 } from "uuid";

const adapter = new FileSync("./src/data/data.json");
const db = low(adapter);

const dbApi = {
  getAllDrivers: () => db.get("drivers").value(),
  createDriver: ({ name, age, patent, telephone, model, year }) => {
    const newDriver = { id: v4(), name, age, patent, telephone, model, year };
    db.get("drivers").push(newDriver).write();
    return newDriver;
  },
  getDriver: ({ id }) => {
    const driver = db.get("drivers").find({ id }).value();
    return driver;
  },
  deleteDriver: ({ id }) => {
    const erasedDrivers = db.get("drivers").remove({ id }).write();
    return erasedDrivers[0];
  },
};

export default dbApi;
