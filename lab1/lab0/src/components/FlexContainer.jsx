import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useReducer} from 'react';
import AppReducer from '../data/AppReducer'

function FlexContainer({ element: PersonProfile, data }) {
    const [items, dispatch] = useReducer(AppReducer, data);
    return (
        <div className="container">
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col-12 col-md-4 mb-3">
                        <PersonProfile 
                            {...item} 
                            onEdit={() => dispatch({ type: "edit", id: item.id })} 
                            onDelete={() => dispatch({ type: "delete", id: item.id })} 
                            onRate={() => dispatch({ type: "rate", id: item.id })} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlexContainer;