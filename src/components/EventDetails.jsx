// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   Users,
//   CheckCircle,
//   XCircle,
//   AlertCircle,
//   Trophy,
//   Download,
//   ExternalLink,
//   QrCode,
//   NetworkIcon,
//   NotebookIcon
// } from 'lucide-react';
// import { eventData, getEventStatus, getTimeUntilEvent } from '../data/eventData';

// const EventDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [status, setStatus] = useState('');
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [showQR, setShowQR] = useState(false);
//   const [showResults, setShowResults] = useState(false);

//   const hasResults = (event) => {
//     if (!event || !Array.isArray(event.winners) || event.winners.length === 0) {
//       return false;
//     }
//     return event.winners.some(
//       (w) =>
//         w.teamName &&
//         w.teamName.trim() !== '' &&
//         Array.isArray(w.members) &&
//         w.members.length > 0
//     );
//   };

//   useEffect(() => {
//     const foundEvent = eventData.find(e => e.id === parseInt(id));
//     if (foundEvent) {
//       setEvent(foundEvent);
//       setStatus(getEventStatus(foundEvent.dateTime));
//     }
//   }, [id]);

//   useEffect(() => {
//     if (event && status === 'upcoming') {
//       const updateCountdown = () => {
//         const newTimeLeft = getTimeUntilEvent(event.dateTime);
//         setTimeLeft(newTimeLeft);
//       };
//       updateCountdown();
//       const interval = setInterval(updateCountdown, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [event, status]);

//   const formatDate = (dateTime) => {
//     return new Date(dateTime).toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getStatusColor = () => {
//     switch (status) {
//       case 'upcoming': return 'text-green-600 bg-green-50 border-green-200';
//       case 'ongoing': return 'text-orange-600 bg-orange-50 border-orange-200';
//       case 'expired': return 'text-purple-600 bg-purple-50 border-purple-200';
//       default: return 'text-gray-600 bg-gray-50 border-gray-200';
//     }
//   };

//   const getStatusText = () => {
//     switch (status) {
//       case 'upcoming': return 'Registration Open';
//       case 'ongoing': return 'Event in Progress';
//       case 'expired': return 'Event Completed';
//       default: return 'Unknown Status';
//     }
//   };

//   const handleGoogleFormRegistration = () => {
//     if (status === 'upcoming') {
//       window.open(event.googleFormLink, '_blank');
//     }
//   };

//   const handleQRRegistration = () => {
//     if (status === 'upcoming') {
//       setShowQR(true);
//     }
//   };

//   const handleViewResults = () => {
//     setShowResults(true);
//   };

//   const downloadCertificate = (certificatePath) => {
//     const link = document.createElement('a');
//     link.href = certificatePath;
//     link.download = certificatePath.split('/').pop();
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   if (!event) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading event details...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <button
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span>Back to Events</span>
//             </button>
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold">I</span>
//               </div>
//               <h1 className="text-xl font-bold text-gray-900">InnovISE</h1>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Event Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
//         >
//           <div className="relative">
//             <motion.img
//               initial={{ scale: 1.05, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               src={event.poster}
//               alt={event.title}
//               className="w-full h-auto object-contain max-h-96"
//             />
//             <div className={`absolute top-6 right-6 px-4 py-2 rounded-full border ${getStatusColor()} font-medium backdrop-blur-sm`}>
//               {getStatusText()}
//             </div>
//           </div>

//           <div className="p-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>

//             <div className="flex items-center text-gray-600 mb-6">
//               <Calendar className="w-5 h-5 mr-3" />
//               <span className="text-lg">{formatDate(event.dateTime)}</span>
//             </div>

//             <p className="text-gray-700 text-lg leading-relaxed mb-6">
//               {event.description}
//             </p>

//             {/* Countdown */}
//             {status === 'upcoming' && (
//               <div className="mb-6">
//                 <div className="flex items-center mb-4">
//                   <Clock className="w-5 h-5 mr-3 text-green-600" />
//                   <span className="text-lg font-semibold text-green-600">Time Remaining</span>
//                 </div>
//                 <div className="grid grid-cols-4 gap-4">
//                   {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
//                     <div key={idx} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
//                       <div className="text-3xl font-bold text-green-600">{timeLeft[unit]}</div>
//                       <div className="text-sm text-green-500 font-medium">
//                         {unit.charAt(0).toUpperCase() + unit.slice(1)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="space-y-4">
//               {status === 'upcoming' && (
//                 <>
//                   <button
//                     onClick={handleGoogleFormRegistration}
//                     className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     <span>Register via Google Form</span>
//                   </button>
//                   <button
//                     onClick={handleQRRegistration}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
//                   >
//                     <QrCode className="w-5 h-5" />
//                     <span>Register via QR Code</span>
//                   </button>
//                 </>
//               )}

//               {status === 'ongoing' && (
//                 <>
//                   <button
//                     disabled
//                     className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 cursor-not-allowed"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     <span>Registration Closed</span>
//                   </button>
//                   <button
//                     disabled
//                     className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 cursor-not-allowed"
//                   >
//                     <QrCode className="w-5 h-5" />
//                     <span>QR Registration Closed</span>
//                   </button>
//                 </>
//               )}

//               {status === 'expired' && (
//                 hasResults(event) ? (
//                   <button
//                     onClick={handleViewResults}
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
//                   >
//                     <Trophy className="w-5 h-5" />
//                     <span>View Results</span>
//                   </button>
//                 ) : (
//                   <div className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2">
//                     <AlertCircle className="w-5 h-5" />
//                     <span>Results on the way</span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </motion.div>

//         {/* Example Sections */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           <Section title="Instructions" icon={<AlertCircle className="w-6 h-6 text-cyan-600 mr-3" />} items={event.instructions} />
//           <Section title="Do's & Don'ts" items={event.dosAndDonts} isDosDonts />
//           <Section title="General Rules" icon={<Users className="w-6 h-6 text-purple-600 mr-3" />} items={event.generalRules} />
//           <Section title="Event Structure" icon={<NetworkIcon className="w-6 h-6 text-orange-500 mr-3" />} items={event.eventStructure} />
//           <Section title="Prerequisites" icon={<NotebookIcon className="w-6 h-6 text-teal-600 mr-3" />} items={event.prerequisites} />
//         </div>
//       </div>

//       {/* QR Code Modal */}
//       {showQR && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 max-w-md w-full">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Scan to Register</h3>
//             <div className="flex justify-center mb-6">
//               <img src={event.qrCodeImage} alt="QR Code" className="w-64 h-64" />
//             </div>
//             <p className="text-gray-600 text-center mb-6">Scan this QR code with your phone to register for the event</p>
//             <button onClick={() => setShowQR(false)} className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}

//       {/* Results Modal */}
//       {showResults && status === 'expired' && hasResults(event) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-3xl font-bold text-gray-900">🏆 Winners</h3>
//               <button onClick={() => setShowResults(false)} className="text-gray-400 hover:text-gray-600">✕</button>
//             </div>
//             <div className="space-y-6">
//               {event.winners.map((winner, index) => (
//                 <div key={index} className="border border-gray-200 rounded-xl p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
//                         winner.place === '1st' ? 'bg-yellow-500' :
//                         winner.place === '2nd' ? 'bg-gray-400' : 'bg-orange-600'
//                       }`}>
//                         {winner.place === '1st' ? '🥇' : winner.place === '2nd' ? '🥈' : '🥉'}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-bold text-gray-900">{winner.place} Place</h4>
//                         <p className="text-lg font-semibold text-gray-700">{winner.teamName || 'Team Name Coming Soon'}</p>
//                       </div>
//                     </div>
//                     {winner.certificate ? (
//                       <button onClick={() => downloadCertificate(winner.certificate)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
//                         <Download className="w-4 h-4" />
//                         <span>Certificate</span>
//                       </button>
//                     ) : (
//                       <button disabled className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-not-allowed">
//                         <Download className="w-4 h-4" />
//                         <span>Coming Soon</span>
//                       </button>
//                     )}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 mb-2">Team Members:</p>
//                     {Array.isArray(winner.members) && winner.members.length > 0 ? (
//                       <div className="flex flex-wrap gap-2">
//                         {winner.members.map((member, memberIndex) => (
//                           <span key={memberIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
//                             {member}
//                           </span>
//                         ))}
//                       </div>
//                     ) : (
//                       <p className="text-gray-500 italic">Members info coming soon</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Section = ({ title, icon, items, isDosDonts = false }) => (
//   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl shadow-lg p-6">
//     <div className="flex items-center mb-4">
//       {icon}
//       <h2 className="text-xl font-bold text-gray-900">{title}</h2>
//     </div>
//     <ul className="space-y-3">
//       {items.map((item, index) => {
//         if (isDosDonts) {
//           return (
//             <li key={index} className="flex items-start space-x-3">
//               {item.startsWith('DO:') ? (
//                 <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//               ) : (
//                 <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
//               )}
//               <span className={item.startsWith('DO:') ? 'text-green-700' : 'text-red-700'}>
//                 {item}
//               </span>
//             </li>
//           );
//         }
//         return (
//           <li key={index} className="flex items-start space-x-3">
//             <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
//             <span className="text-gray-700">{item}</span>
//           </li>
//         );
//       })}
//     </ul>
//   </motion.div>
// );

// export default EventDetails;

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
} from "lucide-react";
import {
  eventData,
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

  const hasResults = (event) => {
    if (!event || !Array.isArray(event.winners) || event.winners.length === 0) {
      return false;
    }
    return event.winners.some(
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
    if (event && status === "upcoming") {
      const updateCountdown = () => {
        setTimeLeft(getTimeUntilEvent(event.dateTime));
      };
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [event, status]);

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
                onClick={() => downloadFile(event.poster)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Poster</span>
              </button>
            </div>

            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-5 h-5 mr-3" />
              <span>{formatDate(event.dateTime)}</span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              {event.description}
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

        {/* Event Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section
            title="Instructions"
            icon={<AlertCircle className="w-6 h-6 text-blue-600 mr-3" />}
            items={event.instructions}
          />
          <Section
            title="Do's & Don'ts"
            icon={<ListChecks className="w-6 h-6 text-orange-500 mr-3" />}
            items={event.dosAndDonts}
            isDosDonts
          />
          <Section
            title="General Rules"
            icon={<ClipboardList className="w-6 h-6 text-teal-500 mr-3" />}
            items={event.generalRules}
          />
          <Section
            title="Event Structure"
            icon={<Layers className="w-6 h-6 text-indigo-600 mr-3" />}
            items={event.eventStructure}
          />
          <Section
            title="Prerequisites"
            icon={<Package className="w-6 h-6 text-pink-500 mr-3" />}
            items={event.prerequisites}
          />
        </div>
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
                onClick={() => downloadFile(event.poster)}
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
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    aria-modal="true"
    role="dialog"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          🏆 Winners
        </h3>
        <button
          onClick={() => setShowResults(false)}
          className="text-gray-400 hover:text-gray-600 text-lg sm:text-xl"
        >
          ✕
        </button>
      </div>

      {/* Winners List */}
      <div className="space-y-6">
        {event.winners.map((winner, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-orange-50"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Place Badge */}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl ${
                    winner.place === "1st"
                      ? "bg-yellow-500"
                      : winner.place === "2nd"
                      ? "bg-gray-400"
                      : "bg-orange-600"
                  }`}
                >
                  {winner.place === "1st"
                    ? "🥇"
                    : winner.place === "2nd"
                    ? "🥈"
                    : "🥉"}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {winner.place} Place
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                    {winner.teamName || "Team Name Coming Soon"}
                  </p>
                </div>
              </div>

              {/* Certificate Button */}
              {winner.certificate ? (
                <button
                  onClick={() => downloadFile(winner.certificate)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center space-x-2 text-xs sm:text-sm md:text-base transition-colors"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Certificate</span>
                </button>
              ) : (
                <button
                  disabled
                  className="bg-gray-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center space-x-2 text-xs sm:text-sm md:text-base cursor-not-allowed"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Coming Soon</span>
                </button>
              )}
            </div>

            {/* Team Members */}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2">
                Team Members:
              </p>
              {Array.isArray(winner.members) && winner.members.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {winner.members.map((member, memberIndex) => (
                    <span
                      key={memberIndex}
                      className="bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-gray-700 border"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  Members info coming soon
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
)}

    </div>
  );
};

export default EventDetails;
