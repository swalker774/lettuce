import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage1 from '../Assets/hero1.jpg';
import heroImage2 from '../Assets/hero2.jpg';
import heroImage3 from '../Assets/hero3.jpg';
import image1 from '../Assets/food1.jpg';
import image2 from '../Assets/food2.jpg';
import image3 from '../Assets/food3.jpg';
import image4 from '../Assets/food4.jpg';
import image5 from '../Assets/food5.jpg';
import image6 from '../Assets/food6.jpg';

const initialReviews = [
  {
    name: "Jane Doe",
    review: "The food was absolutely amazing and the service was top-notch. Highly recommend!",
    date: "July 12, 2024"
  },
  {
    name: "John Smith",
    review: "Great catering service! The presentation was beautiful and the taste was even better.",
    date: "June 23, 2024"
  },
  {
    name: "Mary Johnson",
    review: "Everything was perfect! The team went above and beyond to make our event special.",
    date: "May 5, 2024"
  }
];

const Home = ({ heroVisible }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    setReviews([...reviews, { ...newReview, date }]);
    setNewReview({ name: "", review: "" });
  };

  return (
    <>
      {heroVisible && (
        <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#b9c6ba] flex flex-col text-left pb-64">
          {/* Hero Slideshow */}
          <Carousel 
            showThumbs={false} 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={3500}
            showArrows={false}
            showStatus={false}
          >
            <div className="w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12"
              style={{
                backgroundImage: `url(${heroImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 80%',
                backgroundRepeat: 'no-repeat',
                color: '#ffffff',
                position: 'relative',
                height: '65vh',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10">
                <h1 className='text-5xl font-bold mb-4'>Lettuce Cook!</h1>
                <p className='text-lg'>
                  From intimate gatherings to grand celebrations, our catering services provide personalized menus and exquisite flavors to make your event unforgettable.
                </p>
              </div>
            </div>
            <div className="w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12"
              style={{
                backgroundImage: `url(${heroImage2})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 70%',
                backgroundRepeat: 'no-repeat',
                color: '#ffffff',
                position: 'relative',
                height: '65vh',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10">
                <h1 className='text-5xl font-bold mb-4'>Lettuce Cook!</h1>
                <p className='text-lg'>
                From intimate gatherings to grand celebrations, our catering services provide personalized menus and exquisite flavors to make your event unforgettable.
                </p>
              </div>
            </div>
            <div className="w-full min-h-[400px] flex flex-col justify-center items-left text-left p-12"
              style={{
                backgroundImage: `url(${heroImage3})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 35%',
                backgroundRepeat: 'no-repeat',
                color: '#ffffff',
                position: 'relative',
                height: '65vh',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10">
                <h1 className='text-5xl font-bold mb-4'>Lettuce Cook!</h1>
                <p className='text-lg'>
                From intimate gatherings to grand celebrations, our catering services provide personalized menus and exquisite flavors to make your event unforgettable.
                </p>
              </div>
            </div>
          </Carousel>

          {/* Slideshow Section */}
          <div className="mt-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#176d1a] text-center mb-6">Check out some of our Meals!</h1>
            <div className="w-[500px] h-[500px]">
              <Carousel 
                showThumbs={false} 
                autoPlay={true} 
                infiniteLoop={true} 
                interval={3000}
                showArrows={true}
                showStatus={false}
              >
                <div>
                  <img src={image1} alt="Delicious Food 1" className="rounded-lg" />
                </div>
                <div>
                  <img src={image2} alt="Delicious Food 2" className="rounded-lg" />
                </div>
                <div>
                  <img src={image3} alt="Delicious Food 3" className="rounded-lg" />
                </div>
                <div>
                  <img src={image4} alt="Delicious Food 4" className="rounded-lg" />
                </div>
                <div>
                  <img src={image5} alt="Delicious Food 5" className="rounded-lg" />
                </div>
                <div>
                  <img src={image6} alt="Delicious Food 6" className="rounded-lg" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="pt-44 pb-12 mt-16">
            <h2 className="text-4xl font-bold text-[#176d1a] text-center mb-8">Customer Reviews</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white text-[#176d1a] p-6 rounded-lg shadow-md">
                  <p className="text-xl mb-4">"{review.review}"</p>
                  <div className="text-right">
                    <p className="text-lg font-bold">{review.name}</p>
                    <p className="text-gray-600">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Review Submission Form */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h3 className="text-2xl text-[#176d1a] font-bold mb-4">Leave a Review</h3>
              <form onSubmit={handleReviewSubmit} className="bg-white text-[#176d1a] p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-bold mb-2">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={newReview.name} 
                    onChange={handleReviewChange} 
                    className="w-full p-2 border border-gray-300 rounded"
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="review" className="block text-lg font-bold mb-2">Review:</label>
                  <textarea 
                    id="review" 
                    name="review" 
                    value={newReview.review} 
                    onChange={handleReviewChange} 
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    required 
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#176d1a] text-white py-2 px-4 rounded hover:bg-[#144c13]"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
