"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StudentPage() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Assume you get student name from route params (adjust as needed)
    const name = window.location.pathname.split("/").pop();
    fetch(`/api/students/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container" style={{ maxWidth: 500, minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        className="student"
        style={{
          width: "100%",
          padding: "32px 24px",
          borderRadius: "18px",
          background: "linear-gradient(120deg, #6366f1 0%, #818cf8 100%)",
          boxShadow: "0 4px 16px rgba(60, 60, 120, 0.10)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px"
        }}
      >
        {loading ? (
          <h2 style={{ color: "#fff" }}>Loading...</h2>
        ) : student ? (
          <>
            <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 700, margin: 0 }}>{student.name}</h1>
            <p style={{ color: "#e0e7ff", fontSize: "1.1rem", margin: "12px 0" }}>
              {/* Add more student details here if available */}
              Age: {student.age}<br />
              Grade: {student.grade}
            </p>
            <Link className="ok" href="/" style={{ marginTop: "18px" }}>
              ← Back to Students
            </Link>
          </>
        ) : (
          <h2 style={{ color: "#fff" }}>Student not found.</h2>
        )}
      </div>
    </div>
  );
}
