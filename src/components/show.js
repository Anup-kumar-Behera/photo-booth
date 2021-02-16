import React, { Component, useRef} from 'react'
import Webcam from 'react-webcam'
import {SRLWrapper} from 'simple-react-lightbox'
import Navbar from './navbar'
import Geolocation from './Geolocation'
import Modal from 'react-modal'
class Show extends Component {
    constructor(props){
        super(props);

        this.state = {
            imgSrc : [],
            count: false,
            modalIsOpen: false,
            facingMode: "user"
        }
        this.webcamRef = null;
        this.setRef = (prop) => {
            this.webcamRef = prop
        }
    };
    count = 0

    capture = () => {
        const img = this.webcamRef.getScreenshot()
        this.setState(prevState => {return (
            {imgSrc:[...prevState.imgSrc, {img:img,date : new Date(), deviceId:MediaDeviceInfo.deviceId}]}
        )})
    }
    forceUpdateHandler(){
        this.forceUpdate();
    }
    remove = (image) => {
        this.state.imgSrc.splice(this.state.imgSrc.indexOf(image), 1)
        this.forceUpdateHandler()
    }
    modes = () =>{
        this.state.count?  (this.setState({facingMode:"user", count:false})) : (this.setState({facingMode:{ exact: "environment" }, count : true}))
              
        console.log(this.state.count)
        console.log(this.state.facingMode)
    }
   
    // info = (image) => (<div><Modal_comp /></div>)
    handleModal = (prop) => {
        this.setState({isModalOpen:true})
        console.log("date",prop.date)
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Webcam 
                    audio={false}
                    ref={this.setRef}
                    height={400}
                    width={500}
                    facingmode={this.state.facingMode}
                    videoConstraints = {{
                        facingMode: this.state.facingMode
                    }}
                    screenshotFormat="image/jpeg"/>
                </div>
                <div className="d-flex justify-content-center">
                    <a className="waves-effect waves-light btn-small b1" onClick={this.modes}><span class="material-icons" style = {{marginTop:"4px"}}>cached</span></a>
                    <p className="space"></p>
                    <a className="waves-effect waves-light btn-small b1" onClick={this.capture}><span class="material-icons" style = {{marginTop:"4px"}}>camera_enhance</span></a>
                </div>

                <SRLWrapper>
                    <div className="flex-container scrollbar">
                        {
                            this.state.imgSrc.map((image, index) => (
                                <div className="show-image" key={index}>
                                    <a href={image.img}><img src={image.img} className="rounded img border border-info" alt = ""/></a>
                                    
                                    <div className="dropup">
                                        <a href="#" className="dropbtn"><span class="material-icons">more_vert</span></a>
                                        <div className="dropup-content">
                                            <a href={image.img} download="image 101"><span className="material-icons">download</span></a>
                                            <a href="#" onClick={() => this.remove(image)}><span className="material-icons">delete</span></a>
                                            <a href="#" onClick={() => this.handleModal(image)}><span className="material-icons">info</span></a>
                                            <div className="d-flex mx-auto">
                                                <Modal isOpen={this.state.isModalOpen} 
                                                shouldCloseOnOverlayClick={true} 
                                                onRequestClose={() => this.setState({isModalOpen:false})}
                                                style={{
                                                    content:{
                                                        color:'white'
                                                    }
                                                }}
                                                className="modal-content"
                                                >
                                                    <h5>Date & time:
                                                        {this.state.imgSrc.date}
                                                        </h5>
                                                    <h5>Location: </h5>
                                                    <h5>Ip Address: </h5>
                                                    <h5>Device Id: </h5>
                                                    <h5>Geolocation:  </h5>
                                                    <button onClick={() => this.setState({isModalOpen:false})}>Close</button>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </SRLWrapper>
                
            </div>
        )
    }
}
export default Show