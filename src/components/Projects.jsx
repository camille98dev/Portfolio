import React from "react";
import ES1 from "../assets/es1.png";
import ES2 from "../assets/es2.png";
import ES3 from "../assets/es3.png";
import ES4 from "../assets/es4.png";
import N1 from "../assets/n1.png";
import N2 from "../assets/n2.png";
import N3 from "../assets/n3.png";
import N4 from "../assets/n4.png";
import AH1 from "../assets/A1.png";
import AH2 from "../assets/A2.png";
import AH3 from "../assets/A3.png";
import AH4 from "../assets/A4.png";

const Projects = () => {
  return (
    <div className="bg-[#030712] text-emerald-50 px-7">
      <div className="container mx-auto py-24 space-y-5">
        <div className="flex items-center gap-10 w-[50%]">
          <div>
            <h3 className="text-emerald-500 font-bold text-2xl flex-1">
              Projects
            </h3>
          </div>
          <div className="border lg:block hidden border-emerald-900 w-[50%] h-0 mt-2"></div>
        </div>
        <div>
          <p className="font-mono">
            Here are my most recent works. Some screenshots are covered up to
            honor a Non-Disclosure Agreement.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:mt-24">
          <div className="space-y-5 flex-1">
            <h3 className="text-emerald-500 font-bold text-xl flex-1">
              Enrollment System
            </h3>
            <p className="font-mono" align="justify">
              The enrollment system serves as a comprehensive platform
              accessible to both students and administrators, facilitating
              streamlined processes for course registration, academic planning,
              and administrative tasks. Students can use the application to
              enroll in courses, view their academic records, and manage their
              schedules. Administrators utilize the system to oversee enrollment
              numbers, coordinate course offerings, and maintain student records
              efficiently. This digital tool enhances accessibility,
              transparency, and effectiveness in managing educational logistics
              within an institution
            </p>
            <div className="font-mono">
              Built by:
              <ul className="flex gap-4">
                <li className="text-emerald-500">Nextjs</li>
                <li className="text-emerald-500">Tailwindcss</li>
                <li className="text-emerald-500">Adonisjs</li>
                <li className="text-emerald-500">Mysql</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img src={ES1} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={ES2} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={ES3} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={ES4} alt="portfolio" className="w-full h-44 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:mt-24">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img src={N1} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={N2} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={N3} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={N4} alt="portfolio" className="w-full h-44 rounded-lg" />
          </div>
          <div className="space-y-5 flex-1">
            <h3 className="text-emerald-500 font-bold text-xl flex-1">
              Inventory System
            </h3>
            <p className="font-mono" align="justify">
              An inventory system is a tool used by business to track and manage
              stock levels, locations, and statuses of goods. It monitors sales,
              orders, deliveries, and real-time inventory levels. Advanced
              systems integrate with purchasing, accounting, and sales
              processes, providing a comprehensive overview of inventory flow.
              This helps reduce costs, prevent stockouts, and improve customer
              satisfaction.
            </p>
            <div className="font-mono">
              Built by:
              <ul className="flex gap-4">
                <li className="text-emerald-500">C#</li>
                <li className="text-emerald-500">Tailwindcss</li>
                <li className="text-emerald-500">Blazor</li>
                <li className="text-emerald-500">Mysql</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:mt-24">
          <div className="space-y-5 flex-1">
            <h3 className="text-emerald-500 font-bold text-xl flex-1">
              System for Healthcare Transport Organization
            </h3>
            <p className="font-mono" align="justify">
              The Healthcare Transport Organization System is an all-in-one
              platform that supports member management, communication, and
              operations. It includes profiles, announcements, activity
              tracking, SOPs, knowledge resources, committee minutes, financial
              reports, and tools for discussions and onboarding—streamlining
              collaboration and improving efficiency across the organization.
            </p>
            <div className="font-mono">
              Built by:
              <ul className="flex gap-4">
                <li className="text-emerald-500">C#</li>
                <li className="text-emerald-500">Tailwindcss</li>
                <li className="text-emerald-500">Blazor</li>
                <li className="text-emerald-500">Mysql</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img src={AH1} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={AH2} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={AH3} alt="portfolio" className="w-full h-44 rounded-lg" />
            <img src={AH4} alt="portfolio" className="w-full h-44 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
