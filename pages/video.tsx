import {
	NextPage,
  } from "next";

  
  
  
  const video: NextPage = () => {
  
  
  
  
  
  
	return (
	<div className="flex flex-col gap-8">
		<video width="750" height="500" controls autoPlay={true} >
      <source src="./assets/1.mp4" type="video/mp4"/>
</video>
<video width="750" height="500" controls autoPlay={false} >
      <source src="./assets/2.mp4" type="video/mp4"/>
</video>
<video width="750" height="500" controls autoPlay={false} >
      <source src="./assets/bishamad.mp4" type="video/mp4"/>
</video>
	</div>
	);
  };
  

  
  export default video;
  
