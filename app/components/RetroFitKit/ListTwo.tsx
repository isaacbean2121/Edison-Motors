import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';


export const ListTwo = () => {
    return (
        <div className='flex flex-col text-white items-center text-center bg-black space-y-4 p-10'>
            <AnimatedElementRight><h1 className='text-5xl'>Product Goal</h1></AnimatedElementRight>
            <AnimatedElementLeft>           
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>Convert any existing pickup truck with solid axles to electric drive with diesel generator - no range anxiety</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>Creating a Edison Motors dealership network supported by fans who have a real passion for trucks</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />
                            <p>A crate delivered, pre-assembled & tested kit - installed & serviced by Edison dealers throughout North America</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>Restore the classic truck you love, or find something new to you</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>A high torque electric powertrain with range & reliability of a diesel engine</p>
                        </div>
                    </li>
                </ul>
                </AnimatedElementLeft>     
            </div>
    )
}