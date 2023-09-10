import React from "react";

const MoreCondition = ({windIs,humidityIs,pressureIs,uvIs},) => {
  let updateData = null;
  let updateTitle = null;
  const nameData = ["wind speed","humidity","pressure","uv Index"]
  const data = [windIs,humidityIs,pressureIs,uvIs]
  data.forEach((e,index)=>{
    if (e===undefined) e=undefined;
    else {
      updateData = e ;
      updateTitle = nameData[index] ;
      if(updateTitle==="pressure") updateData= `${updateData} mb`;
      else if(updateTitle==="wind speed") updateData= `${updateData} km/h`;
      else if(updateTitle==="humidity") updateData= `${updateData}%`;
    }
})
  return (
    <>
      <div className="lastData">
        <p>{updateTitle}</p>
        <span>{updateData}</span>
      </div>
    </>
  );
};

export default MoreCondition;
