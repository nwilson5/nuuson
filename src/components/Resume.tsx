import React from 'react';

function Resume() {
  return (
    <object 
        className="w-full h-full"
        style={{minHeight: "550px"}}
        data="/resume/Nicholas-Wilson-resume-v.pdf" 
        type="application/pdf"
    >
        <p>Unable to display PDF file. <a href="/resume/Nicholas-Wilson-resume-v.pdf">Download</a> instead.</p>
    </object>
  );
}

export default Resume;