import React, {useRef} from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);


    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {y:0,opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger:card,
                        start:"top bottom-=100"
                    }}
            )

        })
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1})
    },[]);
    return (
        <section id="work" className="app-showcase"  ref={sectionRef}>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/urbanplanner-img.png" alt="Urbanplanner" />
                        </div>
                        <div className="text-content">
                            <h2>Urban planning in Bengaluru Made simple with a powerful,User-Friendly Web App

                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An Web app built with React Native,Expo,& TailwindCSS for a fast,user-friendly experience.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/IPL-img.png" alt="ipl" />
                            </div>
                            <h2>IPL Database Management System</h2>
                        </div>

                        <div className="project" ref={project3Ref} >
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/chatbox.jpg" alt="chatbox" />
                            </div>
                            <h2>A RAG based Chatbot</h2>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
