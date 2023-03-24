import React from "react";
import contactImage from "../assets/img/contact-img.png"

function ContactUs() {
    return (
        <div className="text-center my-3">
            <img src={contactImage} className="my-img my-2"></img>
            <p className="p-3">
                Address:
                Keas 69 Str.
                15234, Chalandri
                Athens,
                Greece

                +30-2106019311 (landline)
                +30-6977664062 (mobile phone)
                +30-2106398905 (fax)
            </p>
        </div>
    )
}

export default ContactUs