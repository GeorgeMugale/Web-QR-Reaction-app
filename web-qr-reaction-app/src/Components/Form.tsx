import React, { useState } from "react";
import "./FormComponent.css"; // Import the CSS file

interface FormData {
    name: string;
    post: string;
    timeToLive: string;
    favoriteColor: string;
    picture: File | null;
}

interface FormComponentProps {
    onSubmit: (data: FormData) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        post: "",
        timeToLive: "30 minutes",
        favoriteColor: "primary", // Default color
        picture: null,
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFormData({ ...formData, picture: event.target.files[0] });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleColorSelect = (color: string) => {
        setFormData({ ...formData, favoriteColor: color });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label className="form-label">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
            />

            <label className="form-label">Post:</label>
            <textarea
                name="post"
                value={formData.post}
                onChange={handleChange}
                className="form-textarea"
            ></textarea>

            <label className="form-label">Time to Live:</label>
            <select
                name="timeToLive"
                value={formData.timeToLive}
                onChange={handleChange}
                className="form-select"
            >
                <option value="30 minutes">30 minutes</option>
                <option value="1 hour">1 hour</option>
                <option value="2 hours">2 hours</option>
            </select>

            <label className="form-label">Profile Picture:</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-file-input"
            />

            <label className="form-label">Favorite Color:</label>
            {["primary", "warning", "danger", "success"].map((color) => (
                <div key={color} className="form-color-option">
                    <input
                        type="radio"
                        id={color}
                        name="favoriteColor"
                        value={color}
                        checked={formData.favoriteColor === color}
                        onChange={() => handleColorSelect(color)}
                        className="form-radio-input"
                    />
                    <label htmlFor={color} className="form-radio-label">
                        {color}
                    </label>
                </div>
            ))}

            <button type="submit" className="form-button">
                Submit
            </button>
        </form>
    );
};

export default FormComponent;

