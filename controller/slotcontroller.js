const connection = require("../config/dbconfig");

async function getAllslots(req, res) {
  try {
    connection.query("Select * from slots", (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (err) {
    console.log(err);
  }
}

async function createSlot(req, res) {
  try {
    const { date, startSlot, endSlot } = req.body;

    connection.query(
      "Select * from slots where date = ? AND startSlot = ? AND endSlot = ?",
      [date, startSlot, endSlot],
      (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.status(400).json({ error: "Slot already exists" });
        } else {
          // Create a new Slot
          connection.query(
            "INSERT INTO slots (date, startSlot, endSlot) VALUES (?, ?, ?)",
            [date, startSlot, endSlot],
            (err) => {
              if (err) throw err;
              res.status(201).json({ message: "Slot created successfully" });
            }
          );
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getAllslots, createSlot };
