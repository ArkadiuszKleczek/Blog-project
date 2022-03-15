import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('Code wars');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, topic };

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Blog topic:</label>
                <select value={topic} onChange={(e) => setTopic(e.target.value)}
                >
                    <option value="Code wars"> Code wars </option>
                    <option value="Personal Development"> Personal development </option>
                    <option value="Programming"> Programming </option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;