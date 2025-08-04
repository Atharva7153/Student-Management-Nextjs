"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page ({ params }) {
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

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading student details...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="error-container">
        <h2>Student not found</h2>
        <p>The student youre looking for doesn't exist.</p>
        <Link href="/" className="back-button">
          ← Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="student-detail-container">
      <div className="student-detail-card">
        {/* Header Section */}
        <div className="student-header">
          <div className="student-avatar">
            <span>{student.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="student-title">
            <h1>{student.name}</h1>
            <p className="student-subtitle">{student.profession || "Student"}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="student-content">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">🎂</div>
              <div className="info-content">
                <label>Age</label>
                <span>{student.age} years old</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏙️</div>
              <div className="info-content">
                <label>City</label>
                <span>{student.city || "Not specified"}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🎯</div>
              <div className="info-content">
                <label>Hobby</label>
                <span>{student.hobby}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💻</div>
              <div className="info-content">
                <label>Favorite Language</label>
                <span>{student.favouriteLanguage || "Not specified"}</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌟</div>
              <div className="info-content">
                <label>Personality</label>
                <span>{student.personality || "Not specified"}</span>
              </div>
            </div>

            <div className="info-item skills-item">
              <div className="info-icon">🛠️</div>
              <div className="info-content">
                <label>Skills</label>
                <div className="skills-tags">
                  {student.skills?.length ? (
                    student.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="no-skills">No skills listed</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          {student.bio && (
            <div className="bio-section">
              <h3>About</h3>
              <p>{student.bio}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="student-footer">
          <Link href="/" className="back-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
