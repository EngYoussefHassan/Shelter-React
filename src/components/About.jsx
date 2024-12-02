import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container py-5">
      <h2>About Us:</h2>
      <p>
        <strong>Our Mission:</strong> Our mission is to rescue, rehabilitate,
        and rehome animals in need, while promoting the humane treatment of all
        animals.
      </p>
      <h3>Our Story</h3>
      <p>
        Founded in 20XX, FurEver Home was established to provide a safe haven
        for abandoned and neglected animals. Over the years, we have rescued
        thousands of animals and helped them find loving homes.
      </p>
      <h3>Meet Our Team</h3>
      <p>
        Our dedicated team of volunteers and staff work tirelessly to ensure the
        well-being of every animal that comes through our doors. From our
        founders to our newest volunteers, we all share a passion for animal
        welfare.
      </p>
      <h3>What We Do</h3>
      <ul>
        <li>
          <strong>Adoption Services:</strong> Learn about our adoption process
          and meet our adorable adoptable pets.
        </li>
        <li>
          <strong>Foster Programs:</strong> Become a foster parent and provide
          temporary care for animals in need.
        </li>
        <li>
          <strong>Volunteer Opportunities:</strong> Join our team and make a
          difference in the lives of animals.
        </li>
        <li>
          <strong>Educational Programs:</strong> Participate in workshops and
          events to learn more about animal care and advocacy.
        </li>
      </ul>
      <h3>Our Impact</h3>
      <p>
        Thanks to the support of our community, we have successfully rescued and
        rehomed over 1,000 animals. Read some of our{" "}
        <a href="#success-stories">success stories</a> to see the difference
        we're making.
      </p>
      
      <h3>Contact Us</h3>
      <p>
        <strong>Location:</strong> 123 Paws Street, Barktown, Cuddle County,
        56789, USA
        <br />
        <strong>Phone:</strong> +1 (555) 123-4567
        <br />
        <strong>Email:</strong> contact@fureverhome.org
      </p>
      <h3>Get Involved</h3>
      <p>
        Want to help? <a href="#donate">Donate</a>,{" "}
        <a href="#volunteer">volunteer</a>, or <a href="#adopt">adopt</a> today!
      </p>
    </div>
  );
};

export default About;
