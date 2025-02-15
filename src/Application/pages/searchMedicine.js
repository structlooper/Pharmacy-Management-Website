import React from 'react';
import SearchBox from "../components/medicationSearchBox";
import ImageWithSideIconContents from "../components/imageWithSideIconContents";
import OurPlans from "../components/ourPlans";
import DynamicHead from "../utils/DynamicHead";

const SearchMedicine = () => {
    return (
        <section>
            <div style={{backgroundColor: '#FEE7E7'}}>
                <DynamicHead title={"Pomegranate Pharmacy"} />
                <section className="container text-lg-center" style={{paddingTop: "5%", paddingBottom: "9%"}}>
                    <div className="row justify-content-lg-center align-items-end">
                        <div className="col-lg-2 col-md-auto col-sm-12"/>
                        <div className="col-lg-7 col-md-9 col-sm-12">
                            <h6 className="maroon">IN COLLABORATION WITH</h6>
                            <img src={require('../asserts/banner.png')} alt="banner" className="img-fluid my-lg-5 my-3" width={300}
                                 height={100}/>
                            <h2 className={"mt-3 maroon w-res-75 mx-auto"}>Affordable medication at the lowest possible
                                price</h2>
                            <p className={" mx-auto pt-4"}>Pomegranate Health, in collaboration with Mark Cuban Cost
                                Plus Drug Company, offers hundreds of common (and often life-saving) medications at the
                                lowest possible prices, conveniently shipped directly to your door</p>
                            <a href={"#plans"} className=" me-2 me-lg-0 btn btn-maroon mt-3 p-2-5">Get Started</a>
                        </div>
                        <div className="col-auto hide-on-mobile hide-on-tab">
                            <img src={require('../asserts/medication.png')} alt="medication"
                                 width={250} height={320} className={"img-fluid"}/>
                        </div>
                    </div>
                </section>

            </div>
            <div className={"py-5 "} style={{backgroundColor: '#FFF3EF'}}>
                <div className="container">
                    <section className={"bg-ltn-maroon  mx-auto "}
                             style={{borderRadius: 10, padding: '4.5%', marginTop: "-10%"}}>
                        <h3 className={"text-white py-2"}>Start your search</h3>
                        <SearchBox/>
                    </section>
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
                    />
                </div>
            </div>

            <div className={"container"}>
                <div className=" py-5" id={"plans"}>
                   <OurPlans />
                </div>
            </div>
        </section>
    );
};



export default SearchMedicine;
