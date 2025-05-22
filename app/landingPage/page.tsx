"use client";

import SignInButton from "@/components/landingPage/buttons/SignInButton";
import LogInButton from "@/components/landingPage/buttons/LogInButton";
import AboutUs from "@/components/landingPage/AboutUs";
import BuildYourCommunitiesSection from "@/components/landingPage/BuildYourCommunities";
import AdvertSection from "@/components/landingPage/AdvertSection";

export default function LandingPage(){
    return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex items-center justify-center max-w-2xl mx-auto w-full">
        <SignInButton label="Sign Up"/>
        <LogInButton/>
      </div>
      <div>
        <AdvertSection/>
        <SignInButton label="Get Started"/>
      </div>
      <div>
        <AboutUs/>
      </div>
      <div>
        <BuildYourCommunitiesSection/>
      </div>
    </div>
  );
}