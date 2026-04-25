import { useState, useEffect } from "react";

function StudentForm({ onSubmit, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    // TODO (Task 2): Add new fields here
    // course: "",
    // isActive: true,
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        email: editingStudent.email || "",
        age: editingStudent.age || "",
        // TODO (Task 2): Populate new fields when editing
        // course: editingStudent.course || "",
        // isActive: editingStudent.isActive ?? true,
      });
    } else {
      setFormData({ name: "", email: "", age: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editingStudent) setFormData({ name: "", email: "", age: "" });
  };

  return (
    <div className="form-card">
      <h2>{editingStudent ? "Edit Student" : "Add New Student"}</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Age *</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age (16-60)"
            min="16"
            max="60"
            required
          />
        </div>

        {/* TODO (Task 2): Add course dropdown and isActive checkbox here */}
        {/* HINT - course dropdown:
          <div className="form-group">
            <label>Course *</label>
            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="">Select a course</option>
              <option value="IT">Information Technology</option>
              <option value="CS">Computer Science</option>
              <option value="SE">Software Engineering</option>
              <option value="DS">Data Science</option>
            </select>
          </div>

          HINT - isActive checkbox:
          <div className="checkbox-group">
            <input type="checkbox" name="isActive" id="isActive"
              checked={formData.isActive} onChange={handleChange} />
            <label htmlFor="isActive">Active Student</label>
          </div>
        */}

        <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
          <button type="submit" className="btn btn-primary">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
          {editingStudent && (
            <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
