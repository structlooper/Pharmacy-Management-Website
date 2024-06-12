import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import OurPlans from "../components/ourPlans";
import ImageWithSideIconContents from "../components/imageWithSideIconContents";
import {FaMoneyBill, FaPrescription} from "react-icons/fa";
import localMedicationList from "../utils/localMedicationList";

const MedicineDetails = () => {
    const { suggestion } = useParams();
    const [medDetails, setMedDetails] = useState(null);
    const [includedPlan, setIncludedPlan] = useState(null);

    React.useEffect(() => {
        getMedicationNameByThirdPartyApi().then(res => getMedicationFromThirdPartyApi(res).then(final => {
            setMedDetails(final)
            setIncludedPlan(localMedicationList.find(localMed => localMed['Representative Product SKU'] === final[0].ndc))
        }))
    },[])



    const getMedicationNameByThirdPartyApi = () => {
        return new Promise(resolve => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };

              fetch("https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main?ndc="+suggestion, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    resolve(result.results[0].medication_name);
                })
                .catch((error) => {
                    console.error(error)
                    resolve(null);
                });
        })

    }

    const getMedicationFromThirdPartyApi = (medNameByNDC) => {
        return new Promise(resolve => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch("https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main?medication_name="+medNameByNDC, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log("medications", result)
                    resolve(result.results);
                })
                .catch((error) => {
                    console.error(error)
                    resolve(null);
                });
        })

    }

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

    if (medDetails === null)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <h1>loading...</h1>
            </div>
        );

    return (
        <div>
            <div className="container p-lg-5 pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h2 className={"maroon"}>{medDetails[0].medication_name}</h2>
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
                                    <span style={{ fontSize:15 }} className={"text-muted"}> Included with {(includedPlan !== null && includedPlan !== undefined) && includedPlan['plans included'] === '5$,10$' ? '$5 and $10 Copay' : '$5 Copay'}</span>
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
                                {medDetails[0].medication_name}
                            </h4>

                            <ul className="horizontal-list mb-0">
                                <li>{medDetails[0].form}</li>
                                <li>•</li>
                                <li>{medDetails[0].strength}</li>
                                <li>•</li>
                                <li>{(medDetails[0].pill_nonpill).toLowerCase() === "pill" ? '30 count' : '1 count'}</li>
                            </ul>

                            <hr className={"mb-0"}/>
                            <BadgeTitleContent title={"Form"} points={[...new Set(medDetails.map(med => med.form))]} />
                            <BadgeTitleContent title={"Strength"} points={medDetails.map(med => med.strength)} />
                            <BadgeTitleContent title={"Count"} points={(medDetails[0].pill_nonpill).toLowerCase() === "pill" ? [
                                '30 Count',
                                '60 Count',
                                '90 Count'
                            ] : [
                                '1 Count',
                                '2 Count',
                                '3 Count'
                            ]} />

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container pt-3">
                <OurPlans planMedication={(includedPlan !== null && includedPlan !== undefined) && includedPlan['plans included']} />
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
