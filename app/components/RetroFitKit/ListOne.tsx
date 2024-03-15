import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';

export const ListOne = () => {
    return (
        <div className='flex flex-col text-white items-center text-center space-y-4 p-10 bg-gradient-to-b from-[#88674E] to-black'>
                <AnimatedElementRight><h1 className='text-5xl'>What Do I get for Reserving A Kit?</h1></AnimatedElementRight>
                <AnimatedElementLeft>
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>You help fund the development of a pickup truck kit from Edison Motors</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>You reserve a place in line to purchase a kit or become a dealer</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />
                            <p>This place in line is transferable but not refundable</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>You get project specific merch - Kit name will be voted</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                                <GoPaperAirplane />
                                <p>The amount for the reservation is deducted from final purchase price</p>
                        </div>
                    </li>
                </ul>
                </AnimatedElementLeft>
            </div>
    )
}