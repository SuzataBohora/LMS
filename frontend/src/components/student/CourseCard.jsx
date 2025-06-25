import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);


  const educatorName = course?.educator?.name || 'Unknown Educator';
  const rating = calculateRating(course) || 0;
  const ratingCount = course?.courseRatings?.length || 0;
  const displayPrice = course?.coursePrice 
    ? (course.coursePrice - (course.discount * course.coursePrice / 100)).toFixed(2)
    : '0.00';

  return (
    <Link 
      to={`course/${course?._id || ''}`} 
      onClick={() => window.scrollTo(0, 0)}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img 
        className='w-full' 
        src={course?.courseThumbnail || assets.course_placeholder} 
        alt={course?.courseTitle || 'Course thumbnail'} 
      />
      <div className='pt-3 text-left'>
        <h3 className='text-base font-semibold'>{course?.courseTitle || 'Untitled Course'}</h3>
        <p className='text-gray-500'>{educatorName}</p>
        <div className='flex items-center space-x-2'>
          <p>{rating.toFixed(1)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                alt=""
                className='w-3.5 h-3.5'
              />
            ))}
          </div>
          <p className='text-gray-500'>({ratingCount})</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>
          {currency}{displayPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;