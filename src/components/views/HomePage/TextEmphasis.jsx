import React, { useState, useEffect } from "react";

const TextEmphasis = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const divWidth = document.getElementById('myDiv').clientWidth;
    setWidth(divWidth);
  }, []);

  return (
    <>
      <div id="myDiv" style={{ width: `${width}px` }}>
        {/* Your content here */}
        
      </div>
    </>
  );
};

export default TextEmphasis;
