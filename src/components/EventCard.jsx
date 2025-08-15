import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';
import { getTimeUntilEvent } from '../data/eventData';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, status }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'upcoming') {
      const updateCountdown = () => {
        const newTimeLeft = getTimeUntilEvent(event.dateTime);
        setTimeLeft(newTimeLeft);
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [event.dateTime, status]);

  const formatDate = (dateTime) => {
    return new Date(dateTime).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = () => {
    switch (status) {
      case 'upcoming': return 'from-green-500 to-emerald-600';
      case 'ongoing': return 'from-orange-500 to-amber-600';
      case 'expired': return 'from-purple-500 to-violet-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'ongoing': return 'Ongoing';
      case 'expired': return 'Completed';
      default: return 'Unknown';
    }
  };

  const handleCardClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={event.poster}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${getStatusColor()} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {getStatusText()}
        </div>
        {status === 'expired' && event.winners.length > 0 && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white p-2 rounded-full">
            <Trophy className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{formatDate(event.dateTime)}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Countdown Timer for Upcoming Events */}
        {status === 'upcoming' && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-sm font-medium text-green-600">Time Remaining</span>
            </div>
            <motion.div 
              className="grid grid-cols-4 gap-2 text-center"
              key={`${timeLeft.days}-${timeLeft.hours}-${timeLeft.minutes}-${timeLeft.seconds}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-lg font-bold text-gray-900">{timeLeft.days}</div>
                <div className="text-xs text-gray-500">Days</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-lg font-bold text-gray-900">{timeLeft.hours}</div>
                <div className="text-xs text-gray-500">Hours</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-lg font-bold text-gray-900">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-500">Min</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-lg font-bold text-gray-900">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-500">Sec</div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Registration Status for Ongoing Events */}
        {status === 'ongoing' && (
          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Registration Closed</span>
            </div>
            <p className="text-xs text-orange-600 mt-1">Event is currently in progress</p>
          </div>
        )}

        {/* Winners for Expired Events */}
        {status === 'expired' && event.winners.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Trophy className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Winners Announced</span>
            </div>
            <div className="text-xs text-gray-600">
              🥇 {event.winners[0]?.teamName}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            status === 'upcoming'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : status === 'ongoing'
              ? 'bg-orange-600 hover:bg-orange-700 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          {status === 'upcoming' && 'Register Now'}
          {status === 'ongoing' && 'View Details'}
          {status === 'expired' && 'View Results'}
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;

