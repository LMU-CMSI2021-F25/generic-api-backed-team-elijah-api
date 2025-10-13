export default function Toolbar({ departments, dept, setDept, children }) {
    return (
      <div className="toolbar">
        <select
          className="select"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          aria-label="Filter by department"
        >
          <option value="all">All Departments</option>
          {departments.map((d) => (
            <option key={d.departmentId} value={String(d.departmentId)}>
              {d.displayName}
            </option>
          ))}
        </select>
        {children}
      </div>
    );
  }
  