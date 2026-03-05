export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = req.body;

    console.log("Survey data:", data);

    // ตรงนี้สามารถเชื่อม database ได้
    // เช่น Supabase / MySQL / Google Sheets

    res.status(200).json({
      message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });

  } catch (error) {
    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล"
    });
  }
}