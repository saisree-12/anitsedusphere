import React from 'react';

const Textarea = ({ label, placeholder }) => {

  return (
    <>
      <div className='w-[70%] flex flex-col gap-3'>
        <label className='ps-1 text-md font-semibold text-black block'>{label}</label>
        <textarea
          type='text'
          placeholder={placeholder}
          rows={5}
          className='w-full text-md border px-2 border-black rounded-md '
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
