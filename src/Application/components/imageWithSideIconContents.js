import React from 'react';
import {FaCheckCircle, FaStar} from "react-icons/fa";
import {isNotNull} from "../utils/globalFunctions";

const ImageWithSideIconContents = ({ headingHighlight=null, heading=null, content=null, ImageData=null, contentListing=0, addClass = "mt-5", pointsArray = [] }) => {
    return <div className={"row align-items-center px-0 pt-2 pt-lg-0 pt-md-0 "+addClass}>


        <div className="col-lg-6 hero-section-1-custom  my-2">
            {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
            {isNotNull(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} /> }
            {isNotNull(content) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} /> }

            <div className="my-4">
                {
                    pointsArray.map((point,index) =>   <p key={index}>
                        <FaCheckCircle size={20} className={"ltn-maroon"} />  &nbsp;&nbsp;{point}
                    </p>)
                }
            </div>


            <a href={"#plans"} className=" me-2 me-lg-0 btn btn-maroon mt-2 mt-lg-0 p-2-5">Get Started</a>
        </div>
        <div className={"col-lg-6 py-3 my-auto d-flex justify-content-start "+(contentListing == 1 && "order-lg-first")}>
            {isNotNull(ImageData) && <img src={ImageData.url} alt={ImageData.altText} height="500" width="550" className="img-fluid" style={{ borderRadius:10 }} />}
        </div>
    </div>
};

export default ImageWithSideIconContents;
