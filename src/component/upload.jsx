import React, { useState } from 'react';
import '../style/modal.css';

export default function NewUpload() {
    const [showModal, setShowModal] = useState(false);
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [category, setCategory] = useState('');
    const [academicYear, setAcademicYear] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null); // For thumbnail upload
    const [pdf, setPdf] = useState(null); // For PDF upload

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('university', university);
        formData.append('course', course);
        formData.append('category', category);
        formData.append('academicYear', academicYear);
        formData.append('description', description);
        formData.append('thumbnail', thumbnail); // Add thumbnail to formData
        formData.append('pdf', pdf); // Add PDF document to formData

        // Simulate form submission (You would send this data to your server here)
        console.log('Form Data:', {
            university,
            course,
            category,
            academicYear,
            description,
            thumbnail,
            pdf,
        });

        closeModal();
    };

    // Mock data for universities and courses
    const universities = [
        'K.R. Mangalam University',
        'Delhi University',
        'IIT Bombay',
        'IIT Delhi',
        'NIT Trichy',
        'Manipal University',
        'BITS Pilani'
    ];

    const courses = [
        'Computer Science',
        'Mechanical Engineering',
        'Civil Engineering',
        'Electronics and Communication',
        'Physical Education',
        'Business Management'
    ];

    return (
        <div className="new-upload-container">
            {/* New Upload Button */}
            <button className="new-upload-button" onClick={openModal}>
                + New Upload
            </button>

            {/* Modal */}
            {showModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <h2>Upload New File</h2>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* University Dropdown */}
                            <div className="form-group">
                                <label htmlFor="university">University</label>
                                <select
                                    id="university"
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    required
                                >
                                    <option value="">Please select a university</option>
                                    {universities.map((uni, index) => (
                                        <option key={index} value={uni}>
                                            {uni}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Course Dropdown */}
                            <div className="form-group">
                                <label htmlFor="course">Course</label>
                                <select
                                    id="course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    required
                                >
                                    <option value="">Please select a course</option>
                                    {courses.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Dropdown */}
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Please select a category</option>
                                    <option value="Assignments">Assignments</option>
                                    <option value="Lecture Notes">Lecture Notes</option>
                                    <option value="Research Papers">Research Papers</option>
                                </select>
                            </div>

                            {/* Academic Year Dropdown */}
                            <div className="form-group">
                                <label htmlFor="academicYear">Academic Year</label>
                                <select
                                    id="academicYear"
                                    value={academicYear}
                                    onChange={(e) => setAcademicYear(e.target.value)}
                                    required
                                >
                                    <option value="">Please select</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>

                            {/* Description Textarea */}
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Please give as much additional information as possible."
                                    rows="4"
                                    className='description'
                                    required
                                />
                            </div>

                            {/* Thumbnail Upload */}
                            <div className="form-group">
                                <label htmlFor="thumbnail">Upload Thumbnail</label>
                                <input
                                    type="file"
                                    id="thumbnail"
                                    accept="image/*"
                                    onChange={(e) => setThumbnail(e.target.files[0])}
                                    required
                                    className='file-upload'
                                />
                            </div>

                            {/* PDF Upload */}
                            <div className="form-group">
                                <label htmlFor="pdf">Upload PDF Document</label>
                                <input
                                    type="file"
                                    id="pdf"
                                    accept="application/pdf"
                                    onChange={(e) => setPdf(e.target.files[0])}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="submit-button">
                                Upload
                            </button>
                        </form>

                        {/* Close Modal Button */}
                        <button className="close-modal" onClick={closeModal}>
                            ❌
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
