import React from 'react';
import Image1 from "../../../assets/images/img2.png";
import Image2 from "../../../assets/images/img3.jpg";
import Image3 from "../../../assets/images/img4.webp";
import Image4 from "../../../assets/images/img5.jpg";
import Image5 from "../../../assets/images/travel.jpg";
import Box from "./Box";

const SectionTwo = () => {
    const boxData = [
        {
         id: 1,
         img: Image1,
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 2,
            img: Image2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
            id: 3,
            img: Image3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
            id: 4,
            img: Image4,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
            id: 5,
            img: Image5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           
    ];
  return (
    <div className='flex flex-wrap items-center justify-center gap-5 px-8 py-4 small:flex-col small:gap-8 small:py-12 mobile:gap-8 tablet:gap-4 tabletlg:gap-6 laptop:flex-row laptop:py-12'>
         {boxData?.map((box) => (
           <Box id={box?.id} key={box?.id} image={box.img} text={box.text} />
         ))}
        
    </div>
  );
};

export default SectionTwo;