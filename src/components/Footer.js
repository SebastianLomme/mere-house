import React from 'react'
import ProspectusMereHouse from "../documents/prospectusMereHouse.docx"
import ChildrenRegistrationForm from "../documents/Children_sRegistrationForm.docx"
import OOSCForm from "../documents/OOSCRegistrationForm.docx"
import ImportantDates from "../documents/importantDates.docx"


function Footer() {
    const startYear = 2021
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer-container">
            <div className="footer-main-section container">
                <div>
                    <h5>
                        General Information
                    </h5>
                    <a href={ProspectusMereHouse} target="_blank" rel="noreferrer">Prospectus mere house</a>
                    <a href={ChildrenRegistrationForm} target="_blank" rel="noreferrer">Children’s Registration Form</a>
                    <a href={OOSCForm} target="_blank" rel="noreferrer">OOSC Registration Form</a>
                    <a href={ImportantDates} target="_blank" rel="noreferrer">Important dates</a>
                    <a href="https://img1.wsimg.com/blobby/go/8a28f467-7f71-4287-ae36-382172e8f80f/downloads/preschool%20news.pdf?ver=1639666314280">Preschool news</a>
                    <a href="https://img1.wsimg.com/blobby/go/8a28f467-7f71-4287-ae36-382172e8f80f/downloads/0-3%20newsletter.pdf?ver=1639666314280">0-3 newsletter</a>
                </div>
                <div>
                    <h5>
                        Register online
                    </h5>
                    <h6>
                    Register with Mere House Nursery
                    </h6>
                    <p>Please complete both of these forms to register with the Nursery</p>
                    <ol>
                        <li>
                            <a href="https://caresoftware.wufoo.com/forms/zw428wx1aczxgb/">Registration Form</a>
                        </li>
                        <li>
                            <a href="https://caresoftware.wufoo.com/forms/z1al6gte18y2nbl/">
                                Sessions & Consent
                            </a>
                        </li>
                    </ol>

                    <h6>
                        Register with Mere House Out of School Club
                    </h6>
                    <p>
                        Please complete both of these forms to register with the Out of School Club
                    </p>
                    <ol>
                        <li>
                            <a href="https://caresoftware.wufoo.com/forms/z1y2mk4i1qapayo/">
                                Registration Form
                            </a>
                        </li>
                        <li>
                            <a href="https://caresoftware.wufoo.com/forms/zdhllyq04bkt5m/">
                                Sessions & Consent
                            </a>
                        </li>
                    </ol>
                </div>
                <div>
                    <h5>
                        Policies
                    </h5>
                    <a href="">Policies and procedures</a> 
                    <a href="#">Equality and Diversity policy</a>
                    <a href="#">GDPR policy</a>
                    <a href="#">Privacy notice for parents</a>
                </div>
            </div>
            <div className="footer-copy-right">
                <p>Copyright © {startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`} Mere House Day Nursery - All Rights Reserved. </p>
            </div>

        </div>
    )
}

export default Footer