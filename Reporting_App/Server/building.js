import simpleExecute from "./simpleExecute";
export default function(app) {
  app.get("/api/building", async (req, res) => {
    console.log("pasing through");
    const example_building = {
      building_id: 101,
      building_name: "falvey"
    };
    const statement = `Insert into Building values (101, 'falvey' )`;
    const result = await simpleExecute(statement);
    console.log(example_building);
    res.send(JSON.stringify(example_building));
  });
}

