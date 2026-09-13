import logo from '../assets/logo-text.png';

export default function Footer() {
    return (
        <footer className="px-5 py-12">

            <div className="container mx-auto px-10">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">

                    <div>

                        <div className="hidden cursor-pointer transition md:block">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="h-8 w-auto"
                            />
                        </div>

                        <p className="mt-4 text-xs  text-gray-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-xs font-semibold text-gray-600">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

                        <div>
                            <h3 className="text-xs font-bold">
                                PRODUCT
                            </h3>

                            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
                                <a href="#">Home</a>
                                <a href="#">Technologies</a>
                                <a href="#">Projects</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold">
                                COMPANY
                            </h3>

                            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                                <a href="#">Careers</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold">
                                LEGAL
                            </h3>

                            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="mt-10 border-t border-gray-200 pt-6">

                    <div className="flex flex-col justify-between gap-4 text-xs text-gray-400 sm:flex-row">

                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <div className="flex gap-5">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}