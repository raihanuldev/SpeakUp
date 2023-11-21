

const DashbordHome = () => {
    return (
        <div>
            {/* Header */}
            <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="text-sm text-white md:text-white font-semibold border-l-4 border-primary ml-2 inline-block px-2 md:px-5">
                    Dashbord Home
                </p>

            </div>
            {/* header end */}
            <div className="relative flex flex-col md:justify-center items-center min-h-screen">
                <h1 className="text-xl font-bold pt-12">
                    Welcome <span className=" uppercase"> Dear Hero.</span>!!!!!
                </h1>
                <p className="pt-4 ">Explore, Navigate, and Take Challenge.</p>

                <img
                    src="speakup1.jpg"
                    alt="Background for Learning"
                    className="absolute object-cover w-full h-full opacity-40"
                />
            </div>
        </div>


    );
};

export default DashbordHome;