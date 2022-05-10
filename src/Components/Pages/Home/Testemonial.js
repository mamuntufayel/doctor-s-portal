import React from "react";
import PeopleComment from "./PeopleComment";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import icon from "../../../assets/icons/quote.svg";

const Testemonial = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="my-8 ml-4">
          <h5 className="text-secondary text-sm font-bold">Testimonial</h5>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={icon} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <PeopleComment
          comment="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          place="California"
          img={people1}
        ></PeopleComment>
        <PeopleComment
          comment="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          place="California"
          img={people2}
        ></PeopleComment>
        <PeopleComment
          comment="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          name="Winson Herry"
          place="California"
          img={people3}
        ></PeopleComment>
      </div>
    </section>
  );
};

export default Testemonial;
