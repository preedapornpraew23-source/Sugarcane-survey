import mysql from "mysql2/promise";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const data = req.body;

    // รวม checkbox
    const symptoms = Array.isArray(data["symptom[]"]) 
      ? data["symptom[]"].join(", ") 
      : data["symptom[]"] || "";

    const management = Array.isArray(data["manage[]"]) 
      ? data["manage[]"].join(", ") 
      : data["manage[]"] || "";

    const support = Array.isArray(data["support[]"]) 
      ? data["support[]"].join(", ") 
      : data["support[]"] || "";

    const connection = await mysql.createConnection({
     host: "localhost",
user: "root",
password: "",
database: "sugarcane_db"
    });

    await connection.execute(
      `INSERT INTO survey
      (name,address,phone,register_status,contract_status,
      area,variety,yield_per_rai,knowledge,symptoms,
      management,insect_control,support,suggestion)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.name,
        data.address,
        data.phone,
        data.register,
        data.contract,
        data.area,
        data.variety,
        data.yield,
        data.knowledge1,
        symptoms,
        management,
        data.insect,
        support,
        data.suggestion
      ]
    );

    await connection.end();

    res.status(200).json({
      message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล"
    });

  }
}