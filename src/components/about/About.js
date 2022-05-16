import React from "react";
import './About.css'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';
import AboutCard from './AboutCard';


const About =()=>{
    return(
    <div className="about">
        <div className="container">
            <h2> Team of professionals, making important decisions</h2>
            <p>The defi protocol system empowers developers, providers.</p>
            <div className=" card-container" >
            <div className="card">
                        <AboutCard  img= '../../assets/subscribe.jpg' heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    <div className="card">
                        <AboutCard   img= '../../assets/subscribe.jpg'  heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
                    </div>
                    <div className="card">
                        <AboutCard  img= '../../assets/subscribe.jpg'  heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
                    </div>
                    <div className="card">
                        <AboutCard  img= '../../assets/subscribe.jpg'  heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
                    </div>
                </div>
                <a href="/" className="btn">Use PlanPal</a>
            </div>
        </div>
    )
}

export default About