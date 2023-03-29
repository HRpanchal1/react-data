
import React from 'react';
import CustomCard from "./04CompoForCard"
import prod4 from './prod4.webp';
const PropsInClassCompo = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="Osaka OS 550 Tripod 55 Inches (140 cm) with Mobile Holder" imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="Dyazo Height and Angle Adjustable Tripod" imgSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61MIObPPyeL._AC_UL320_.jpg" />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="insta360 ONE X2 Action Camera|5.7k 360 Capture" imgSrc={process.env.PUBLIC_URL + '/prod3.webp'} />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="Zhiyun Smooth Q3, 3-Axis Handheld Smartphone Gimbal" imgSrc={prod4} />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="insta360 ONE RS Twin Edition Waterproof Optical Zoom" imgSrc={window.location.origin + '/prod3.webp'} />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="SJCAM C200 Action Camera 4K 24FPS Optical 16MP " />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <CustomCard prodTitle="Zhiyun 3 Axis Camera stabilizer - weebill s CR110 Camera Stand" />
                </div>
            </div>
            {/* <div className="card">
                <div className="card-header">Something</div>
                <div className="card-body">Something</div>
            </div> */}
        </>
    );
};

export default PropsInClassCompo;