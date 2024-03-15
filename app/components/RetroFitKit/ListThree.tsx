import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';

export const ListThree = () => {
    return (
        <div className='flex flex-col text-white items-center text-center space-y-4 p-10 bg-gradient-to-t from-gray-600 via-gray-900 to-black'>
                <AnimatedElementTop><h1 className='text-5xl'>Production Timeline</h1></AnimatedElementTop>
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>We are going to build the first production prototype based on Topsy's power electronics</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>All parts have been chosen, supplier agreements in place </p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                            <AnimatedElementRight><p>Estimated prototype completion by September 2024</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                                <AnimatedElementRight><p>Once testing is successful, we will begin kit roll out with dealers</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>
                                <AnimatedElementRight><p>We estimate entering production by mid 2025</p></AnimatedElementRight>
                        </div>
                    </li>
                </ul>
            </div>
    )
}