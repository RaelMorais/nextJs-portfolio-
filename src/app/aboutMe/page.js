"use client";
import React from "react";
import Timeline from "../components/about/timeline";
import Experience from "../components/about/experience";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import  Profile  from "../components/about/Profile"
export default function aboutMe(){
    return(
        <>
        <div className="bg-black">
        <Header />
        <Profile />
        <Experience />
        <Timeline />
        <Footer/>
        </div>
        </>
    );
}