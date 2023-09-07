import React from "react";
import Field from "./Field";
import Button from "../Button/Button";

export default function Fieldbox(props) {
  return (
    <div className="flex justify-center items-center mx-auto  h-[700px]">
      <div className="flex flex-col text-lg ">
        <div className="mb-4 ">
          <Field element="Nitrogen" />
        </div>
        <div className="mb-4">
          <Field element="Phosphorus" />
        </div>
        <div className="mb-4">
          <Field element="Pottasium" />
        </div>
        <div className="mb-4">
          <Field element="Temperature" />
        </div>
        <div className="mb-4">
          <Field element="Humidity" />
        </div>
        <div className="mb-4">
          <Field element="pH" />
        </div>
        <div className="mb-4">
          <Field element="Rainfall(in mm)" />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
