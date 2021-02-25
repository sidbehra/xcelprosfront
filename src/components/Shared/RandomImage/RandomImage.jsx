import React, { Component } from 'react'
import './RandomImage.css'
export class RandomImage extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            images : [
                'https://randomuser.me/api/portraits/women/65.jpg',
                'https://randomuser.me/api/portraits/men/3.jpg',
                'https://randomuser.me/api/portraits/men/59.jpg',
                'https://randomuser.me/api/portraits/men/65.jpg',
                'https://randomuser.me/api/portraits/women/56.jpg',
                'https://randomuser.me/api/portraits/men/31.jpg',
                'https://randomuser.me/api/portraits/men/20.jpg',
                'https://randomuser.me/api/portraits/women/24.jpg',
                'https://randomuser.me/api/portraits/men/70.jpg'
            ]
        }
    }
    render() {

        let imageIndex = Math.floor(Math.random() * 6) + 1 
        return (
            <div>
                <img src={this.state.images[imageIndex]} className="profile-picture" alt=""/>
            </div>
        )
    }
}

export default RandomImage
