import React from 'react'

export default function Button() {
  return (
    <div>
      <button
        type="button"
        class="py-2.5 w-full px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Submit
      </button>
    </div>
  );
}
