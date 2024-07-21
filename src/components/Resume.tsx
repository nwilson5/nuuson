import React from 'react';
import Link from 'next/link';

function Resume() {
  return (
    <object 
        className="w-full h-full"
        style={{minHeight: "550px"}}
        data="/resume/Nicholas-Wilson-resume-v.pdf" 
        type="application/pdf"
    >
        <p>Unable to embed PDF in your browser.<br />
        <Link href="/resume/Nicholas-Wilson-resume-v.pdf">Download Resume</Link> instead.</p>
    </object>
  );
}

export default Resume;