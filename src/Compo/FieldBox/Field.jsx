import React from "react";

export default function Field(props) {
  return (
    <div className="max-w-xs">
      <label for="test" className="font-medium text-gray-900  dark:text-white ">
        {props.element}
      </label>
      <span>
        <input
          name="test"
          id="test"
          type="text"
          className="bg-gray-50 border rounded hover:bg-gray-200  border-gray-300 float-right text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </span>
    </div>
  );
}
