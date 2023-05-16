import React from 'react';
import Container from "../components/Container";
const user = () => {
    return (
        <div>
            <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Varify Email</h3>
              <form action="" className="d-flex flex-column gap-15">
                <h4>A varification email will be send to <br/>
                your email please check your email and varify it .....
                 </h4>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Resend Email</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
        </div>
    );
};

export default user;