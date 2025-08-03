"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <h1>Hola</h1>
      </div>
      <div className="data">
        {students.map((student) => (
          <div className="student">
            <h1>
              <Link className="ok" href={`/students/${student.name}`}>{student.name}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
