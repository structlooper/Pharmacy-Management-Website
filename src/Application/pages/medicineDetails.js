import React from 'react';
import { useParams } from 'react-router-dom';
import OurPlans from "../components/ourPlans";
import ImageWithSideIconContents from "../components/imageWithSideIconContents";
import {FaMoneyBill, FaPrescription} from "react-icons/fa";

const MedicineDetails = () => {
    const { suggestion } = useParams();

    const BadgeTitleContent = ({ title, points }) => {
        return  <div className={"mt-4"}>
            <h6 style={{ color:'#808080', fontSize:15 }}>{title}</h6>
            <div className="row">
                {
                    points.map((point,index) =>  <div key={index} className="col-auto mt-2">
                        <div className="p-badge text-center maroon">
                            {point}
                        </div>
                    </div>)
                }

            </div>



        </div>
    }
    return (
        <div>
            <div className="container p-lg-5 pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h2 className={"maroon"}>{suggestion}</h2>
                        <div className="row">
                            <div className="col-auto">
                                <p>
                                    <FaPrescription size={30} color={'#FF6666'} style={{ borderRadius:100, backgroundColor:'#FBE8E7', padding:"2%" }} />
                                    <span style={{ fontSize:15 }} className={"text-muted"}> Prescription Required</span>
                                </p>
                            </div>
                            <div className="col-auto">
                                <p>
                                    <FaMoneyBill size={30} color={'#FF6666'} style={{ borderRadius:100, backgroundColor:'#FBE8E7', padding:"2%" }} />
                                    <span style={{ fontSize:15 }} className={"text-muted"}> Included with $5 Copay</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-auto mt-3">
                                <img src={require('../asserts/medine.png')} alt="medicine " height={200} width={150} className={"img-fluid"}/>
                            </div>
                            <div className="col-lg-7">
                                <div className="border rounded p-3">
                                    <h5 className={"maroon"}>Why does my medication look different?</h5>
                                    <p className={"mt-2 text-muted"}>
                                       Product images are for illustrative purposes only. We can not guarantee a specific manufacturer when you place an order. The medication you receive may look different but the drug, strength, and ingredients are the same.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 pt-5 pt-lg-0 pt-md-0">
                        <div className="card shadow p-4 py-5">
                            <h4 className={"maroon"}>
                                {suggestion}
                            </h4>

                            <ul className="horizontal-list mb-0">
                                <li>Tablet</li>
                                <li>•</li>
                                <li>100 mg</li>
                                <li>•</li>
                                <li>30 count</li>
                            </ul>

                            <hr className={"mb-0"}/>
                            <BadgeTitleContent title={"From"} points={[
                                'Tablet'
                            ]} />
                            <BadgeTitleContent title={"Strength"} points={[
                                '25mg',
                                '50mg',
                                '100mg'
                            ]} />
                            <BadgeTitleContent title={"Count"} points={[
                                '30 Count',
                                '60 Count',
                                '90 Count'
                            ]} />

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container pt-3">
                <OurPlans />
            </div>
            <div className={"mt-5 py-4"}  style={{backgroundColor: '#FEE7E7'}}>
            <div className="container">
                <ImageWithSideIconContents
                    heading={"<h1 class='maroon'>Affordable medication is your right</h1>"}
                    ImageData={{
                        url: require('../asserts/sideImage.png'),
                        alert: "Side image medication",
                    }}
                    contentListing={1}
                    pointsArray={[
                        'Find and afford the drugs you need',
                        'Know what your medication costs',
                        'Schedule an appointment with a doctor'
                    ]}
                    addClass={""}
                />
            </div>
            </div>
        </div>
    );
};

export default MedicineDetails;
