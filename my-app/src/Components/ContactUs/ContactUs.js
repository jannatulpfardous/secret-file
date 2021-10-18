import React from 'react';
import picture from '../Picture/Picture.jpg'

const ContactUs = () => {
    return (
        <div>
            <div class="container">



                <div class="row">
                    




                    <div class="col">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class ="form-check-label" for="exampleCheck1">Check Me Out</label>
                            </div>
                            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
                        </form>
                    </div>


                    <div class="col text-center">
                        <img style={{ height: "350px"}} src={picture} alt="" />
                    </div>



                </div>


            </div>


        </div>



    );


};


export default ContactUs;