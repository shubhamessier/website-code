import React from "react";
import "./AboutStyle.css";

const ImageTextComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent-600 p-20">
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1716436330152-a58390897652?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover rounded-2xl mb-40"
        />
      </div>
      <div className="flex-1">
        <div className="bg-gray-800 p-20 rounded-2xl">
          <h3 className="text-3xl font-bold mb-20 text-white">ANTI.ZERO</h3>
          <p className="text-lg text-gray-400 mb-20">
            Our first Indigenously developed solution against Artificial
            Intelligence, capable of mitigating browser based threats from any
            system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
