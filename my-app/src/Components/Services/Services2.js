import React from 'react';

const Services2 = () => {
    return (
        <div className="my-5">

            <div className="row">
                <div className="col-4">
                    <div className="ms-5 mt-3 ps-5">
                        <img className="img-fluid" style={{ height: '400px', width: '500px', objectFit: "cover" }} src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/4-min.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="col-6 text-center">
                    <div className="m-4">
                        <h2 style={{ fontFamily: "Besley", color: "#303f9f" }}>DR. KANIZ AFRIN</h2>
                        <h4>Psychiatrist</h4>
                        <div className="m-3">
                            <p style={{ fontFamily: "Besley", color: "#0207a8" }}>Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease.</p>
                            <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>Mail me: mymail@gmail.com</h5>
                            <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>Call me: +8801254 256 500</h5>
                            <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>Find me here: Smart tower, 254 Dhaka</h5>
                        </div>
                    </div>

                    <div>
                        <button class="btn btn-primary">See More</button>

                    </div>

                </div>

            </div>



            <div class="container">
                <div class="row">
                    <h2 style={{ textAlign: "center", color: "#303f9f" }} >From Gallery</h2>



                    <div class="col">
                        <img style={{ height: '300px', width: '250px', objectFit: "cover", }} src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/9-min.jpg" alt="" />
                        <h6 style={{ textAlign: "center", color: "#555555" }}>Irin Parvin</h6>
                        <h6 style={{ textAlign: "center", color: "#555555" }}>Dermatologist</h6>
                    </div>

                    <div class="col">
                        <img style={{ height: '300px', width: '250px', objectFit: "cover" }} src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/5-min.jpg" alt="" />
                        <h6 style={{ textAlign: "center", color: "#555555" }}>Najnin Supa</h6>
                        <h6 style={{ textAlign: "center", color: "#555555" }}>Neurologist</h6>
                    </div>

                    <div class="col">
                        <img style={{ height: '300px', width: '250px', objectFit: "cover" }} src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/10-min.jpg" alt="" />
                        <h6 style={{ textAlign: "center", color: "#555555" }}>KB Arif</h6>
                        <h6 style={{ textAlign: "center", color: "#555555" }}>Psychiatrist</h6>
                    </div>



        

                </div>



            </div>


        </div>
    );
};

export default Services2;