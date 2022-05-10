import React from "react";

const PeopleComment = ({ img, comment, name, place }) => {
  return (
    <div className="card  shadow-xl mx-6">
      <div className="card-body">
        <p>{comment}</p>
        <div className="flex justify-around aligned-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h3 className=" font-bold">{name}</h3>
            <p>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleComment;
