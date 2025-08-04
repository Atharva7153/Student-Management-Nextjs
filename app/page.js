  "use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading students...</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Student Directory
            <span className="hero-subtitle">Discover amazing students</span>
          </h1>
          <p className="hero-description">
            Explore our collection of talented students and learn about their skills, hobbies, and personalities.
          </p>
          
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search students by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="students-section">
        <div className="section-header">
          <h2>All Students ({filteredStudents.length})</h2>
          {searchTerm && (
            <p className="search-results">
              {`Showing results for "${searchTerm}"`}
            </p>
          )}
        </div>

        {filteredStudents.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">👥</div>
            <h3>No students found</h3>
            <p>
              {searchTerm 
                ? `No students match "${searchTerm}". Try a different search term.`
                : "No students available at the moment."
              }
            </p>
          </div>
        ) : (
          <div className="students-grid">
            {filteredStudents.map((student, index) => (
              <Link 
                key={student.name} 
                href={`/students/${student.name}`}
                className="student-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="student-card-header">
                  <div className="student-avatar">
                    <span>{student.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="student-info">
                    <h3 className="student-name">{student.name}</h3>
                    <p className="student-age">{student.age} years old</p>
                  </div>
                </div>
                
                <div className="student-card-content">
                  <div className="student-detail">
                    <span className="detail-label">Hobby</span>
                    <span className="detail-value">{student.hobby}</span>
                  </div>
                  
                  {student.city && (
                    <div className="student-detail">
                      <span className="detail-label">City</span>
                      <span className="detail-value">{student.city}</span>
                    </div>
                  )}
                  
                  {student.profession && (
                    <div className="student-detail">
                      <span className="detail-label">Profession</span>
                      <span className="detail-value">{student.profession}</span>
                    </div>
                  )}
                </div>

                {student.skills && student.skills.length > 0 && (
                  <div className="student-skills">
                    <div className="skills-preview">
                      {student.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                      {student.skills.length > 3 && (
                        <span className="skill-pill more-skills">
                          +{student.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="student-card-footer">
                  <span className="view-profile">
                    View Profile
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
