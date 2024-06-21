import React from 'react';

const OurPlans = ({ planMedication = 'both' }) => {
    if (planMedication === "10$"){
        return (
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12" />

                <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-2 d-lg-flex  justify-content-end">
                    <div className="card p-4 w-res-75  border-2 "
                         style={{backgroundColor: '#ECF7FE'}}>
                        <h1 className={"text-dark"}>$10 Copay</h1>
                        <p>Top 2500 generic medication plan</p>
                        <div className="">
                            <button className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Pay Now</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }else if (planMedication === '5$,10$'){
        return (
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <div className="card p-4 w-res-75  border-2 "
                         style={{backgroundColor: '#F9F3FF'}}>
                        <h1 className={"text-dark"}>$5 Copay</h1>
                        <p>Top 500 generic medication plan</p>
                        <div >
                            <p className={"fw-bold"} style={{ fontSize:14 }}><a href={"https://pay.joinpomegranate.com/b/3cs4jyenhgQo7p6dR1"} className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0" target={"_blank"}>Pay Now</a>
                                &nbsp;&nbsp;&nbsp;*Active membership required</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-2 d-lg-flex  justify-content-end">
                    <div className="card p-4 w-res-75  border-2 "
                         style={{backgroundColor: '#ECF7FE'}}>
                        <h1 className={"text-dark"}>$10 Copay</h1>
                        <p>Top 2500 generic medication plan</p>
                        <div className="">
                            <p className={"fw-bold"} style={{ fontSize:14 }}><a href={"https://pay.joinpomegranate.com/b/8wM03i1Avbw4cJqfZa"} target={"_blank"} className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Pay Now</a>
                                &nbsp;&nbsp;&nbsp;*Active membership required</p>
                        </div>
                    </div>
                </div>
            </div> );
    }else{
        return (
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <div className="card p-4 w-res-75  border-2 "
                         style={{backgroundColor: '#F9F3FF'}}>
                        <h1 className={"text-dark"}>$5 Copay</h1>
                        <p>Top 500 generic medication plan</p>
                        <div >
                            <p className={"fw-bold"} style={{ fontSize:14 }}><a href={"https://pay.joinpomegranate.com/b/3cs4jyenhgQo7p6dR1"} className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0" target={"_blank"}>Pay Now</a>
                                &nbsp;&nbsp;&nbsp;*Active membership required</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-2 d-lg-flex  justify-content-end">
                    <div className="card p-4 w-res-75  border-2 "
                         style={{backgroundColor: '#ECF7FE'}}>
                        <h1 className={"text-dark"}>$10 Copay</h1>
                        <p>Top 2500 generic medication plan</p>
                        <div className="">
                            <p className={"fw-bold"} style={{ fontSize:14 }}><a href={"https://pay.joinpomegranate.com/b/8wM03i1Avbw4cJqfZa"} target={"_blank"} className=" me-2 me-lg-0 btn btn-orange mt-2 mt-lg-0">Pay Now</a>
                                &nbsp;&nbsp;&nbsp;*Active membership required</p>
                        </div>
                    </div>
                </div>
            </div> );
    }
};

export default OurPlans;
