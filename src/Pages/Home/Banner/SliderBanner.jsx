
const SliderBanner = ({img,title}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})`}} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className='text-4xl font-sans'>
                        {title}
                    </h2>
                    <div className='space-x-5'>
                        <button className='btn btn-primary mt-4'>Explore More</button>
                        <button className='btn btn-primary mt-4'>All Coures</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;