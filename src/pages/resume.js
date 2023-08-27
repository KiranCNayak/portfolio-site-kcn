import React from 'react';
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div className="text-white">
        <div className="flex p-4">
          <div className="flex flex-[5] flex-col mr-2 text-justify">
            <p className="text-4xl font-bold">Kiran C Nayak</p>
            <p className="text-lg font-light">
              Frontend Developer focussed on building accessible products for
              the world, mainly on Mobile & Web platforms
            </p>
          </div>
          <div className="flex flex-[2] flex-col ml-2">
            <p>kiran.nayak@dummy-email.com</p>
            <a href="https://github.com/KiranCNayak">
              <p>
                GitHub/<span className="font-bold">KiranCNayak</span>
              </p>
            </a>
            <a href="https://twitter.com/KiranCNayak">
              <p>
                Twitter/<span className="font-bold">KiranCNayak</span>
              </p>
            </a>
          </div>
        </div>

        <div className="flex p-4">
          <div className="flex flex-[5] flex-col mr-2 ">
            <p className="text-2xl font-semibold mb-2">Relevant Experience</p>
            <div className="flex items-center">
              <p className="text-lg font-light">Software Engineer 1</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-xl font-semibold">Quicken</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-extralight">Aug 2020 — Mar 2021</p>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-light">Product Development Intern</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-extralight">Jan 2020 — Jul 2020</p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-lg font-light">Summer Intern</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-extralight">Jun 2019 — Jul 2019</p>
            </div>
            <ul className="ml-5 mb-4">
              <li className="list-disc">
                Migrated a part of the code that was using Realm DB for
                Front-end state management to use Redux containers
              </li>
              <li className="list-disc">
                Implemented WhatsApp-like feature of "Automatic App Lock after
                user specified delay" to Simplifi, that was coded separately on
                native Android & native iOS, which had a direct impact on more
                than 100,000 users. I had to learn Swift for the implementation
                on native iOS.
              </li>
              <li className="list-disc">
                Implemented a new Navigation using Modals as requested by the
                Product Manager of our team. This resulted in better navigation
                with buttery smooth UI transitions.
              </li>
              <li className="list-disc">
                Added a Loading Template View to all the Dashboard components,
                dramatically increasing the User Experience (UX), that resulted
                in a better Play Store and App Store reviews. All of these were
                implemented using ES6+ syntax of JS.
              </li>
              <li className="list-disc">
                Fixed several bugs during my stint here, that were proving to be
                bottlenecks from performance point of view.
              </li>
              <li className="list-disc">
                Suggested an App enhancement at the annual "Quick-a-thon" event,
                to include Referral System that was prototyped and implemented
                in 2 days.
              </li>
              <li className="list-disc">
                Revamped UI Components using "styled-components" library, to
                have reusable code that resulted in dynamic styling.
              </li>
              <li className="list-disc">
                Implemented a reusable Radio Button Component from scratch, for
                its use in "Automatic App Lock" feature.
              </li>
              <li className="list-disc">
                Familiarity in Test driven environment where I have extensively
                written test cases for newly added components and functions for
                better Code Reliability, Code Quality and increase the overall
                Code Coverage, using Jest and Mocha.
              </li>
              <li className="list-disc">
                Integrated Intercom (Live Chat with Care and Support team) into
                Simplifi, to increase the overall User satisfaction.
              </li>
              <li className="list-disc">
                Integrated Instabug (Bug report feature) into Simplifi, to
                instantly notify the developers of any bugs found by the users.
              </li>
              <li className="list-disc">
                Added "Accessibility labels" to many of the legacy components in
                the app, for better UX of differently-abled people.
              </li>
            </ul>

            <div className="flex items-center mb-2">
              <p className="text-lg font-light">External Android Dev Intern</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-xl font-semibold">Nuetech Solar Pvt Ltd</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-light">Sept 2018 — May 2019</p>
            </div>
            <ul className="ml-5 mb-4">
              <li className="list-disc">
                Built an end-to-end pixel-perfect App, that used Bluetooth as an
                Interface to send / receive date from an IOT device, a "Proof of
                Concept" ideated in a paper published at Conference on Power and
                Energy (PECon) 2018 (stated below).
              </li>
              <li className="list-disc">
                Wrote a RESTful API for the backend that was stored in one of
                our college's servers, to do CRUD operations on the data sent
                from the app, on user interaction. Implemented the backend with
                PostgreSQL, and used SQLite for local storage on the app.
              </li>
              <li className="list-disc">
                It is handed over to Nuetech to register an IOT device, at their
                clients' place, by Nuetech's technicians.
              </li>
              <li className="list-disc">
                Practical experience of Software Development Lifecycle (SDLC)
                was learnt as part of building this app.
              </li>
            </ul>

            <p className="text-2xl font-semibold mb-2">Publications</p>
            <p className="italic">
              DESIGN AND DEVELOPMENT OF AUTOMATIC TEMPERATURE CONTROL SYSTEM FOR
              SOLAR WATER HEATER SYSTEM
              <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
              <span className="underline">
                <a
                  href="https://ieeexplore.ieee.org/document/8684084"
                  target="_blank"
                >
                  IEEE&nbsp;Xplore&nbsp;Link
                </a>
              </span>
            </p>
            <p>
              This paper was presented at the 7th International Conference on
              Power and Energy (PECon 2018), in Kuala Lumpur, Malaysia on 3rd
              December, 2018 by one of our co-authors.
            </p>
          </div>
          <div className="flex flex-[2] flex-col ml-2">
            <p className="text-2xl font-semibold mb-2">Skills</p>
            <p className="text-xl font-semibold">Programming Languages</p>
            <p className="text-lg font-light italic mb-4">
              Javascript, Java, HTML, CSS
            </p>
            <p className="text-xl font-semibold">Libraries & Frameworks</p>
            <p className="text-lg font-light italic">
              React, React Native, NextJS
            </p>
            <p className="text-lg font-light italic">
              ExpressJS, Redux, JSON, XML
            </p>
            <p className="text-lg font-light italic mb-4">
              Tailwind, styled-compnents
            </p>
            <p className="text-xl font-semibold">Tools & Platforms</p>
            <p className="text-lg font-light italic">
              Git, GitHub, Postman, JIRA
            </p>
            <p className="text-lg font-light italic mb-16 2xl:mb-8">
              ExpressJS, Redux, JSON, XML
            </p>
            <p className="text-2xl font-semibold mb-2">Education</p>

            <p className="text-xl font-semibold">BMS College of Engineering</p>
            <div className="flex items-center">
              <p className="text-lg font-light">BE (CSE)</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-xl font-semibold">
                9.11&nbsp;<span className="italic">/</span>&nbsp;10
              </p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-extralight">2016 - 2020</p>
            </div>
            <p className="text-lg font-light italic">
              Data Structures, Algorithms,
            </p>
            <p className="text-lg font-light italic">
              Operating System, Databases,
            </p>
            <p className="text-lg font-light italic">
              Computer Networks, S/W Engg,
            </p>
            <p className="text-lg font-light italic mb-4">
              Computer Organisation & Arch
            </p>

            <p className="text-xl font-semibold">SKCH PU College</p>
            <div className="flex items-center">
              <p className="text-lg font-light">PUC</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-xl font-semibold">98.75%</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-sm font-extralight">2014 - 2016</p>
            </div>
            <p className="text-lg font-light italic">
              Physics, Chemistry, Maths
            </p>
            <p className="text-lg font-light italic mb-16 2xl:mb-8">
              Computer Science, English, Kannada
            </p>

            <p className="text-2xl font-semibold mb-2">Certifications</p>

            <p className="text-xl font-semibold">Machine Learning</p>
            <div className="flex items-center mb-4">
              <p className="text-lg font-light">Coursera</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-lg font-extralight underline italic">
                <a
                  href={'http://coursera.org/verify/H7YC68D2EGKA'}
                  target="_blank"
                >
                  Certificate Link
                </a>
              </p>
            </div>

            <p className="text-xl font-semibold">
              Microsoft Technology Associate:
            </p>
            <p className="text-xl font-semibold">Security Fundamentals</p>
            <div className="flex items-center">
              <p className="text-lg font-light">Microsoft</p>
              <span>&nbsp;&bull;&nbsp;</span>
              <p className="text-lg font-extralight underline italic">
                <a
                  href={'http://coursera.org/verify/H7YC68D2EGKA'}
                  target="_blank"
                >
                  Certificate Link
                </a>
              </p>
            </div>
            <p className="text-lg font-light italic">
              Data Structures, Algorithms,
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
