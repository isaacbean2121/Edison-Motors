import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';

export const ListThree = () => {
    return (
        <div className='flex flex-col text-white items-center text-center space-y-4 p-10 bg-gradient-to-t from-gray-600 via-gray-900 to-black'>
                <AnimatedElementRight><h1 className='text-5xl'>Production Timeline</h1></AnimatedElementRight>
                <AnimatedElementLeft>
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>We are going to build the first production prototype based on Topsy's power electronics</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>All parts have been chosen, supplier agreements in place </p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />
                            <p>Estimated prototype completion by September 2024</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>Once testing is successful, we will begin kit roll out with dealers</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>We estimate entering production by mid 2025</p>
                        </div>
                    </li>
                </ul>
                </AnimatedElementLeft>
            </div>
    )
}