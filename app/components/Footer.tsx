import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="snap-start bg-black text-white py-10">
          <div className="flex flex-row justify-center">
            <div className=" w-1/3 px-24">
                <h1 className="text-3xl pb-2">Edison Motors</h1>
                <p className="text-sm">Edison Motors is a privately owned Canadian Clean Technology Company. In 2023, we built Canada’s first Production Electric Hybrid Truck; 
                consisting of Edison make Powertrain, Chassis and Cab. Edison Motors aims to manufacture Electric Hybrid Vocational Trucks & EV Conversion Kits that deliver fuel savings without compromise.</p>
            </div>
            <div className="px-24">
                <h1 className="text-3xl pb-2">Quick Links</h1>
                <ul className="space-y-1">
                    <li>
                      <Link className='hover:underline' href="/">Home</Link>
                    </li>
                    <li>
                      <Link className='hover:underline' href="https://www.edisonmotors.ca/team">Team</Link>
                    </li>
                    <li>
                      <Link className='hover:underline' href="https://www.edisonmotors.ca/trucks">Trucks</Link>
                    </li>
                    <li>
                      <Link className='hover:underline' href="https://www.edisonmotors.ca/resources">Resources</Link>
                    </li>
                    <li>
                      <Link className='hover:underline' href="https://www.edisonmotors.ca/shop">Store</Link>
                    </li>
                </ul>
            </div>
            <div className="px-24">
                <h1 className="text-3xl pb-2">Contact Us</h1>
                <ul className="space-y-2">
                    <li>
                      <Link className="hover:underline" href="https://www.edisonmotors.ca/contact">https://www.edisonmotors.ca/contact</Link>
                    </li>
                    <li>PO box 444, Merritt, BC, V1K-1B8, Canada</li>
                </ul>
            </div>
          </div>  
          <div className="container mx-auto text-center pt-5">
            <p>&copy; {new Date().getFullYear()} Edison Motors. All rights reserved.</p>
          </div>
        </footer>
      );
};