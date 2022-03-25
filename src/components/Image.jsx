import React from "react";
import download from './download.jpg'

const Image = () => {
  return (
    <>
      <div className="display-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi magni
        delectus iste incidunt. Fuga, in odio assumenda ab minima deleniti enim
        vero incidunt veniam. Tenetur, maiores provident? Numquam, omnis
        commodi.
      </div>
      <img src={download} className="h-50 w-25" alt="fuegos-artificiales" />
    </>
  );
};

export default Image;
