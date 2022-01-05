import React from "react";

const Faqs = () => {
  return (
    <section className="faqs py-5">
      <div className="container py-5">
        <div className="section-header">
          <h2>FAQS</h2>
          <p>
            Our range of users and prospective users or generally curious
            onlookers usually ask the following questions
          </p>
        </div>
        <div
          className="accordion "
          id="accordionExample"
          style={{ maxWidth: "1050px", margin: "0 auto" }}
        >
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Is EZ Contacts free to use?
              </button>
            </h4>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Yes.</strong> It is absolutely free to use EZ Contacts.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can I access my contact offline?
              </button>
            </h4>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Not yet!</strong> This is a feature our team of
                engineers is currently working on. Hopefully within the shortest
                possible time, it would be ready.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h4 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I access my contacts at night time?
              </button>
            </h4>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Yes!</strong> But beware though, the boogie man may be
                lurking about. Stay safe.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can I opt for a dark theme?
              </button>
            </h4>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Not yet!</strong> This is a feature our team of
                engineers is currently working on. Hopefully within the shortest
                possible time, it would be ready.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
