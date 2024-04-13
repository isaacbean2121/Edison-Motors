import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

interface OptionData {
    id: number;
    created_at: string;
    name: string;
    customize_option_id: number;
    description: string | null;
    price: number | null;
    asset: string;
}

interface OptionError {
    code: string | null;
    details: string | null;
    hint: string | null;
    message: string | null;
}

interface OptionResponse {
    error: OptionError | null;
    data: OptionData[] | null;
    count: number | null;
    status: number | null;
    statusText: string | null;
}

interface AllOptions {
    [key: string]: OptionResponse;
}

type Truck = {
    name: string;
    img: string;
    id: any; // Add id property to the Truck type
}

interface ScrollConfiguratorProps {
    truck: Truck;
}

export default function ScrollConfigurator({ truck }: ScrollConfiguratorProps) {
    const [data, setData] = useState<AllOptions | null>(null);
    const [formData, setFormData] = useState({
        lights: '',
        steeringWheel: '',
        mirrors: '',
        fifthWheel: '',
        pto: '',
        battery_pack: '',
        generator_pack: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOptionsSelected, setIsOptionsSelected] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/all-options?truckId=${truck.id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch options');
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error: any) {
                console.error('Error fetching options:', error.message);
            }
        };
        fetchData();
    }, [truck.id]);

    const handleOptionChange = (optionName: string, value: string) => {
        setFormData({
            ...formData,
            [optionName]: value,
        });
    
        // Check if all options are selected
        const allOptionsSelected = Object.values({
            ...formData,
            [optionName]: value,
        }).every((value: string) => value !== '');
        setIsOptionsSelected(allOptionsSelected);
    };

    const handleReviewOrder = (event: React.MouseEvent) => {
        if (!isOptionsSelected) {
          event.preventDefault();
          setShowAlert(true); // Show the alert
          return;
        }
        setIsSubmitting(true);
      };
      const handleAlertOk = () => {
        setShowAlert(false); // Close the alert
    };

    return (
        <form>
            <ScrollArea className="text-white text-5xl bg-black w-full m-auto py-4 px-8 mt-16 h-[678px] relative group">
                <Accordion type="single" collapsible className="">
                    {data && Object.entries(data).map(([optionName, optionData]) => (
                        <AccordionItem key={optionName} value={`item-${optionName}`}>
                            <AccordionTrigger>{optionName}</AccordionTrigger>
                            <div>
                                {optionData.error ? (
                                    <p>Error loading options for {optionName}</p>
                                ) : (
                                    <AccordionContent>
                                        {optionData.data?.map(option => (
                                            <label key={option.id} className="flex justify-between">
                                                <span>{option.name}</span>
                                                <input
                                                    type="radio"
                                                    name={optionName}
                                                    value={option.name}
                                                    checked={formData[optionName as keyof typeof formData] === option.name}
                                                    onChange={() => handleOptionChange(optionName, option.name)}
                                                />
                                            </label>
                                        ))}
                                    </AccordionContent>
                                )}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            {showAlert && (
                <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black p-8 rounded-lg text-center">
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            Please select all options before reviewing the order.
                        </AlertDescription>
                        <div className="text-right"> {/* Add this div */}
                        <button 
                        className="bg-gray-500 text-white text-sm px-2 py-1 rounded mt-4" 
                        onClick={handleAlertOk}
                        >
                        OK
                        </button>
                    </div>
                    </div>
                </div>
                )}
            </ScrollArea>
            <div className="flex justify-center">
                <Link href={{ pathname: '/review-order', query: formData }}>
                    <button
                        onClick={handleReviewOrder}
                        //disabled={!isOptionsSelected || isSubmitting} // Disable button if options are not selected or form is submitting
                        className="bg-white hover:bg-black-700 text-black absolute bottom-4 font-bold py-2 px-4 rounded flex justify-end"
                        type="button"
                    >
                        Review order
                    </button>
                </Link>
            </div>
        </form>
    );
}