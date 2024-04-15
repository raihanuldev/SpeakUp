import { useEffect, useState } from "react";
import RowIns from "./RowIns";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const { data: instructor = [] } = useQuery({
    queryKey: "instructor",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  return (
    <div className="mt-[6rem]">
      <div>
        <Helmet>
          <title>Mentors || SpeakUp</title>
        </Helmet>
      </div>
      <div>
        <h1 className="text-3xl text-center font-semibold">Mentors Team </h1>
        <div className="card w-96 bg-base-200 shadow-xl flex flex-col items-center p-5 transform transition-all duration-1000 hover:scale-105">
          <div className="avatar flex items-center justify-center ">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title">Raihanul Islam</h2>
            <h2>senior web Mentor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
