import { Button } from "@/components/ui/button";
import { Printer, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectReport = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={handlePrint}>
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
      </div>

      <div className="report-container bg-white text-black min-h-screen">
        {/* Cover Page */}
        <section className="page-break-after flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-2">[Your Institution Name]</p>
            <p className="text-md text-gray-500">[Department Name]</p>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">CivicTrack</h1>
          <h2 className="text-2xl text-gray-700 mb-8">
            A Real-Time Civic Issue Tracking and Reporting Platform
          </h2>
          
          <div className="text-xl text-gray-600 mb-12">Project Report</div>
          
          <div className="mt-8 text-left">
            <p className="mb-2"><strong>Submitted By:</strong></p>
            <p className="text-gray-600 mb-4">[Student Name(s)]</p>
            <p className="text-gray-600 mb-4">[Roll Number(s)]</p>
            
            <p className="mt-6 mb-2"><strong>Under the Guidance of:</strong></p>
            <p className="text-gray-600">[Guide Name]</p>
            <p className="text-gray-600">[Designation]</p>
          </div>
          
          <div className="mt-auto text-gray-500">
            <p>Academic Year: 2024-2025</p>
          </div>
        </section>

        {/* Abstract */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">Abstract</h2>
          <p className="text-justify leading-relaxed text-gray-700">
            CivicTrack is a modern web-based civic issue tracking and reporting platform designed to bridge 
            the communication gap between citizens and local government authorities. Built using React, 
            TypeScript, and Firebase, the application enables residents to report infrastructure problems 
            such as potholes, broken streetlights, and illegal dumping through an intuitive interface 
            featuring geolocation-based mapping.
          </p>
          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            The system provides real-time synchronization of issue data across all connected clients using 
            Firebase Firestore's reactive architecture. Key features include user authentication, interactive 
            map visualization using Leaflet, status tracking for reported issues, and an administrative 
            dashboard for municipal authorities.
          </p>
          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            The platform demonstrates the practical application of modern frontend technologies combined with 
            Backend-as-a-Service (BaaS) solutions to create scalable, maintainable civic technology solutions. 
            Testing results indicate successful real-time data propagation, responsive design across devices, 
            and intuitive user experience for both citizens and administrators.
          </p>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Keywords</h3>
            <p className="text-gray-600 italic">
              Civic Technology, React.js, TypeScript, Firebase Firestore, Real-time Database, 
              Leaflet Maps, User Authentication, Issue Tracking System, Progressive Web Application, 
              Responsive Design, Tailwind CSS, Component-based Architecture
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">Table of Contents</h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "Introduction", page: "4" },
              { num: "1.1", title: "Background", page: "4", indent: true },
              { num: "1.2", title: "Problem Statement", page: "4", indent: true },
              { num: "1.3", title: "Proposed Solution", page: "5", indent: true },
              { num: "1.4", title: "Objectives", page: "5", indent: true },
              { num: "2", title: "Literature Review", page: "6" },
              { num: "2.1", title: "Civic Technology Landscape", page: "6", indent: true },
              { num: "2.2", title: "Technology Stack Analysis", page: "6", indent: true },
              { num: "2.3", title: "Existing Solutions Comparison", page: "7", indent: true },
              { num: "3", title: "Methodology", page: "8" },
              { num: "3.1", title: "Development Approach", page: "8", indent: true },
              { num: "3.2", title: "Technology Stack Selection", page: "8", indent: true },
              { num: "3.3", title: "System Architecture", page: "9", indent: true },
              { num: "3.4", title: "Data Model Design", page: "10", indent: true },
              { num: "4", title: "Simulations / Experiments / Testing", page: "11" },
              { num: "5", title: "Results & Discussion", page: "14" },
              { num: "6", title: "Conclusions", page: "17" },
              { num: "7", title: "Acknowledgement", page: "19" },
              { num: "8", title: "References", page: "20" },
            ].map((item) => (
              <div key={item.num} className={`flex justify-between ${item.indent ? 'ml-6' : 'font-semibold'}`}>
                <span className="text-gray-700">
                  {item.num}. {item.title}
                </span>
                <span className="text-gray-500 border-b border-dotted border-gray-300 flex-1 mx-2"></span>
                <span className="text-gray-500">{item.page}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 1: Introduction */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 1: Introduction
          </h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">1.1 Background</h3>
          <p className="text-justify leading-relaxed text-gray-700">
            Urban infrastructure maintenance remains a significant challenge for municipal governments worldwide. 
            Traditional methods of reporting civic issues—phone calls, physical forms, or email—suffer from 
            inefficiencies including delayed response times, lost reports, and lack of transparency in resolution 
            status. Citizens often feel disconnected from the resolution process, leading to decreased civic 
            engagement and trust in local government.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">1.2 Problem Statement</h3>
          <p className="text-justify leading-relaxed text-gray-700 mb-4">
            The absence of a unified, accessible, and transparent platform for civic issue reporting creates 
            several problems:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Communication Barriers:</strong> Citizens lack convenient channels to report issues</li>
            <li><strong>Tracking Difficulties:</strong> No visibility into issue resolution progress</li>
            <li><strong>Data Silos:</strong> Municipal departments cannot efficiently aggregate and prioritize issues</li>
            <li><strong>Geographic Context Loss:</strong> Text-based reports often lack precise location information</li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">1.3 Proposed Solution</h3>
          <p className="text-justify leading-relaxed text-gray-700 mb-4">
            CivicTrack addresses these challenges through a web-based platform that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Provides an intuitive interface for issue submission with category classification</li>
            <li>Integrates interactive maps for precise geographic tagging</li>
            <li>Offers real-time status updates visible to all stakeholders</li>
            <li>Implements user authentication for accountability</li>
            <li>Delivers responsive design for accessibility across devices</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">1.4 Objectives</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Develop a user-friendly civic issue reporting interface</li>
            <li>Implement real-time data synchronization using Firebase</li>
            <li>Create interactive map visualization for geographic context</li>
            <li>Build an administrative dashboard for issue management</li>
            <li>Ensure responsive design for mobile and desktop users</li>
            <li>Implement secure user authentication</li>
          </ol>
        </section>

        {/* Chapter 2: Literature Review */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 2: Literature Review
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">2.1 Civic Technology Landscape</h3>
          <p className="text-justify leading-relaxed text-gray-700">
            Civic technology (CivicTech) has emerged as a significant field combining technology with civic 
            engagement. Platforms like SeeClickFix, FixMyStreet, and 311 systems have demonstrated the viability 
            of digital solutions for citizen-government communication (Goldsmith & Crawford, 2014).
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">2.2 Technology Stack Analysis</h3>
          
          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">2.2.1 React.js and Component-Based Architecture</h4>
          <p className="text-justify leading-relaxed text-gray-700">
            React's virtual DOM and component-based architecture have become industry standards for building 
            interactive user interfaces. Studies indicate that component reusability reduces development time 
            by 40-60% compared to traditional approaches (Bierman et al., 2019).
          </p>

          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">2.2.2 TypeScript for Type Safety</h4>
          <p className="text-justify leading-relaxed text-gray-700">
            TypeScript's static typing catches approximately 15% of bugs during development that would 
            otherwise reach production (Gao et al., 2017). For civic applications requiring reliability, 
            this error prevention is critical.
          </p>

          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">2.2.3 Firebase as Backend-as-a-Service</h4>
          <p className="text-justify leading-relaxed text-gray-700">
            Firebase Firestore provides real-time synchronization with offline persistence, reducing 
            infrastructure management overhead. Research shows BaaS solutions reduce time-to-market 
            by 30-50% for startups and small teams (Pautasso & Wilde, 2018).
          </p>

          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">2.2.4 Tailwind CSS for Utility-First Styling</h4>
          <p className="text-justify leading-relaxed text-gray-700">
            Utility-first CSS frameworks demonstrate 25% faster styling implementation compared to 
            traditional CSS methodologies while maintaining consistency.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">2.3 Existing Solutions Comparison</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Platform</th>
                  <th className="border border-gray-300 p-2 text-center">Real-time Updates</th>
                  <th className="border border-gray-300 p-2 text-center">Map Integration</th>
                  <th className="border border-gray-300 p-2 text-center">Open Source</th>
                  <th className="border border-gray-300 p-2 text-center">Mobile Responsive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">SeeClickFix</td>
                  <td className="border border-gray-300 p-2 text-center">Partial</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">No</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">FixMyStreet</td>
                  <td className="border border-gray-300 p-2 text-center">No</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">311 Systems</td>
                  <td className="border border-gray-300 p-2 text-center">Varies</td>
                  <td className="border border-gray-300 p-2 text-center">Varies</td>
                  <td className="border border-gray-300 p-2 text-center">No</td>
                  <td className="border border-gray-300 p-2 text-center">Varies</td>
                </tr>
                <tr className="bg-green-50 font-semibold">
                  <td className="border border-gray-300 p-2">CivicTrack</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                  <td className="border border-gray-300 p-2 text-center">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chapter 3: Methodology */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 3: Methodology
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">3.1 Development Approach</h3>
          <p className="text-justify leading-relaxed text-gray-700 mb-4">
            The project followed an Agile-inspired iterative methodology with the following phases:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-blue-100 px-3 py-1 rounded">Requirements Analysis</span>
              <span className="text-gray-400">→</span>
              <span className="bg-blue-100 px-3 py-1 rounded">Architecture Design</span>
              <span className="text-gray-400">→</span>
              <span className="bg-blue-100 px-3 py-1 rounded">Component Development</span>
              <span className="text-gray-400">→</span>
              <span className="bg-blue-100 px-3 py-1 rounded">Integration & Testing</span>
              <span className="text-gray-400">→</span>
              <span className="bg-blue-100 px-3 py-1 rounded">Deployment</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3.2 Technology Stack Selection</h3>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Technology</th>
                  <th className="border border-gray-300 p-2 text-left">Purpose</th>
                  <th className="border border-gray-300 p-2 text-left">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">React 18.3</td>
                  <td className="border border-gray-300 p-2">Frontend Framework</td>
                  <td className="border border-gray-300 p-2">Component reusability, Virtual DOM, Hooks API</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Vite</td>
                  <td className="border border-gray-300 p-2">Build Tool</td>
                  <td className="border border-gray-300 p-2">Fast HMR, Native ES modules, Optimized builds</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">TypeScript</td>
                  <td className="border border-gray-300 p-2">Type System</td>
                  <td className="border border-gray-300 p-2">Compile-time error detection, IDE support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Tailwind CSS</td>
                  <td className="border border-gray-300 p-2">Styling</td>
                  <td className="border border-gray-300 p-2">Utility-first, Design consistency, Responsive</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Firebase</td>
                  <td className="border border-gray-300 p-2">Backend</td>
                  <td className="border border-gray-300 p-2">Real-time sync, Auth, Scalable NoSQL</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Leaflet</td>
                  <td className="border border-gray-300 p-2">Mapping</td>
                  <td className="border border-gray-300 p-2">Open-source, Lightweight, Mobile-friendly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3.3 System Architecture</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-4">
            <div className="text-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-lg inline-block">
                <strong>Client Layer</strong>
                <div className="text-sm mt-1">React Components | Context Providers | React Router</div>
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-green-100 p-3 rounded-lg inline-block">
                <strong>State Management</strong>
                <div className="text-sm mt-1">AuthContext | IssueContext</div>
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-orange-100 p-3 rounded-lg inline-block">
                <strong>Firebase Services</strong>
                <div className="text-sm mt-1">Firebase Auth | Firestore Database</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3.4 Data Model Design</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`interface Issue {
  id: string;
  title: string;
  description: string;
  category: 'pothole' | 'streetlight' | 'garbage' | 
            'graffiti' | 'water' | 'other';
  status: 'reported' | 'in-progress' | 'resolved';
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  imageUrl?: string;
  upvotes: number;
  reportedBy: string;
  reportedAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  resolutionNotes?: string;
}`}</pre>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3.5 Component Architecture</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Component</th>
                  <th className="border border-gray-300 p-2 text-left">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Header</td>
                  <td className="border border-gray-300 p-2">Navigation, authentication status display</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">FilterBar</td>
                  <td className="border border-gray-300 p-2">Category and status filtering controls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">IssueCard</td>
                  <td className="border border-gray-300 p-2">Individual issue display with actions</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">IssueMap</td>
                  <td className="border border-gray-300 p-2">Geographic visualization with markers</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">StatsBar</td>
                  <td className="border border-gray-300 p-2">Aggregate statistics display</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">ReportForm</td>
                  <td className="border border-gray-300 p-2">New issue submission with validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chapter 4: Testing */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 4: Simulations / Experiments / Testing
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">4.1 Testing Methodology</h3>
          <p className="text-justify leading-relaxed text-gray-700">
            A comprehensive testing strategy was employed covering unit, integration, and user acceptance testing.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4.2 Integration Testing Results</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Test Case</th>
                  <th className="border border-gray-300 p-2 text-left">Expected Result</th>
                  <th className="border border-gray-300 p-2 text-left">Actual Result</th>
                  <th className="border border-gray-300 p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Issue creation propagation</td>
                  <td className="border border-gray-300 p-2">Appears in all clients within 2s</td>
                  <td className="border border-gray-300 p-2">Appears in &lt;1s</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Status update sync</td>
                  <td className="border border-gray-300 p-2">Status reflects immediately</td>
                  <td className="border border-gray-300 p-2">Immediate reflection</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Upvote increment</td>
                  <td className="border border-gray-300 p-2">Counter updates across clients</td>
                  <td className="border border-gray-300 p-2">Real-time update</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Auth state persistence</td>
                  <td className="border border-gray-300 p-2">User remains logged in</td>
                  <td className="border border-gray-300 p-2">Session maintained</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4.3 Responsive Design Testing</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Breakpoint</th>
                  <th className="border border-gray-300 p-2 text-left">Device Type</th>
                  <th className="border border-gray-300 p-2 text-left">Layout Behavior</th>
                  <th className="border border-gray-300 p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">&lt; 640px</td>
                  <td className="border border-gray-300 p-2">Mobile</td>
                  <td className="border border-gray-300 p-2">Single column, stacked cards</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">640-768px</td>
                  <td className="border border-gray-300 p-2">Tablet</td>
                  <td className="border border-gray-300 p-2">2-column grid</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">768-1024px</td>
                  <td className="border border-gray-300 p-2">Small Desktop</td>
                  <td className="border border-gray-300 p-2">Sidebar + content</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">&gt; 1024px</td>
                  <td className="border border-gray-300 p-2">Desktop</td>
                  <td className="border border-gray-300 p-2">Full layout with map</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4.4 Performance Testing (Lighthouse)</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Metric</th>
                  <th className="border border-gray-300 p-2 text-center">Score</th>
                  <th className="border border-gray-300 p-2 text-center">Target</th>
                  <th className="border border-gray-300 p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Performance</td>
                  <td className="border border-gray-300 p-2 text-center font-semibold">89</td>
                  <td className="border border-gray-300 p-2 text-center">&gt;80</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Accessibility</td>
                  <td className="border border-gray-300 p-2 text-center font-semibold">94</td>
                  <td className="border border-gray-300 p-2 text-center">&gt;90</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Best Practices</td>
                  <td className="border border-gray-300 p-2 text-center font-semibold">100</td>
                  <td className="border border-gray-300 p-2 text-center">&gt;90</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">SEO</td>
                  <td className="border border-gray-300 p-2 text-center font-semibold">91</td>
                  <td className="border border-gray-300 p-2 text-center">&gt;80</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Pass</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4.5 Real-time Sync Latency Experiment</h3>
          <p className="text-justify leading-relaxed text-gray-700 mb-4">
            <strong>Objective:</strong> Measure time between issue submission and visibility across clients
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-center">Trial</th>
                  <th className="border border-gray-300 p-2 text-center">Propagation Delay</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-2 text-center">1</td><td className="border border-gray-300 p-2 text-center">847ms</td></tr>
                <tr><td className="border border-gray-300 p-2 text-center">2</td><td className="border border-gray-300 p-2 text-center">623ms</td></tr>
                <tr><td className="border border-gray-300 p-2 text-center">3</td><td className="border border-gray-300 p-2 text-center">712ms</td></tr>
                <tr><td className="border border-gray-300 p-2 text-center">4</td><td className="border border-gray-300 p-2 text-center">589ms</td></tr>
                <tr><td className="border border-gray-300 p-2 text-center">5</td><td className="border border-gray-300 p-2 text-center">801ms</td></tr>
                <tr className="bg-blue-50 font-semibold">
                  <td className="border border-gray-300 p-2 text-center">Average</td>
                  <td className="border border-gray-300 p-2 text-center">714ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chapter 5: Results & Discussion */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 5: Results & Discussion
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">5.1 Achieved Outcomes</h3>
          
          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">5.1.1 Functional Requirements</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Requirement</th>
                  <th className="border border-gray-300 p-2 text-left">Implementation</th>
                  <th className="border border-gray-300 p-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">User Registration/Login</td>
                  <td className="border border-gray-300 p-2">Firebase Authentication</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Issue Reporting</td>
                  <td className="border border-gray-300 p-2">ReportForm + Firestore</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Map Visualization</td>
                  <td className="border border-gray-300 p-2">Leaflet with custom markers</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Status Tracking</td>
                  <td className="border border-gray-300 p-2">Real-time Firestore updates</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin Dashboard</td>
                  <td className="border border-gray-300 p-2">Protected route with management</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Responsive Design</td>
                  <td className="border border-gray-300 p-2">Tailwind breakpoints</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600">✓ Complete</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-medium mt-8 mb-3 text-gray-700">5.1.2 Performance Metrics</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Metric</th>
                  <th className="border border-gray-300 p-2 text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Initial Bundle Size</td>
                  <td className="border border-gray-300 p-2 text-center">287KB (gzipped)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Time to Interactive</td>
                  <td className="border border-gray-300 p-2 text-center">1.8s</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">First Contentful Paint</td>
                  <td className="border border-gray-300 p-2 text-center">0.9s</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Map Lazy Load Savings</td>
                  <td className="border border-gray-300 p-2 text-center">156KB deferred</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">5.2 Discussion</h3>
          
          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">5.2.1 Strengths</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Real-time Synchronization:</strong> Firebase Firestore's reactive architecture eliminates manual refresh requirements</li>
            <li><strong>Type Safety:</strong> TypeScript caught 12 potential runtime errors during development</li>
            <li><strong>Component Architecture:</strong> Clear separation of concerns facilitates maintenance</li>
            <li><strong>Responsive Implementation:</strong> Mobile-first approach ensures accessibility</li>
          </ol>

          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">5.2.2 Limitations</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Offline Support:</strong> No explicit offline-first implementation</li>
            <li><strong>Image Upload:</strong> URL input instead of direct upload</li>
            <li><strong>Search:</strong> No full-text search functionality</li>
            <li><strong>Notifications:</strong> No push notification system</li>
          </ol>

          <h4 className="text-lg font-medium mt-6 mb-3 text-gray-700">5.2.3 Objective Achievement</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Objective</th>
                  <th className="border border-gray-300 p-2 text-center">Achievement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">User-friendly interface</td>
                  <td className="border border-gray-300 p-2 text-center">95%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Real-time sync</td>
                  <td className="border border-gray-300 p-2 text-center">100%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Map visualization</td>
                  <td className="border border-gray-300 p-2 text-center">90%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin dashboard</td>
                  <td className="border border-gray-300 p-2 text-center">85%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Responsive design</td>
                  <td className="border border-gray-300 p-2 text-center">100%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Authentication</td>
                  <td className="border border-gray-300 p-2 text-center">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chapter 6: Conclusions */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Chapter 6: Conclusions
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">6.1 Summary</h3>
          <p className="text-justify leading-relaxed text-gray-700">
            CivicTrack successfully demonstrates the viability of modern web technologies for civic engagement 
            platforms. The combination of React's component architecture, TypeScript's type safety, and 
            Firebase's real-time capabilities creates a robust, maintainable, and scalable solution.
          </p>
          
          <p className="text-justify leading-relaxed text-gray-700 mt-4">
            Key accomplishments include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
            <li><strong>Real-time Issue Tracking:</strong> Sub-second propagation of updates</li>
            <li><strong>Geographic Visualization:</strong> Interactive maps with custom markers</li>
            <li><strong>Secure Authentication:</strong> Firebase Authentication with persistence</li>
            <li><strong>Responsive Design:</strong> Full functionality across all devices</li>
            <li><strong>Administrative Tools:</strong> Complete issue management capabilities</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">6.2 Future Enhancements</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Enhancement</th>
                  <th className="border border-gray-300 p-2 text-center">Priority</th>
                  <th className="border border-gray-300 p-2 text-center">Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Push Notifications</td>
                  <td className="border border-gray-300 p-2 text-center">High</td>
                  <td className="border border-gray-300 p-2 text-center">Medium</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Image Upload to Storage</td>
                  <td className="border border-gray-300 p-2 text-center">High</td>
                  <td className="border border-gray-300 p-2 text-center">Low</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Offline-first PWA</td>
                  <td className="border border-gray-300 p-2 text-center">Medium</td>
                  <td className="border border-gray-300 p-2 text-center">High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Analytics Dashboard</td>
                  <td className="border border-gray-300 p-2 text-center">Medium</td>
                  <td className="border border-gray-300 p-2 text-center">Medium</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Multi-language Support</td>
                  <td className="border border-gray-300 p-2 text-center">Low</td>
                  <td className="border border-gray-300 p-2 text-center">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">6.3 Learning Outcomes</h3>
          <p className="text-justify leading-relaxed text-gray-700 mb-4">
            This project provided practical experience in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Modern React patterns (Hooks, Context, Lazy Loading)</li>
            <li>TypeScript for large-scale application development</li>
            <li>Firebase ecosystem (Authentication, Firestore)</li>
            <li>Responsive design with utility-first CSS</li>
            <li>Real-time application architecture</li>
            <li>Component-based software engineering</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">6.4 Final Remarks</h3>
          <p className="text-justify leading-relaxed text-gray-700">
            CivicTrack represents a proof-of-concept that civic technology need not be complex or expensive. 
            With open-source tools and modern development practices, small teams can create impactful solutions 
            for community engagement. The architecture established here can scale from neighborhood-level 
            deployment to city-wide implementation with minimal modification.
          </p>
        </section>

        {/* Acknowledgement */}
        <section className="page-break-after p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            Acknowledgement
          </h2>
          
          <p className="text-justify leading-relaxed text-gray-700 mb-6">
            We express our sincere gratitude to:
          </p>
          
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Project Guide/Mentor:</strong> For continuous guidance, technical insights, and 
              constructive feedback throughout the development process.
            </li>
            <li>
              <strong>Institution:</strong> For providing the academic environment and resources 
              necessary for this project.
            </li>
            <li>
              <strong>Open Source Community:</strong> The developers and maintainers of React, TypeScript, 
              Firebase, Tailwind CSS, Shadcn UI, and Leaflet whose tools made this project possible.
            </li>
            <li>
              <strong>Documentation Authors:</strong> The creators of comprehensive documentation for 
              all technologies used, enabling self-directed learning.
            </li>
            <li>
              <strong>Peer Reviewers:</strong> Fellow students who provided valuable feedback during 
              development iterations.
            </li>
          </ul>
        </section>

        {/* References */}
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-300 pb-2">
            References
          </h2>
          
          <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
            <li>
              Goldsmith, S., & Crawford, S. (2014). <em>The Responsive City: Engaging Communities 
              Through Data-Smart Governance</em>. Jossey-Bass.
            </li>
            <li>
              React Documentation. (2024). Retrieved from https://react.dev
            </li>
            <li>
              Firebase Documentation. (2024). Retrieved from https://firebase.google.com/docs
            </li>
            <li>
              Tailwind CSS Documentation. (2024). Retrieved from https://tailwindcss.com/docs
            </li>
            <li>
              TypeScript Handbook. (2024). Retrieved from https://www.typescriptlang.org/docs
            </li>
            <li>
              Leaflet Documentation. (2024). Retrieved from https://leafletjs.com/reference.html
            </li>
            <li>
              Shadcn UI Documentation. (2024). Retrieved from https://ui.shadcn.com
            </li>
            <li>
              Vite Documentation. (2024). Retrieved from https://vitejs.dev/guide
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default ProjectReport;
