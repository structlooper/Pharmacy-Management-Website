import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import OurPlans from "../components/ourPlans";
import ImageWithSideIconContents from "../components/imageWithSideIconContents";
import {FaMoneyBill, FaPrescription} from "react-icons/fa";
import localMedicationList from "../utils/localMedicationList";
import DynamicHead from "../utils/DynamicHead";
import {bindState} from "../utils/globalFunctions";

const MedicineDetails = () => {
    const { suggestion } = useParams();
    const [MedLIstFromServer, setMedLIstFromServer] = useState(null);
    const [includedPlan, setIncludedPlan] = useState(null);
    const [selectedForm, setSelectedForm] = useState(null);
    const [selectedStrength, setSelectedStrength] = useState(null);
    const [selectedCount, setSelectedCount] = useState(null);
    const [selectedMedicinePrice, setSelectedMedicinePrice] = useState(null);
    const [selectedMedicineName, setSelectedMedicineName] = useState(null);
    const [filteredStrength, setFilteredStrength] = useState(null);
    const [initialTriggerDone, setInitialTriggerDone] = useState(false);

    React.useEffect(() => {
        getMedicationNameByThirdPartyApi().then(res => getMedicationFromThirdPartyApi(res).then(final => {
            setMedLIstFromServer(final)
            setIncludedPlan(localMedicationList.find(localMed => localMed['Representative Product SKU'] === final[0]?.ndc || ''))
            setSelectedForm(final[0]?.form || null)
            setSelectedStrength(final[0]?.strength || null)
            setSelectedCount(getQuantityUnitMeasureByPillNoPill(final[0]) ? "30 Count" : "1 Count")
            setSelectedMedicineName(final[0].medication_name)
            setSelectedMedicinePrice('$'+(parseFloat(final[0].requested_quote.replace("$","")) * (getQuantityUnitMeasureByPillNoPill(final[0]) ? 30 : 1)).toFixed(2))

        }))
    },[])

    React.useEffect(()=>{
        if (MedLIstFromServer !== null) {
            const filterMedicineListByForm = MedLIstFromServer.filter(f => f.form === selectedForm)
            setFilteredStrength(filterMedicineListByForm)
            if (initialTriggerDone){
                setSelectedStrength(filterMedicineListByForm[0]?.strength || null)
                setSelectedCount(getQuantityUnitMeasureByPillNoPill(filterMedicineListByForm[0]) ? "30 Count" : "1 Count")
                getMedicationFromThirdPartyApiUsingSelectionData(filterMedicineListByForm[0]?.strength,(getQuantityUnitMeasureByPillNoPill(filterMedicineListByForm[0])?"30 Count" : "1 Count"))
            }
        setInitialTriggerDone(true)
        }
    },[selectedForm])






    const getMedicationNameByThirdPartyApi = () => {
        return new Promise(resolve => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };

              fetch("https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main?ndc="+suggestion, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    resolve(result.results[0]);
                })
                .catch((error) => {
                    console.error(error)
                    resolve(null);
                });
        })

    }
    const getQuantityUnitMeasureByPillNoPill = (medication) => medication.pill_nonpill.toLowerCase() === "pill";

    const getMedicationFromThirdPartyApi = (medDetails) => {
        return new Promise(resolve => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            const url = "https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main?medication_name="+medDetails.medication_name+"&quantity_units=1";


            console.log(medDetails)
            console.log(url)

            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    // console.log(result)
                    resolve(result.results);
                })
                .catch((error) => {
                    console.error(error)
                    resolve(null);
                });
        })

    }
    const getMedicationFromThirdPartyApiUsingSelectionData = (strength, count) => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            const url = "https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main?medication_name="+selectedMedicineName+"&strength="+strength+"&quantity_units="+count.replace('Count','')+"";

            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setSelectedMedicinePrice(result.results[0].requested_quote)
                })
                .catch((error) => {
                    console.error(error)
                });
    }

    const BadgeTitleContent = ({ title, points, selectable=false, selectableState, badgeType = 'form' }) => {
        return  <div className={"mt-4"}>
            <h6 style={{ color:'#808080', fontSize:15 }}>{title}</h6>
            <div className="row"  >
                {
                    points.map((point,index) =>  <div key={index} className="col-auto mt-2">
                        <div className={"text-center maroon "+ (selectable ? (point === selectableState.state ? 'p-badge-selected' : 'p-badge') : 'p-badge')}
                             style={selectable ? { cursor: 'pointer' } : {}} onClick={()=> {
                            if(selectable){
                                selectableState.setState(point)
                                if (badgeType === 'Strength')
                                    getMedicationFromThirdPartyApiUsingSelectionData(point,selectedCount)
                                else if (badgeType === 'Count')
                                    getMedicationFromThirdPartyApiUsingSelectionData(selectedStrength,point)


                            }
                        }}>
                            {point}
                        </div>
                    </div>)
                }

            </div>



        </div>
    }

    if (MedLIstFromServer === null)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <div className="spinner-border" role="status">
                </div>
            </div>
        );

    if(MedLIstFromServer.length === 0)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <h1>No Medicine Found!!</h1>
            </div>
        );
    else
        return (
        <div>
            <DynamicHead title={"Pomegranate Medicine"} />
            <div className="container py-lg-5 pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 px-lg-0 pt-2">
                        <h2 className={"maroon"}>{selectedMedicineName}</h2>
                        <div className="row py-3">
                            <div className="col-auto">
                                <p>
                                    <FaPrescription size={30} color={'#D31A53'} style={{ borderRadius:100, backgroundColor:'#FBE8E7', padding:"2%" }} />
                                    <span style={{ fontSize:15 }} className={"text-muted"}> Prescription Required</span>
                                </p>
                            </div>
                            <div className="col-auto">
                                <p>
                                    <FaMoneyBill size={30} color={'#D31A53'} style={{ borderRadius:100, backgroundColor:'#FBE8E7', padding:"2%" }} />
                                    <span style={{ fontSize:15 }} className={"text-muted"}> Included with {(includedPlan !== null && includedPlan !== undefined) && includedPlan['plans included'] === '5$,10$' ? '$5 and $10 Copay' : '$10 Copay'}</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-auto mt-3 px-0">
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
                        <div className="card p-4 py-5">
                            <h4 className={"maroon"}>
                                {selectedMedicineName}
                            </h4>

                            <ul className="horizontal-list ">
                                <li>{selectedForm}</li>
                                <li>•</li>
                                <li>{selectedStrength}</li>
                                <li>•</li>
                                <li>{selectedCount}</li>
                            </ul>

                            <h2>{selectedMedicinePrice}</h2>
                            <hr className={"mb-0"}/>
                            <BadgeTitleContent title={"Form"} points={[...new Set(MedLIstFromServer.map(med => med.form))]} selectable={true} selectableState={bindState(selectedForm,setSelectedForm)}  />
                            <BadgeTitleContent title={"Strength"} points={filteredStrength !== null ? [...new Set(filteredStrength.map(med => med.strength))] : []} selectable={true} selectableState={bindState(selectedStrength,setSelectedStrength)} badgeType={"Strength"} />
                            <BadgeTitleContent title={"Count"} points={filteredStrength !== null ? ((filteredStrength[0].pill_nonpill).toLowerCase() === "pill" ? [
                                '30 Count',
                                '60 Count',
                                '90 Count'
                            ] : [
                                '1 Count',
                                '2 Count',
                                '3 Count'
                            ] ): []} selectable={true} selectableState={bindState(selectedCount, setSelectedCount)} badgeType={"Count"} />

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container pt-3" id={"plans"}>
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
