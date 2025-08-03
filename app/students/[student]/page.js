"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
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

  let student = students.find((s) => s.name === params.student);
  return (
    <div
      className="container"
      style={{
        maxWidth: 500,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="student animated-gradient"
        style={{
          width: "100%",
          padding: "32px 24px",
          borderRadius: "18px",
          background:
            "linear-gradient(270deg, #06b6d4, #14b8a6, #0ea5e9, #06b6d4)",
          backgroundSize: "600% 600%",
          boxShadow: "0 4px 16px rgba(6, 182, 212, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
          animation: "gradientMove 6s ease-in-out infinite",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: 700,
            margin: 0,
            animation: "scalePulse 2s infinite",
            letterSpacing: "2px",
          }}
        >
          Student Details
        </h1>
        <p
          style={{
            color: "#e0f2fe",
            fontSize: "1.1rem",
            margin: "12px 0",
          }}
        >
          Name: {student ? student.name : "Loading..."}
          <br />
          Age: {student ? student.age : "Loading..."}
          <br />
          Hobby: {student ? student.hobby : "Loading..."}
        </p>
        <Link
          className="ok"
          href={"/"}
          style={{
            marginTop: "18px",
            background: "#0ea5e9",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "8px",
            fontWeight: 500,
            boxShadow: "0 2px 8px rgba(6,182,212,0.07)",
            transition: "background 0.18s, color 0.18s",
            textDecoration: "none",
          }}
        >
          ← Back to Students
        </Link>
      </div>
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes scalePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.07);
          }
        }
      `}</style>
    </div>
  );
};

export default page;


