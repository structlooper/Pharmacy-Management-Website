import React from 'react';

const OurPlans = ({ planMedication = 'both' }) => {
    console.log('plan', planMedication)
    if (planMedication === "5$"){
        return (
            <div className="row">

                <div className="col-6">
                    <div className="card p-4 w-res-75 mx-auto border-2 shadow"
                         style={{backgroundColor: '#F9F3FF'}}>
                        <h1 className={"text-dark"}>$5 Copay</h1>
                        <p>Top 500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Get Started</button>

                        </div>
                    </div>
                </div>
                <div className="col-6" />
            </div>
        );
    }else if (planMedication === '5$,10$'){
        return (
            <div className="row">

                <div className="col-6">
                    <div className="card p-4 w-res-75 mx-auto border-2 shadow"
                         style={{backgroundColor: '#F9F3FF'}}>
                        <h1 className={"text-dark"}>$5 Copay</h1>
                        <p>Top 500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Get Started</button>

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-4 w-res-75 mx-auto border-2 shadow"
                         style={{backgroundColor: '#ECF7FE'}}>
                        <h1 className={"text-dark"}>$10 Copay</h1>
                        <p>Top 2500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Get Started</button>

                        </div>
                    </div>
                </div>
            </div> );
    }else{
        return (
            <div className="row">

                <div className="col-6">
                    <div className="card p-4 w-res-75 mx-auto border-2 shadow"
                         style={{backgroundColor: '#F9F3FF'}}>
                        <h1 className={"text-dark"}>$5 Copay</h1>
                        <p>Top 500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Get Started</button>

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-4 w-res-75 mx-auto border-2 shadow"
                         style={{backgroundColor: '#ECF7FE'}}>
                        <h1 className={"text-dark"}>$10 Copay</h1>
                        <p>Top 2500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Get Started</button>

                        </div>
                    </div>
                </div>
            </div> );
    }
};

export default OurPlans;
