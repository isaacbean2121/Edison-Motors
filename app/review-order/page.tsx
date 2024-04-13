"use client";

import { useState } from 'react';
import supabase from '../../supabaseClient';

type SearchParams = {
    lights: string;
    steeringWheel: string;
    mirrors: string;
    fifthWheel: string;
    pto: string;
    battery_pack: string;
    generator_pack: string;
    frame_rail : string;
    wheelbase : string;
};

const ReviewOrderPage = ({ searchParams }: { searchParams: SearchParams }) => {
    const [formData, setFormData] = useState<SearchParams>({
        lights: searchParams.lights,
        steeringWheel: searchParams.steeringWheel,
        mirrors: searchParams.mirrors,
        fifthWheel: searchParams.fifthWheel,
        pto: searchParams.pto,
        battery_pack: searchParams.battery_pack,
        generator_pack: searchParams.generator_pack,
        frame_rail: searchParams.frame_rail,
        wheelbase: searchParams.wheelbase,
    });

    const handleSubmitOrder = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const { data, error } = await supabase.from('selections').insert([formData]);
            if (error) {
                console.error('Error inserting data:', error.message);
            } else {
                console.log('Data inserted successfully:', data);
                // Reset formData after successful submission
                setFormData({
                    lights: '',
                    steeringWheel: '',
                    mirrors: '',
                    fifthWheel: '',
                    pto: '',
                    battery_pack: '',
                    generator_pack: '',
                    frame_rail: '',
                    wheelbase: '',
                });
            }
        } catch (error: any) {
            console.error('Error submitting form data:', error.message);
        }
    };

    return (
        
            <div className="max-w-2xl mx-auto py-10 mt-10">
            <form onSubmit={handleSubmitOrder} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-4">Review Order</h1>
                    <p>Lights: {formData.lights}</p>
                    <p>Steering Wheel: {formData.steeringWheel}</p>
                    <p>Mirrors: {formData.mirrors}</p>
                    <p>Fifth Wheel: {formData.fifthWheel}</p>
                    <p>PTO: {formData.pto}</p>
                    <p>Battery Pack: {formData.battery_pack}</p>
                    <p>Generator: {formData.generator_pack}</p>
                    <p>Frame Rail: {formData.frame_rail}</p>
                    <p>Wheelbase: {formData.wheelbase}</p>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default ReviewOrderPage;