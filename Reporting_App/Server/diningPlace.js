import oracledb from 'oracledb';
import { simpleExecute } from "./dbUtil.js";

export default function(app) {
  app.get("/api/dining_places", async (req, res) => {
    const statement = `SELECT
        dp.dining_id "dining_id",
        dp.dining_name "dining_name",
        b.building_name "building_name"
      FROM DINING_PLACE dp, BUILDING b
      WHERE dp.building_id = b.building_id
    `;
    const result = await simpleExecute(statement, {}, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    res.send(JSON.stringify(result.rows));
  });

  app.get("/api/dining_place/:dining_place_id/menus", async (req, res) => {
    const {
      dining_place_id
    } = req.params;
    const bindings = {
      dining_place_id
    };
    const statement = `SELECT
        m.menu_type,
        f.food_price,
        f.food_name
      FROM MENU m, Menu_FOOD_BRIDGE mfb, FOOD f
        WHERE m.menu_id = mfb.menu_id
        AND mfb.food_id = f.food_id
        AND m.dining_id = :dining_place_id
    `;
    const result = await simpleExecute(statement,bindings, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    res.send(JSON.stringify(result));
  });
}

