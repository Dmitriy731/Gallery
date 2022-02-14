import React from 'react'

import './gallery.css'

const Gallery = ({gallery, loading, author, location}) => {
    
    if(loading) {
        return <h2>loading...</h2>
    }

        
        return (
            <div className="gallery">
                <div className="gallery__flex">
                    {gallery.map((item, i) => (
                        <div key={i} className="gallery__picture">
                            <div className="gallery__picture-img">
                                <img src={`https://test-front.framework.team/${item.imageUrl}`} alt={item.name}/>
                            </div>
                            <div className="gallery__picture-descr">
                                <div className="gallery__picture-title">{item.name}</div>
                                <div className="gallery__picture-information">Author: <span>{author.map ((author) => 
                                    `${(author.id === item.authorId) ? author.name:''}`
                                )}</span>
                                </div>
                                <div className="gallery__picture-information">Created: <span>{item.created}</span></div>
                                <div className="gallery__picture-information">Location: <span>{location.map ((location) => (
                                    `${(location.id === item.locationId) ? location.location:""}`
                                ))}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

export default Gallery