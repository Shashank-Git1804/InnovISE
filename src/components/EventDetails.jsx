import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  AlertCircle,
  Trophy,
  Download,
  ExternalLink,
  QrCode,
  CheckCircle,
  XCircle,
  ListChecks,
  ClipboardList,
  Layers,
  Package,
  Clock10Icon,
  Upload,
  Mic,
  Palette,
  FileText,
  Scale,
} from "lucide-react";
import {
  eventData,
  getEventsByStatus,
   getEventStatus,
  getTimeUntilEvent,
} from "../data/eventData";

// ✅ Safe Section component
const Section = ({ title, icon, items, isDosDonts = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="bg-white rounded-xl shadow-lg p-6"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
    </div>
    <ul className="space-y-3">
      {(items ?? []).map((item, index) => {
        if (isDosDonts) {
          return (
            <li key={index} className="flex items-start space-x-3">
              {item.startsWith("DO:") ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              )}
              <span
                className={`${
                  item.startsWith("DO:") ? "text-green-700" : "text-red-700"
                } text-sm sm:text-base lg:text-lg`}
              >
                {item}
              </span>
            </li>
          );
        }
        return (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
              {item}
            </span>
          </li>
        );
      })}
    </ul>
  </motion.div>
);

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [status, setStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState({});
  const [showQR, setShowQR] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showPoster, setShowPoster] = useState(false);

  const getAllWinners = (event) => {
    if (!event?.winners) return [];
    if (Array.isArray(event.winners)) return event.winners;
    return [...(event.winners.event_1 || []), ...(event.winners.event_2 || [])];
  };

  const hasResults = (event) => {
    const winners = getAllWinners(event);
    return winners.some(
      (w) =>
        w.teamName &&
        w.teamName.trim() !== "" &&
        Array.isArray(w.members) &&
        w.members?.length > 0
    );
  };

  useEffect(() => {
    const foundEvent = eventData.find((e) => e.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
      setStatus(getEventStatus(foundEvent.dateTime));
    }
  }, [id]);

useEffect(() => {
  if (!event) return;

  const updateStatusAndCountdown = () => {
    const newStatus = getEventStatus(event);
    setStatus(newStatus);

    if (newStatus === "upcoming") {
      setTimeLeft(getTimeUntilEvent(event.dateTime));
    } else {
      setTimeLeft(null);
    }
  };

  updateStatusAndCountdown();
  const interval = setInterval(updateStatusAndCountdown, 1000);
  return () => clearInterval(interval);
}, [event]);




  const formatDate = (dateTime) =>
    new Date(dateTime).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const getStatusColor = () => {
    switch (status) {
      case "upcoming":
        return "text-green-600 bg-green-50 border-green-200";
      case "ongoing":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "expired":
        return "text-purple-600 bg-purple-50 border-purple-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "upcoming":
        return "Registration Open";
      case "ongoing":
        return "Event in Progress";
      case "expired":
        return "Event Completed";
      default:
        return "Unknown Status";
    }
  };

  const downloadFile = (filePath) => {
    if (!filePath) return;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            Loading event details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-sm sm:text-base lg:text-lg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                InnovISE
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={event.poster}
              alt={event.title}
              onClick={() => setShowPoster(true)}
              className="w-full h-auto object-contain max-h-96 cursor-pointer hover:opacity-90 transition"
            />
            <div
              className={`absolute top-6 right-6 px-4 py-2 rounded-full border ${getStatusColor()} font-medium backdrop-blur-sm`}
            >
              {getStatusText()}
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {event.title}
              </h1>
              <button
                onClick={() => downloadFile(event.poster_pdf)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Poster</span>
              </button>
            </div>

            <div className="flex items-center text-gray-600 mb-6 gap-3.5">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{formatDate(event.dateTime)}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-6 gap-3.5">
              <Clock10Icon className="w-5 h-5 mr-2" />
              <span>
                Duration : {event.duration ? event.duration : "To be Notified"}
              </span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              {event.overview}
            </p>

            {/* Countdown */}
            {status === "upcoming" && (
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-3 text-green-600" />
                  <span className="font-semibold text-green-600">
                    Time Remaining
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                    <div
                      key={idx}
                      className="text-center bg-green-50 rounded-xl p-4 border border-green-100"
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                        {timeLeft[unit]}
                      </div>
                      <div className="text-xs sm:text-sm text-green-500 font-medium">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              {status === "upcoming" && (
                <>
                  <button
                    onClick={() => window.open(event.googleFormLink, "_blank")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Register via Google Form</span>
                  </button>
                  <button
                    onClick={() => setShowQR(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <QrCode className="w-5 h-5" />
                    <span>Register via QR Code</span>
                  </button>
                </>
              )}

              {status === "expired" &&
                (hasResults(event) ? (
                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>View Results</span>
                  </button>
                ) : (
                  <div className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Results on the way</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* 🔹 Main Event Sections (Top-Level) */}
        {(event.instructions ||
          event.generalRules ||
          event.eventStructure ||
          event.prerequisites ||
          event.dosAndDonts) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {event.instructions && (
              <Section
                title="Instructions"
                icon={<AlertCircle className="w-6 h-6 text-blue-600 mr-3" />}
                items={event.instructions}
              />
            )}
            {event.dosAndDonts && (
              <Section
                title="Do's & Don'ts"
                icon={<ListChecks className="w-6 h-6 text-orange-500 mr-3" />}
                items={event.dosAndDonts}
                isDosDonts
              />
            )}
            {event.generalRules && (
              <Section
                title="General Rules"
                icon={<ClipboardList className="w-6 h-6 text-teal-500 mr-3" />}
                items={event.generalRules}
              />
            )}
            {event.eventStructure && (
              <Section
                title="Event Structure"
                icon={<Layers className="w-6 h-6 text-indigo-600 mr-3" />}
                items={event.eventStructure}
              />
            )}
            {event.prerequisites && (
              <Section
                title="Prerequisites"
                icon={<Package className="w-6 h-6 text-pink-500 mr-3" />}
                items={event.prerequisites}
              />
            )}
          </div>
        )}

        {/* 🔹 Pre-submission & On-Spot Events (Anti-Ragging Style) */}
        {event.eventCategories && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pre-submission Events */}
            {event.eventCategories.preSubmissionEvents && (
              <div className="border rounded-xl p-6 bg-white shadow-md">
                <div className="flex items-center mb-4">
                  <Upload className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Pre-Submission Events
                  </h4>
                </div>
                <ul className="space-y-4">
                  {event.eventCategories.preSubmissionEvents.map((e, idx) => (
                    <li
                      key={idx}
                      className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50"
                    >
                      <div className="flex items-center mb-2">
                        <Upload className="w-4 h-4 text-purple-500 mr-2" />
                        <p className="font-bold text-gray-900">{e.name}</p>
                      </div>
                      {e.theme && (
                        <p className="text-sm text-gray-700">
                          Theme: {e.theme}
                        </p>
                      )}
                      {e.format && (
                        <p className="text-sm text-gray-700">
                          Format: {e.format}
                        </p>
                      )}
                      {e.duration && (
                        <p className="text-sm text-gray-700">
                          Duration: {e.duration}
                        </p>
                      )}
                      {e.deadline && (
                        <p className="text-sm text-gray-700">
                          Deadline: {e.deadline}
                        </p>
                      )}
                      {e.judgingCriteria && (
                        <p className="text-sm text-gray-700">
                          Criteria: {e.judgingCriteria.join(", ")}
                        </p>
                      )}
                      {e.submissionLink && (
                        <a
                          href={e.submissionLink}
                          className="text-blue-600 font-medium underline text-sm flex items-center gap-2 mt-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Upload className="w-4 h-4 text-blue-600" />
                          Submit Here
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* On-Spot Events */}
            {event.eventCategories.onSpotEvents && (
              <div className="border rounded-xl p-6 bg-white shadow-md">
                <div className="flex items-center mb-4">
                  <Mic className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    On-Spot Events
                  </h4>
                </div>
                <ul className="space-y-4">
                  {event.eventCategories.onSpotEvents.map((e, idx) => (
                    <li
                      key={idx}
                      className="p-4 border rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50"
                    >
                      <div className="flex items-center mb-2">
                        <Mic className="w-4 h-4 text-red-500 mr-2" />
                        <p className="font-bold text-gray-900">{e.name}</p>
                      </div>
                      {e.timeLimit && (
                        <p className="text-sm text-gray-700">
                          Time Limit: {e.timeLimit}
                        </p>
                      )}
                      {e.teamSize && (
                        <p className="text-sm text-gray-700">
                          Team Size: {e.teamSize}
                        </p>
                      )}
                      {e.theme && (
                        <p className="text-sm text-gray-700">
                          Theme: {e.theme}
                        </p>
                      )}
                      {e.categories && (
                        <p className="text-sm text-gray-700">
                          Categories: {e.categories.join(" | ")}
                        </p>
                      )}
                      {e.judgingCriteria && (
                        <p className="text-sm text-gray-700">
                          Criteria: {e.judgingCriteria.join(", ")}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 🔹 Sub-Events (like AI/ML, Web Dev Bootcamp, DecodeX) */}
        {event.event_1 && event.event_1.length > 0 && (
          <div className="mt-10 space-y-10">
            {event.event_1.map((subEvent, idx) => (
              <div
                key={idx}
                className="border rounded-xl bg-white shadow-md p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {subEvent.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {subEvent.instructions && (
                    <Section
                      title="Instructions"
                      icon={
                        <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                      }
                      items={subEvent.instructions}
                    />
                  )}
                  {subEvent.dosAndDonts && (
                    <Section
                      title="Do's & Don'ts"
                      icon={
                        <ListChecks className="w-6 h-6 text-orange-500 mr-3" />
                      }
                      items={subEvent.dosAndDonts}
                      isDosDonts
                    />
                  )}
                  {subEvent.generalRules && (
                    <Section
                      title="General Rules"
                      icon={
                        <ClipboardList className="w-6 h-6 text-teal-500 mr-3" />
                      }
                      items={subEvent.generalRules}
                    />
                  )}
                  {subEvent.eventStructure && (
                    <Section
                      title="Event Structure"
                      icon={<Layers className="w-6 h-6 text-indigo-600 mr-3" />}
                      items={subEvent.eventStructure}
                    />
                  )}
                  {subEvent.prerequisites && (
                    <Section
                      title="Prerequisites"
                      icon={<Package className="w-6 h-6 text-pink-500 mr-3" />}
                      items={subEvent.prerequisites}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Scan to Register
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src={event.qrCodeImage}
                alt="QR Code"
                className="w-64 h-64"
              />
            </div>
            <p className="text-gray-600 text-center mb-6">
              Scan this QR code with your phone to register for the event
            </p>
            <button
              onClick={() => setShowQR(false)}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Poster Modal */}
      {showPoster && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[60vw] h-[60vh] flex flex-col"
          >
            <div className="absolute top-4 right-4 flex space-x-2 z-10">
              <button
                onClick={() => downloadFile(event.poster_pdf)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg flex items-center space-x-1 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button
                onClick={() => setShowPoster(false)}
                className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={event.poster}
                alt="Event Poster"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      )}

      {showResults && status === "expired" && hasResults(event) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded transition-all"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                🏆 Winners
              </h3>
              <button
                onClick={() => setShowResults(false)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-gray-700 font-semibold transition"
              >
                ✕
              </button>
            </div>

            {/* Grouped Winners */}
            {Object.entries(event.winners).map(([categoryKey, winnersList]) => {
              const formatTitle = (key) => {
                const knownLabels = {
                  preSubmissionEvents: "📤 Pre-Submission Events",
                  onSpotEvents: "🎭 On-Spot Events",
                };
                if (knownLabels[key]) return knownLabels[key];
                if (key.startsWith("Event_")) {
                  return `🎯 ${key.replace("Event_", "Event ")} Results`;
                }
                return (
                  "🏅 " +
                  key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())
                    .trim()
                );
              };

              const medalMap = {
                Winner: "🥇",
                "Runner-up": "🥈",
                "2nd Runner-up": "🥉",
              };

              // Styles for each card based on place
              const cardStyles = {
                Winner:
                  "bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-lg border-yellow-300",
                "Runner-up":
                  "bg-gradient-to-r from-gray-200 to-gray-400 shadow-md border-gray-300",
                "2nd Runner-up":
                  "bg-gradient-to-r from-orange-200 to-orange-400 shadow-md border-orange-300",
              };

              const memberBadgeStyles = {
                Winner: "bg-yellow-100 text-yellow-800 border-yellow-300",
                "Runner-up": "bg-gray-100 text-gray-800 border-gray-300",
                "2nd Runner-up":
                  "bg-orange-100 text-orange-800 border-orange-300",
              };

              return (
                <div key={categoryKey} className="mb-10">
                  {/* //NOTE - for result heading(its not needed) */}
                  {/* <h4 className="text-lg sm:text-2xl font-bold text-gray-800 mb-6">
                    {formatTitle(categoryKey)}
                  </h4> */}

                  <div className="space-y-6">
                    {winnersList.map((winner, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-2xl p-5 sm:p-7 ${
                          cardStyles[winner.place] || "bg-white shadow-sm"
                        } transition transform hover:scale-105`}
                      >
                        {/* Winner Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                          <div>
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                              {medalMap[winner.place]
                                ? `${medalMap[winner.place]} `
                                : ""}
                              {winner.place || "🏅 Position not decided"} –{" "}
                              {winner.event || "Event name pending 🕛"}
                            </h2>
                            <h1
                              className={`px-4 py-2 font-bold text-lg sm:text-xl rounded-full m-1.5 flex justify-center align-middle cursor-pointer ${
                                cardStyles[winner.place]?.includes("yellow")
                                  ? "text-yellow-700 bg-yellow-100 border-yellow-300"
                                  : cardStyles[winner.place]?.includes("gray")
                                  ? "text-gray-800 bg-gray-100 border-gray-300"
                                  : "text-orange-800 bg-orange-100 border-orange-300"
                              } border`}
                            >
                              {winner.teamName || "Team name pending 🕛"}
                            </h1>
                          </div>

                          {/* Certificate Button */}
                          {winner.certificate ? (
                            <button
                              onClick={() => downloadFile(winner.certificate)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex cursor-pointer items-center justify-center text-sm sm:text-base transition"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Certificate
                            </button>
                          ) : (
                            <button
                              disabled
                              className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center justify-center text-sm sm:text-base"
                            >
                              <span className="italic cursor-not-allowed">
                                Certificate pending
                              </span>
                            </button>
                          )}
                        </div>

                        {/* Team Members */}
                        {Array.isArray(winner.members) &&
                        winner.members.length > 0 ? (
                          <div className="mb-2">
                            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">
                              Team Members:
                            </p>
                            <div className="flex flex-wrap gap-2 cursor-pointer">
                              {winner.members.map((member, idx) => (
                                <span
                                  key={idx}
                                  className={`px-3 py-1 text-sm sm:text-base rounded-full border ${
                                    memberBadgeStyles[winner.place] ||
                                    "bg-gray-100 text-gray-800 border-gray-300"
                                  } transition transform hover:scale-105`}
                                >
                                  {member}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-500 italic text-sm sm:text-base">
                            👥 Team members info not available
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
