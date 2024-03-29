import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='relative h-[300px] sm:h-[400px] lg-[500px]
      xl=[600px] 2xl=[700px]'
    >
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button
          className='text-purple-500 bg-white px-10 py-4 shadow-md
          rounded-full font-bold my-3 hover:shadow-xl active:scale-90
          transition duration-150 ease-in-out'
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
