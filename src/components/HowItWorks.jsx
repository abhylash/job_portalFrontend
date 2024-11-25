import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How It Works</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Sign Up & Create Your Profile</h4>
          <p>
            Register for a free account as a job seeker or employer. Build a personalized 
            profile within minutes to showcase your expertise or hiring needs. Start your 
            journey toward finding or filling the perfect role effortlessly.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Post Jobs or Explore Listings</h4>
          <p>
            Employers can create engaging job posts, while job seekers can explore a wide 
            range of roles. Use advanced search filters to quickly find opportunities or 
            candidates that align with your requirements.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Connect & Achieve Goals</h4>
          <p>
            Employers can evaluate candidates and make hiring decisions, while job seekers 
            can accept offers that match their aspirations. Build connections that lead to 
            professional growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
