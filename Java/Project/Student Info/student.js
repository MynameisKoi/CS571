const express = require('express');
const app = express();
const port = 8000;

// Sample student data
const studentData = [
  { student_id: '11111', student_name: 'Bruce Lee', score: 84 },
  { student_id: '22222', student_name: 'Jackie Chen', score: 93 },
  { student_id: '33333', student_name: 'Jet Li', score: 88 },
];

// API route to handle requests with student_id parameter
app.get('/api/score', (req, res) => {
  const studentId = req.query.student_id;

  // Find the student data based on the provided student_id
  const student = studentData.find((student) => student.student_id === studentId);

  if (student) {
    res.json({
      Student_ID: student.student_id,
      Student_Name: student.student_name,
      Score: student.score,
    });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
