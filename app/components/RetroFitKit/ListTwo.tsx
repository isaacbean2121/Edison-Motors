import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';


export const ListTwo = () => {
    return (
        <div className='flex flex-col text-white items-center text-center bg-black space-y-4 p-10'>
            <AnimatedElementTop><h1 className='text-5xl'>Product Goal</h1></AnimatedElementTop>                
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>Convert any existing pickup truck with solid axles to electric drive with diesel generator - no range anxiety</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>Creating a Edison Motors dealership network supported by fans who have a real passion for trucks</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                            <AnimatedElementRight><p>A crate delivered, pre-assembled & tested kit - installed & serviced by Edison dealers throughout North America</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                                <AnimatedElementRight><p>Restore the classic truck you love, or find something new to you</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                                <AnimatedElementRight><p>A high torque electric powertrain with range & reliability of a diesel engine</p></AnimatedElementRight>
                        </div>
                    </li>
                </ul>
            </div>
    )
}