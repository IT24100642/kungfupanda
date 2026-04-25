import { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/students`);
      const data = Array.isArray(res.data) ? res.data : [];
      setStudents(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch students. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingStudent) {
        await axios.put(`${API_URL}/students/${editingStudent._id}`, formData);
        setEditingStudent(null);
      } else {
        await axios.post(`${API_URL}/students`, formData);
      }
      fetchStudents();
    } catch (err) {
      setError("Failed to save student. Check all fields are correct.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await axios.delete(`${API_URL}/students/${id}`);
      fetchStudents();
    } catch (err) {
      setError("Failed to delete student.");
    }
  };

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <p className="subtitle">Manage student records</p>
      {error && <div className="error-msg">{error}</div>}
      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        onCancelEdit={() => setEditingStudent(null)}
      />
      <StudentList
        students={students}
        loading={loading}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
