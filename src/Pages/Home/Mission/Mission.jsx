import React from "react";

const Mission = () => {
  return (
    <div>
      <p className="text-center text-3xl font-bold my-6">Our Mission_</p>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
        <img className="rounded-lg " src="mission.jpg" alt="" />
        <div className="font-semibold ">
          <p className="p-5 mb-3 bg-base-300 rounded-lg">
            <span className="text-primary">Why:</span> We are passionate about
            empowering individuals to transform their lives through the power of
            coding. We believe that everyone should have access to high-quality,
            affordable coding education, regardless of their background or
            experience. instructors are always available to guide and mentor our students,
          </p>
          <p className="p-5 mb-3 bg-base-300 rounded-lg">
            <span className="text-primary">What:</span> We provide a comprehensive range of online
            programming courses, instructors are always available to guide and mentor our students, from beginner-level Web Development to advanced
            CSE Fundamentals and Advanced Programming Courses. Our courses are
            designed to be engaging, effective, and tailored to the needs of
            today's learners.
          </p>
          <p className="p-5  bg-base-300 rounded-lg">
            <span className="text-primary">How:</span> We nurture our students in a personalized and
            supportive environment that fosters confidence and success. Our
            friendly and dedicated instructors are always available to guide and
            mentor our students, ensuring they receive the support they need to
            achieve their coding goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
