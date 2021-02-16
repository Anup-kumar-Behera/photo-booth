import React from 'react'

const Navbar = () => {
    return (
        <div>
           <div className="dropup">
                <a href="#" className="dropbtn"><span className="material-icons">more_vert</span></a>
                <div className="dropup-content">
                    <a href="#"><span className="material-icons">download</span></a>
                    <a href="#"><span className="material-icons">delete</span></a>
                    <a href="#"><span className="material-icons">info</span></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar