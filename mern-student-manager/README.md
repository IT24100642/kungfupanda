# MERN Student Manager — Lab Test 4 (Vite)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://your-vercel-url.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Railway-purple?logo=railway)](https://your-railway-url.up.railway.app)

## Student Details
- **Name:** Your Name
- **Student ID:** Your ID

## Project Structure
```
mern-student-manager/
├── backend/
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── StudentForm.jsx
    │   │   └── StudentList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Local Setup

### Backend
```bash
cd backend && npm install
cp .env.example .env
# Add MONGO_URI to .env
npm run dev
```

### Frontend
```bash
cd frontend && npm install
cp .env.example .env
npm run dev
# Runs at http://localhost:5173
```

## Vercel Deployment Settings
| Field | Value |
|---|---|
| Root Directory | mern-student-manager/frontend |
| Framework | Vite |
| Build Command | npm run build |
| Output Directory | dist |
| Env Variable | VITE_API_URL = your-backend-url/api |

✅ Step 1 — Add new fields in Backend (Model)

In your backend/models/Student.js, add fields like this:

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  age: { type: Number, required: true, min: 16, max: 60 },

  // ✅ NEW FIELDS
  course: {
    type: String,
    required: [true, "Course is required"]
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
✅ Step 2 — Update API (Routes)

Go to backend/routes/studentRoutes.js

Make sure POST & PUT accept new fields:

const { name, email, age, course, isActive } = req.body;

const student = new Student({
  name,
  email,
  age,
  course,
  isActive
});

👉 Same for update route.

✅ Step 3 — Update Frontend Form (IMPORTANT 🔥)

Go to:

frontend/src/components/StudentForm.jsx
1. Add state
const [course, setCourse] = useState("");
const [isActive, setIsActive] = useState(true);
2. Add input fields in form
<input
  type="text"
  placeholder="Enter course"
  value={course}
  onChange={(e) => setCourse(e.target.value)}
  required
/>

<select
  value={isActive}
  onChange={(e) => setIsActive(e.target.value === "true")}
>
  <option value="true">Active</option>
  <option value="false">Inactive</option>
</select>
3. Send data to backend

Inside your submit function:

const newStudent = {
  name,
  email,
  age,
  course,
  isActive
};
✅ Step 4 — Show fields in UI

Go to:

StudentList.jsx

Add:

<p>Course: {student.course}</p>
<p>Status: {student.isActive ? "Active" : "Inactive"}</p>
⚠️ WHY YOUR UI DIDN’T CHANGE

Because:

❌ React form still has only 3 inputs
❌ API not sending new fields
❌ UI not displaying new fields

👉 Backend alone is not enough in MERN

🚀 Bonus (OnClick Add Field Dynamically)

If you want button → add new input field dynamically, do this:

const [extraFields, setExtraFields] = useState([]);

const addField = () => {
  setExtraFields([...extraFields, ""]);
};
Button:
<button onClick={addField}>Add Field</button>
Render dynamically:
{extraFields.map((field, index) => (
  <input
    key={index}
    type="text"
    placeholder={`Extra Field ${index + 1}`}
  />
))}
