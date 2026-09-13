import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
    return (
        <section className="bg-[#f8f8fa]">
            <div className="mx-auto flex min-h-87.5 container items-center justify-between px-5 py-12 ">

                {/* Left */}
                <div className="max-w-120">


                    <h1 className="text-5xl font-bold leading-tight">
                        Build Your Ideal
                        <br />

                        <span className="brand-gradient-text">
                            Development Stack
                        </span>
                    </h1>


                    <p className="mt-4 max-w-105 text-sm leading-6 text-[#475569]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>


                    <div className="mt-7 flex items-center gap-3">

                        <button className="rounded-md brand-gradient px-5 py-3 text-xs font-semibold text-white cursor-pointer transition">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-gray-300 px-7 py-3 text-xs text-gray-600 cursor-pointer transition">
                            Learn More
                        </button>

                    </div>

                </div>

                {/* Right */}
                <div>
                    <img
                        src={bannerImage}
                        alt="Development Stack"
                        className="w-100"
                    />
                </div>

            </div>
        </section>
    );
}