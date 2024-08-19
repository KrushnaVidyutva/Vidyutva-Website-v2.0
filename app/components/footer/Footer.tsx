const menuData = [
  {
    title: 'Drivers',
    items: [
      'Manufacturer & Partner Subscriptions',
      'Motoring club memberships',
    ],
  },
  {
    title: 'Business',
    items: [
      'Electrify your fleet',
      'Hosting chargers',
      'Subscriptions & Pre-paid Charging',
    ],
  },
  {
    title: 'Government',
    items: [
      'Electrify your fleet',
      'Hosting chargers',
    ],
  },
  {
    title: 'Company',
    items: [
      'Meet the team',
      'Careers',
      'Charging Network',
    ],
  },
  {
    title: 'Resources',
    items: [
      'News',
      'Case Studies',
      'FAQs',
      'Support',
    ],
  },
];

const footer = () => {
  return (
    <footer className='bg-[#ebecef] w-full h-full'>
      <div className='py-20 px-[5%] max-lg:px-[3%]'>
        <div className='flex max-lg:flex-col justify-between w-[100%] mb-20'>
          <div className='w-[45%]'>
            <h1 className='text-[#00a181] font-semibold text-[1.75rem]'>Join our newsletter</h1>
            <p className='text-sm text-[#1d344f]'>Subscribe to stay up-to-date on all the latest from Vidyutva.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:w-[100%] w-[50%] max-lg:mt-4">
            <input
              type="text"
              className="col-span-3 max-[500px]:col-span-2 bg-[#ebecef] border border-solid border-[#1d344f] rounded-[.75rem] py-[.8rem] px-[.75rem] text-base focus:border-white focus:outline-none"
              placeholder="Enter your email"
            />
            {/* <br className="hidden max-[500px]:block" /> */}
            <button className="col-span-1 max-[500px]:col-span-2 bg-[#00a181] text-white rounded-full py-[.5rem] px-4 text-base   hover:bg-[#00a181af]"> Subscribe</button>
            <p className="col-span-4 text-xs text-[#1d344f]">By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a></p>
          </div>
        </div>

        <div className='grid grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-20'>
          {menuData.map((menu, index) => (
            <div key={index} className="col-span-1">
              <ul className="space-y-5 p-2 rounded-lg">
                <li className="font-semibold text-[#1d344f] hover:text-[#00a181]">{menu.title}</li>
                {menu.items.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className='col-span-1'>
            <div className='relative p-4 border bg-gray-400 rounded-lg w-full overflow-hidden shadow-sm blow'>
              <div className='flex justify-between items-center mb-4 relative z-10'>
                <img src="/images/footer/new/icon.png" alt="Icon" className="w-8" />
                <img src="/images/footer/new/right.png" alt="Arrow" className="w-8" />
              </div>
              <h1 className='text-white font-semibold text-2xl relative z-10 blow'>Get in touch with Vidyutva</h1>
              <div className="absolute inset-0 bg-[#00a181] transform translate-y-full hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 blow1"></div>
            </div>
          </div>
        </div>

        <div className='bg-[#4a5d73] w-full h-[1px] mb-8'></div>

        <div className='flex justify-between max-md:flex-col gap-6'>
          <p className='text-[#1d344f] text-xs text-center'>© 2024 Vidyutva | All rights reserved.</p>
          <div className='flex min-[500px]:justify-between items-cente max-[500px]:flex-col max-[500px]:items-center gap-6'>
            <p className='text-[#1d344f] text-xs underline'>Privacy Policy</p>
            <p className='text-[#1d344f] text-xs underline'>Terms & Conditions</p>
            <p className='text-[#1d344f] text-xs underline'>CPO Terms & Conditions</p>
            <p className='text-[#1d344f] text-xs underline'>Site Host Terms & Conditions</p>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <img src="/images/footer/new/linkedin.png" alt="Icon" className="w-5 hover:text-[#00a181]" />
            <img src="/images/footer/new/facebook.png" alt="Icon" className="w-5 " />
            <img src="/images/footer/new/instagram.png" alt="Icon" className="w-5 " />
          </div>
        </div>
      </div>
    </footer>

  )
}

export default footer