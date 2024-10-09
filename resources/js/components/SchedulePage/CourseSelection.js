import React, { useState, useEffect } from "react";
import "../../../sass/components/_courseSelection.scss";

export default function CourseSelection() {
  const [students, setStudents] = useState([]); // List of students
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [filteredStudents, setFilteredStudents] = useState([]); // Filtered student list based on search query
  const [selectedStudent, setSelectedStudent] = useState(null); // Selected student
  const [courses, setCourses] = useState([]); // List of available courses
  const [selectedCourse, setSelectedCourse] = useState(""); // Selected course
  const [availableSubjects, setAvailableSubjects] = useState([]); // Subjects for selected course
  const [selectedSubjects, setSelectedSubjects] = useState([]); // Selected subjects and their available schedule
  const [loading, setLoading] = useState(false); // Loading state

  // Mock student data (replace with actual data fetch)
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const mockStudents = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
          { id: 3, name: "Alice Johnson" },
          { id: 4, name: "Bob Brown" },
        ];
        setStudents(mockStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Mock course data (replace with actual API call)
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const mockCourses = [
          { id: 1, name: "Computer Science" },
          { id: 2, name: "Business Management" },
          { id: 3, name: "Mechanical Engineering" },
        ];
        setCourses(mockCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Mock subjects and available schedules based on course (replace with actual data fetching logic)
  useEffect(() => {
    if (selectedCourse === "Computer Science") {
      setAvailableSubjects([
        { id: 1, name: "Data Structures", availableSchedules: ["Mon 8:00 AM - 10:00 AM", "Wed 1:00 PM - 3:00 PM"] },
        { id: 2, name: "Algorithms", availableSchedules: ["Tue 10:00 AM - 12:00 PM", "Thu 3:00 PM - 5:00 PM"] },
        { id: 3, name: "Operating Systems", availableSchedules: ["Mon 1:00 PM - 3:00 PM", "Fri 8:00 AM - 10:00 AM"] },
      ]);
    } else if (selectedCourse === "Business Management") {
      setAvailableSubjects([
        { id: 4, name: "Accounting", availableSchedules: ["Mon 9:00 AM - 11:00 AM", "Thu 2:00 PM - 4:00 PM"] },
        { id: 5, name: "Marketing", availableSchedules: ["Wed 8:00 AM - 10:00 AM", "Fri 1:00 PM - 3:00 PM"] },
        { id: 6, name: "Management", availableSchedules: ["Tue 1:00 PM - 3:00 PM", "Thu 8:00 AM - 10:00 AM"] },
      ]);
    } else if (selectedCourse === "Mechanical Engineering") {
      setAvailableSubjects([
        { id: 7, name: "Thermodynamics", availableSchedules: ["Mon 10:00 AM - 12:00 PM", "Wed 2:00 PM - 4:00 PM"] },
        { id: 8, name: "Fluid Mechanics", availableSchedules: ["Tue 9:00 AM - 11:00 AM", "Fri 10:00 AM - 12:00 PM"] },
        { id: 9, name: "Machine Design", availableSchedules: ["Mon 3:00 PM - 5:00 PM", "Thu 9:00 AM - 11:00 AM"] },
      ]);
    } else {
      setAvailableSubjects([]);
    }
  }, [selectedCourse]);

  // Filter students based on search query
  useEffect(() => {
    const results = students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(results);
  }, [searchQuery, students]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSubjects([]); // Reset selected subjects when course changes
  };

  const handleAddSubject = () => {
    setSelectedSubjects([
      ...selectedSubjects,
      { subject: "", schedule: "" }, // Add empty subject and schedule input
    ]);
  };

  const handleSubjectChange = (index, subjectId) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index].subject = subjectId;
    setSelectedSubjects(updatedSubjects);
  };

  const handleScheduleChange = (index, schedule) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index].schedule = schedule;
    setSelectedSubjects(updatedSubjects);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects.splice(index, 1);
    setSelectedSubjects(updatedSubjects);
  };

  const handleAssign = () => {
    if (selectedStudent && selectedCourse && selectedSubjects.length > 0) {
      // Perform the assignment logic here (e.g., send data to backend)
      const assignments = selectedSubjects.map(
        (subject) =>
          `Assigned ${subject.subject} with ${subject.schedule} schedule to ${selectedStudent.name} in ${selectedCourse}.`
      );
      alert(assignments.join("\n"));
      // Reset after assignment
      setSelectedStudent(null);
      setSelectedCourse("");
      setSelectedSubjects([]);
    } else {
      alert("Please select a student, course, and subjects with schedules.");
    }
  };

  return (
    <div className="course-selection-container">
      <h3>Assign Student to Course and Subjects</h3>

      {/* Search Bar */}
      <div className="search-bar">
        <label htmlFor="studentSearch">Search for Student:</label>
        <input
          type="text"
          id="studentSearch"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by student name..."
        />
      </div>

      {/* Display filtered students */}
      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className={`student-item ${selectedStudent?.id === student.id ? "selected" : ""}`}
              onClick={() => handleSelectStudent(student)}
            >
              {student.name}
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>

      {/* Selected student and course selection */}
      {selectedStudent && (
        <div className="assignment-form">
          <h4>Selected Student: {selectedStudent.name}</h4>

          {/* Course Selection */}
          <div>
            <label>Select Course:</label>
            <select value={selectedCourse} onChange={handleCourseChange}>
              <option value="">-- Select a Course --</option>
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Selection with Available Schedules */}
          {selectedCourse && (
            <div>
              <h4>Subjects and Available Schedules</h4>
              {selectedSubjects.map((subject, index) => (
                <div key={index} className="subject-schedule-row">
                  {/* Subject Selection */}
                  <select
                    value={subject.subject}
                    onChange={(e) => handleSubjectChange(index, e.target.value)}
                  >
                    <option value="">-- Select a Subject --</option>
                    {availableSubjects.map((subj) => (
                      <option key={subj.id} value={subj.name}>
                        {subj.name}
                      </option>
                    ))}
                  </select>

                  {/* Schedule Selection */}
                  <select
                    value={subject.schedule}
                    onChange={(e) => handleScheduleChange(index, e.target.value)}
                  >
                    <option value="">-- Select Schedule --</option>
                    {availableSubjects
                      .find((subj) => subj.name === subject.subject)
                      ?.availableSchedules.map((schedule, idx) => (
                        <option key={idx} value={schedule}>
                          {schedule}
                        </option>
                      ))}
                  </select>

                  <button onClick={() => handleRemoveSubject(index)}>Remove</button>
                </div>
              ))}

              {/* Button to add more subjects */}
              <button onClick={handleAddSubject}>Add Subject</button>
            </div>
          )}

          <button onClick={handleAssign}>Assign</button>
        </div>
      )}

      {loading && <div className="loading-screen">Loading...</div>}
    </div>
  );
}
