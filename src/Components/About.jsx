import React from 'react';
import joanImage from '../Assets/joan.jpg'; 

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#b9c6ba] flex flex-col items-center text-[#176d1a] text-center py-36 px-6">
      <h1 className="text-5xl font-bold mb-8">About Us</h1>
      <p className="text-lg max-w-4xl mb-4">
        Lettuce Cook was founded in 2015 by a group of food enthusiasts who shared a passion for creating memorable dining experiences. Our journey began in a small kitchen, where we experimented with various cuisines and flavors to bring something unique to the table. Over the years, our dedication to quality and creativity has allowed us to grow and serve a diverse clientele.
      </p>
      <p className="text-lg max-w-4xl mb-4">
        From humble beginnings, we have expanded our services to cater to intimate gatherings and grand celebrations alike. Our team of experienced chefs and event planners work tirelessly to ensure that each event is a success, leaving our clients and their guests with lasting impressions.
      </p>
      <p className="text-lg max-w-4xl mb-4">
        At Lettuce Cook, we believe that food is not just about sustenance, but a way to bring people together. Our personalized menus are crafted with care, using the freshest ingredients and innovative techniques. Whether it's a wedding, corporate event, or a casual get-together, we strive to make every occasion special.
      </p>
      <p className="text-lg max-w-4xl mb-16">
        Our commitment to excellence has earned us a loyal following and numerous accolades in the catering industry. We are proud of our journey and excited about the future, as we continue to explore new culinary horizons and create unforgettable experiences for our clients.
      </p>

      <h2 className="text-4xl font-bold mb-8">Meet Joan</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-4xl">
        <img src={joanImage} alt="Joan" className="w-72 h-88 rounded-full mb-6 lg:mb-0 lg:mr-6"/>
        <div className="text-lg">
          <p className="mb-4">
            Joan Smith, the heart and soul behind Lettuce Cook, has always had a love for the culinary arts. Growing up in a family that cherished homemade meals, Joan developed a keen sense of taste and a talent for creating delicious dishes. Her journey in the culinary world began at a young age, and she honed her skills at some of the most prestigious culinary schools and restaurants.
          </p>
          <p className="mb-4">
            With over 20 years of experience, Joan's vision for Lettuce Cook was to create a catering service that offers not just food, but an experience. Her innovative approach and attention to detail have set a new standard in the industry. Joan's passion for perfection is evident in every dish that leaves the kitchen.
          </p>
          <p>
            Under her leadership, Lettuce Cook has grown into a beloved catering company known for its exceptional service and mouth-watering menus. Joan continues to inspire her team with her creativity and dedication, ensuring that every event is nothing short of extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
