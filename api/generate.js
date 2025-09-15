export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, course, duration, completion, org, role, cnic, photoData } = req.body;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${name} - Student Details</title>
  <style>
    body{font-family:Arial;padding:20px;}
    img{max-width:150px;border:1px solid #ccc;margin-top:10px;}
  </style>
</head>
<body>
  <h2>Student Details</h2>
  <p><b>Full Name:</b> ${name}</p>
  <p><b>Course:</b> ${course}</p>
  <p><b>Duration:</b> ${duration}</p>
  <p><b>Completion Date:</b> ${completion}</p>
  <p><b>Organization:</b> ${org}</p>
  <p><b>Role / Achievement:</b> ${role}</p>
  <p><b>CNIC:</b> ${cnic}</p>
  <img src="${photoData}" alt="Student Photo">
</body>
</html>
    `;

    // Convert HTML to base64 data URL
    const dataURL = "data:text/html;base64," + Buffer.from(htmlContent).toString("base64");

    // Return URL in JSON
    res.status(200).json({ url: dataURL });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
