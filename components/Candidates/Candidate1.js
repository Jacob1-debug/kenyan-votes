import React from 'react'

function Candidate1() {
    return (
      <>
        <h2 className="md:m-16 m-8 text-center text-[20px] AllertaStencil_font">
          Welcome to Our Candidates page
        </h2>
        <div className="md:flex justify-between xl:mx-16 mx-4 gap-8">
          <div>
            <img className="flex mx-auto" src="/images/candidate1.svg" />
            <p className="text-[#1D8346] md:text-2xl text-xl text-center my-4">About Her</p>
            <p className="Actor_font md:text-2xl text-xl text-center xl:mx-16 text-[#838383]">
              Tonnes of experience in the service industry. She has also served in the military for 4 years,
              and she aims to improve the lives of milions by appending the public policy.
            </p>
            
            
            <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
              <img src="/images/snap.svg"/><p className="flex my-auto">Snap</p>
            </button>
  
            <Link href = '/Candidate1'>
  
            <p className="mt-8 text-[#1D8346] my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1">
              {/* {" "} */}
              Learn More 
            </p>
            </Link>
  
          </div>
         
          <div>
            <img className="flex  mx-auto" src="/images/candidate2.svg" />
            <p className="text-[#1D8346] md:text-2xl text-xl text-center my-4">About Him</p>
            <p className="Actor_font md:text-2xl text-xl text-center xl:mx-16 text-[#838383]">
              The second candidate aims to improve the judicial sector as he has been involved Alot by 
              ammending the general outlook of the court while he served as the chief justice.
            </p>
            <button className="my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1 ">
              <img src="/images/snap.svg"/><p className="flex my-auto">Snap</p>
            </button>
  
            <Link href = '/aboutcandidate1'>
            <p className="mt-8 text-[#1D8346] my-6 flex gap-2 justify-center mx-auto w-[182px] bg-white border p-1">
              {/* {" "} */}
              Learn More 
            </p>
            </Link>
            
          </div>
          {/* <OpinionResults/> */}
  
        </div>
        
      </>
    );
  }
  
  export default Candidate1;
  