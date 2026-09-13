import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import YourStack from "./components/YourStack";
import type { TechnologyType } from "./Type";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const dataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [selectedStack, setSelectedStack] = useState<TechnologyType[]>([]);

  const handleAddToStack = (technology: TechnologyType) => {
    const alreadyAdded = selectedStack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already added!");
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const remainingStack = selectedStack.filter(
      (item) => item.id !== id
    );

    setSelectedStack(remainingStack);
    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <main className="bg-gray-50">

        <div className="mx-auto container px-5 py-10">
          <h1 className="text-4xl font-bold leading-tight text-slate-800">
            Explore the <span className="brand-gradient-text bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-[#64748B] mb-8 mt-1">Pick one technology per category to build your ideal stack.</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">

            <Suspense fallback={<p>Loading...</p>}>
              <Technologies
                dataPromise={dataPromise}
                handleAddToStack={handleAddToStack}
                selectedStack={selectedStack}
              />
            </Suspense>

            <YourStack
              selectedStack={selectedStack}
              handleRemove={handleRemove}
              handleRemoveAll={handleRemoveAll}
            />

          </div>
        </div>
      </main>
      <Footer></Footer>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;