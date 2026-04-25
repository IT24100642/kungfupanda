function StudentList({ students, loading, onEdit, onDelete }) {
  if (loading) return <div className="loading">Loading students...</div>;
  if (students.length === 0) {
    return <div className="empty-state">No students yet. Add your first student above!</div>;
  }

  return (
    <div>
      <h2>All Students <span className="count-badge">{students.length}</span></h2>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <h3>{student.name}</h3>
            <p className="email">{student.email}</p>
            <p className="meta">Age: {student.age}</p>

            {/* TODO (Task 2): Display course and isActive below */}
            {/* HINT:
              {student.course && <p className="meta">Course: {student.course}</p>}
              <span className={`status-badge ${student.isActive ? "active" : "inactive"}`}>
                {student.isActive ? "Active" : "Inactive"}
              </span>
            */}

            <div className="student-actions">
              <button className="btn btn-warning btn-sm" onClick={() => onEdit(student)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(student._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
