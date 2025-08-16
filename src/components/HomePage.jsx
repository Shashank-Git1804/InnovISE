import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  LinkedinIcon,
  GithubIcon,
  Menu,
  X,
} from "lucide-react";
import { getEventsByStatus } from "../data/eventData";
import EventCard from "./EventCard";

const HomePage = () => {
  const [events, setEvents] = useState({
    upcoming: [],
    ongoing: [],
    expired: [],
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // useEffect(() => {
  //   const updateEvents = () => {
  //     setEvents({
  //       upcoming: getEventsByStatus("upcoming"),
  //       ongoing: getEventsByStatus("ongoing"),
  //       expired: getEventsByStatus("expired"),
  //     });
  //   };
  //   updateEvents();
  //   const interval = setInterval(updateEvents, 60000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const updateEvents = () => {
      const upcoming = getEventsByStatus("upcoming")
        .filter((event) => event.dateTime || event.startTime) // only keep events with valid date
        .sort((a, b) => {
          const dateA = new Date(a.dateTime || a.startTime);
          const dateB = new Date(b.dateTime || b.startTime);
          return dateA - dateB; // ascending: soonest first
        });

      setEvents({
        upcoming,
        ongoing: getEventsByStatus("ongoing"),
        expired: getEventsByStatus("expired"),
      });
    };

    updateEvents();
    const interval = setInterval(updateEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-[clamp(14px,1.2vw,18px)]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative" id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <a href="#header">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
              </a>
              <a href="#header">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  InnovISE
                </h1>
              </a>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 text-sm lg:text-base font-medium">
              {[
                { label: "Upcoming Events", href: "#upcoming_events" },
                { label: "Ongoing Events", href: "#ongoing_events" },
                { label: "Past Events", href: "#past_events" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="relative px-3 py-1.5 rounded-full text-gray-700 hover:text-white transition-colors
                 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
                 shadow-sm hover:shadow-md"
                >
                  {item.label}
                  {/* Optional underline animation */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-600 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
          >
            <ul className="flex flex-col items-center py-4 space-y-3">
              {[
                { label: "Upcoming Events", href: "#upcoming_events" },
                { label: "Ongoing Events", href: "#ongoing_events" },
                { label: "Past Events", href: "#past_events" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <li key={idx} className="w-full flex justify-center">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative px-4 py-2 rounded-full text-gray-700 hover:text-white 
                       bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
                       shadow-sm hover:shadow-md w-11/12 text-center transition-all"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </header>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Events
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing events, workshops, and competitions designed to
              enhance your skills and expand your network.
            </p>
          </motion.div>

          {/* Event lists */}
          {[
            {
              label: "Upcoming Events",
              id: "upcoming_events",
              icon: Calendar,
              color: "green",
              data: events.upcoming,
              status: "upcoming",
            },
            {
              label: "Ongoing Events",
              id: "ongoing_events",
              icon: Clock,
              color: "orange",
              data: events.ongoing,
              status: "ongoing",
            },
            {
              label: "Past Events",
              id: "past_events",
              icon: Users,
              color: "purple",
              data: events.expired,
              status: "expired",
            },
          ].map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.label}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <Icon
                    className={`w-6 sm:w-8 h-6 sm:h-8 text-${section.color}-600 mr-3`}
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {section.label}
                  </h3>
                  <div
                    className={`ml-4 bg-${section.color}-100 text-${section.color}-800 px-3 py-1 rounded-full text-sm sm:text-base font-medium`}
                  >
                    {section.data.length} Events
                  </div>
                </div>

                {section.data.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.data.map((event, eventIdx) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        status={section.status}
                        className={
                          // 🔥 Highlight only the first upcoming event
                          section.status === "upcoming" && eventIdx === 0
                            ? "border-2 border-red-500 shadow-lg"
                            : ""
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-200">
                    <Icon className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-base sm:text-lg">
                      No {section.label.toLowerCase()} at the moment
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About Section - Redesigned and moved to the end */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about InnovISE and the team behind this platform
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-1 gap-16 mb-20">
            {/* InnovISE Club */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl sm:text-2xl">
                    I
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  InnovISE Club
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                InnovISE is a premier technology and innovation club formed by
                the ISE (Information Science and Engineering) department of AMC
                Engineering College. We are dedicated to fostering creativity,
                learning, and collaboration among students and professionals.
                Our club organizes cutting-edge events, workshops, and
                competitions that bridge the gap between theoretical knowledge
                and practical application.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    number: "50+",
                    label: "Events Organized",
                    color: "text-blue-600",
                  },
                  {
                    number: "1000+",
                    label: "Members",
                    color: "text-purple-600",
                  },
                  {
                    number: "25+",
                    label: "Workshops",
                    color: "text-green-600",
                  },
                  {
                    number: "10+",
                    label: "Competitions",
                    color: "text-orange-600",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 text-center"
                  >
                    <div
                      className={`text-lg sm:text-xl md:text-2xl font-bold ${item.color} mb-1`}
                    >
                      {item.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* //NOTE - Do not delete */}
            {/* Creator Section */}
            {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-6 sm:p-8 lg:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg sm:text-xl">SP</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Shashank P</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">Website Creator</p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              This website was crafted by Shashank P, a passionate full-stack developer and technology enthusiast. With expertise in React, Node.js, and cloud platforms, Shashank brings innovative digital solutions to life.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-8">
              {[
                "Full-Stack Developer",
                "React & Node.js Expert",
                "Cloud Platform Specialist",
                "UX/UI Focused",
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">{skill}</span>
                </div>
              ))}
            </div> */}

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-xl transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-xl transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-xl transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div> */}
            {/* //NOTE - Do not delete */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm sm:text-base">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold">InnovISE</h3>
              </div>
              <p className="text-gray-400">
                Fostering innovation and excellence in technology education.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Contact Info
              </h4>
              <p className="text-gray-400">
                {/* Email: info@innovise.club<br />
                Phone: +1 (555) 123-4567 */}
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    aria-label="LinkedIn"
                    className=" text-white-900 p-1 rounded-m transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#contact"
                    aria-label="Twitter"
                    className=" text-white-900 p-1 rounded-m transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <pre>
              &copy; 2025 InnovISE. All rights reserved. | <br />
              Developed by Shashank P{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <a href="https://www.linkedin.com/in/shashank-p1804?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <LinkedinIcon className="w-3 h-3" />
                </a>{" "}
                <a href="https://github.com/Shashank-Git1804">
                  <GithubIcon className="w-3 h-3" />
                </a>
              </div>
            </pre>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
