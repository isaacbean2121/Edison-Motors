import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';


export const ListFour = () => {
    return (
        <div className='flex flex-col text-white items-center text-center bg-black space-y-4 p-10 bg-gradient-to-b from-gray-600 via-black to-black'>
            <AnimatedElementTop><h1 className='text-5xl'>Estimated Cost</h1></AnimatedElementTop>                
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>Depending on options, the kit will ideally retail for a third to half the cost of a new pickup</p></AnimatedElementRight>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <AnimatedElementLeft><GoPaperAirplane /></AnimatedElementLeft>                            
                            <AnimatedElementRight><p>Fuel savings of 30% anticipated, helping drive economics</p></AnimatedElementRight>
                        </div>
                    </li>
                </ul>
            </div>
    )
}