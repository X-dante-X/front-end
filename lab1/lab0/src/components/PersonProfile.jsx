import React, { useState } from 'react';
import './PersonProfile.css';
import RatingBar from './RatingBar';

function PersonProfile({ id, name, birth, eyes, rating, onEdit, onDelete, onRate }) {

    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-id">ID: {id}</p>
            <p className="profile-birth">Birth Date: {birth}</p>
            <p className="profile-eyes">Eye Color: {eyes}</p>
            <RatingBar rate={rating} />
            <div className="profile-actions">
                <button onClick={() => onEdit(id)} className="btn btn-primary">Edit</button>
                <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
                <button onClick={() => onRate(id)} className="btn btn-warning">Rate</button>
            </div>
        </div>
    );
}

export default PersonProfile;