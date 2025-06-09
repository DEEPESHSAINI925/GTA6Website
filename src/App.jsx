import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [showContent, setshowContent] = useState(false)
  useGSAP(()=>{
    const t1=gsap.timeline()
    t1.to(".vi-mask-group",{
      rotate:8,
      duration:2,
      ease:"power4.easeInOut",
      transformOrigin:"50% 50%"
    }).to(".vi-mask-group",{
      scale:7,
      duration:2,
      delay:-1.8,
      transformOrigin:"50% 50%",
      opacity:0,
      ease:"Expo.easeInOut",
      onUpdate:function(){
        if(this.progress() > .8){
          document.querySelector(".svg").remove()
          setshowContent(true)
          t1.kill()
        }
      }
    })
    


  })

  useGSAP(()=>{
    gsap.from(" .girls ",{
      scale:2,
      rotate:25,
      duration:1
    })
    gsap.from(" .imagesText ",{
      scale:2,
      rotate:20,
      duration:.6
    })
    const main = document.querySelector(".main")
    main?.addEventListener('mousemove',function(e){
      const xMove=(e.clientX / window.innerWidth ) * 40 
      gsap.to(".main .imagesText",{
        x:`${xMove*.4 }%`
      })
      gsap.to(".bg",{
        x:`${xMove*.4}%`
      })
       gsap.to(".sky",{
        x:`${xMove*.3}%`
      })
    }) 
  },[showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full overflow-hidden '>
          <div className="imagesText absolute z-[23] flex flex-col top-0 left-[26rem] -translate-X-1/2  ">
            <h1 className='text-9xl leading-none font-bold text-white '>Greater</h1>
            <h1 className='text-9xl leading-none font-bold text-white -my-[1rem] ml-50'>Great</h1>
            <h1 className='text-9xl leading-none font-bold text-white -my-[1rem]'>Greatest</h1>
          </div>
          <div className="images w-full h-screen bg-black relative ">
            <img className='bg w-full h-full object-cover absolute object-cover z-[22] scale-[1.26] ' src="./bg.png"  />
            <img className='sky w-full h-full object-cover absolute z-[2] scale-[1.3] ' src="./sky.png"  />
            <img className='girls -bottom-122 left-[25rem] scale-[.8] -translate-X-1/2 -translate-Y-1/2 absolute z-[100]' src="./girlbg.png"  />
          </div>
          <div className="btm absolute bottom-0 w-full h-10 bg-gradient-to-t  from-black to-transparent left-0  z-[100]">
            <img className=' ml-[40rem] h-full ' src="./ps5.png"  />
          </div>
          <img className='top-8 h-[5em] left-8 scale-[.8] -translate-X-1/2 -translate-Y-1/2 absolute z-[100]' src="./logo18.png"  />
        </div>
      )}
    </>
  )
}

export default App