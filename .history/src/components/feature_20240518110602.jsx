import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import Thund from '../assets/motionarteffect-img9.png'

function Feature(){
    return(
        <>
        <section className='FEATURE  text-center  '>

            <div className="div text-slate-100 ">
                <p className='font-bold text-3xl'>An All-Round Plugin With Powerful Features</p>
                <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                <div className="feature">
                <div className="div flex w-full justify-center gap-24 ">
                <div className="div1 bg-[#0F0920] rounded-2xl p-7">
                    <img src={Thund} alt="" srcset="" />
                    <p>Light Weight</p>
                    <p>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className="div2">
                    <img src={Thumb} alt="" srcset="" />
                    <p>100% Responsive</p>
                    <p>Create a consistent visual experience across all devices.</p>
                </div>
                <div className="div3">
                    <img src={Moon} alt="" srcset="" />
                    <p>User Friendly Interface</p>
                    <p>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
                </div>
                </div>
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Feature