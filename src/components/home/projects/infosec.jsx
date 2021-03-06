import React from "react";

import InfosecIcon from "../../../assets/svg/magpie-vector-v02.svg";

const InfosecProject = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 rounded-lg p-8 lg:p-12">
      <InfosecIcon className="w-4/5 md:w-1/3 h-auto" />
      <div className="w-full md:w-2/3">
        <p className="text-black text-4xl mb-8 font-header">
          InfoSec Club UCalgary
        </p>
        <p className="text-black text-2xl mb-8">
          Technical Director for the Information Security Club at the University
          of Calgary. Prepared and taught beginner and advanced workshops at
          weekly club meetings. Administrated server infrastructure and managed
          front-end development the for club website. Managed junior executives
          who were interested in the server infrastructure side of the the
          club's operations.
        </p>
        <div className="flex flex-wrap justify-center">
          <iframe
            title="Beginner: Intro to SQL Injection"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/0_9Jp8jCUTM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Beginner: Intro to Forensics"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/KQSlSHGt9g8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Advanced: Linux Privilege Escalation"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/UtWZ0dNIslE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Beginner: Intro to Web Exploitation"
            className="w-2/5 h-52 p-2"
            src="https://www.youtube.com/embed/yqSC6unNcus"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-10 text-center md:text-right">
          <a
            className="text-md sm:text-2xl text-red-600 underline"
            href="https://infosecucalgary.ca/"
            target="_blank"
            rel="noreferrer"
          >
            https://infosecucalgary.ca/
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfosecProject;
