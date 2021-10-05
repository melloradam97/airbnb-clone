function Footer() {
  return (
    <div
      className='grid md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100
    text-gray-600'
    >
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Diversity and Belonging</p>
        <p>Host Afghan refugees</p>
        <p>Accessibility</p>
        <p>Guest Referrals</p>
        <p>Airbnb Associates</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Host your home</p>
        <p>Responsible hosting</p>
        <p>Host an Online Experience</p>
        <p>Resource Centre</p>
        <p>Host an Experience</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Neighbourhood Support</p>
        <p>Help Centre</p>
        <p>Trust and Safety</p>
        <p>Cancellation options</p>
      </div>
    </div>
  );
}

export default Footer;
