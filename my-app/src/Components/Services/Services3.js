import React from 'react';

import data from '../Tools/StuffName.json'

const Services3 = () => {


    return (


        <div>
 <h2 className="text-center my-4  " style={{ fontFamily: 'Besley', color: "#303f9f" }}>Our  <span style={{ fontFamily: 'Besley', color: "#007bff" }}>Honourable stuff</span></h2>
           <div className="row mx-4 px-5 ">

           {
                data.map(v =>
                    <div className="col-4 rounded" style={{ fontFamily: 'Besley',height: "300px",textAlign:"center"}}>
                       <div className="border  p-4 rounded shadow">
                       <h5 className="mt-3" style={{color: "black"}}>{v.name}</h5>
                        <h5 style={{color: "blue",width: "300px"}}>number:{v.number}</h5>
                        <h5 style={{color: "black",width: "300px"}}>position:{v.position}</h5>
                        <h5 style={{color: "blue",width: "300px"}}>email:{v.email}</h5>
                        <h5 style={{color: "black",width: "300px"}}>details:{v.details}</h5>

                       </div>


                    </div>




                )

            }


           </div>

        </div>

    );

};


export default Services3;