import React from 'react';


const Box = ({image, text,id}) => {
  return (
    <div className= {`${id==1 || id==2 ? "w-[38vw] h-[28vw] small:w-[74vw] small:h-[53vw] mobile:w-[78vw] mobile:h-[55vw] tablet:w-[78vw] tablet:h-[54vw]  tabletlg:w-[70vw] tabletlg:h-[50vw] tabletxl:w-[68vw] tabletxl:h-[50vw] laptop:w-[40vw] laptop:h-[28vw]  " : "w-[25vw] h-[28vw] small:w-[60vw] small:h-[53vw] mobile:w-[64vw] mobile:h-[55vw]  tablet:w-[60vw] tablet:h-[54vw] tabletlg:w-[48vw] tabletlg:h-[48vw] tabletxl:w-[46vw] tabletxl:h-[50vw] laptop:w-[26vw] laptop:h-[28vw]  "} bg-white`} >
        <img className=' w-full h-4/5 ' src={image} alt="" />
        <p className=' text-black  bg-white text-lg small:text-base mobile:text-base tablet:text-base tabletlg:text-lg tabletxl:text-lg'>{text}</p>
    </div>
  );
};

export default Box; 