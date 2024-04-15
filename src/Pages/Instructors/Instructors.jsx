import { useEffect, useState } from "react";
import RowIns from "./RowIns";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  // const [instructors, setInstructor] = useState([])
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
          <title>Instructors || SpeakUp</title>
        </Helmet>
      </div>
      <div>
        <h1 className="text-3xl text-center font-semibold">Mentors Team </h1>
        {/* <h1 className="text-3xl">Mentors Team </h1> */}
      </div>
    </div>
  );
};

export default Instructors;
