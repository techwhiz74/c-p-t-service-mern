import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Team.css";
import axios from "axios";

function TeamMember({ member, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      className="profileContainer"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
    >
      <motion.img
        className="profileImg"
        src={member.image}
        alt={member.altText}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      />

      <div className="profileContent">
        <h3>{member.name}</h3>
        <p>{member.description}</p>
        <div className="profileSocials">
          <a href={member.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get("http://localhost:8080/api/team")
      .then((response) => {
        setTeamMembers(response.data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <motion.div className="containerWrapper">
      {teamMembers.map((member, index) => (
        <TeamMember member={member} index={index} key={index} />
      ))}
    </motion.div>
  );
}

export default Team;
