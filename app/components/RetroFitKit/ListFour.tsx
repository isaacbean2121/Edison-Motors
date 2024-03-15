import { AnimatedElementRight } from '../AnimatedElementRight';
import { AnimatedElementLeft } from '../AnimatedElementLeft'
import { GoPaperAirplane } from "react-icons/go";
import { AnimatedElementTop } from '../AnimatedElementTop';
import { AnimatedElementBottom } from '../AnimatedElementBottom';


export const ListFour = () => {
    return (
        <div className='flex flex-col text-white items-center text-center bg-black space-y-4 p-10 bg-gradient-to-b from-gray-600 via-black to-black'>
            <AnimatedElementRight><h1 className='text-5xl'>Estimated Cost</h1></AnimatedElementRight>   
            <AnimatedElementLeft>         
                <ul className='space-y-4'>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                            
                            <p>Depending on options, the kit will ideally retail for a third to half the cost of a new pickup</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-row items-center text-center space-x-2 text-xl'>
                            <GoPaperAirplane />                          
                            <p>Fuel savings of 30% anticipated, helping drive economics</p>
                        </div>
                    </li>
                </ul>
                </AnimatedElementLeft>    
            </div>
    )
}