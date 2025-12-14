import Image from "next/image";
import Link from "next/link";

export default function OnShapeGuide() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative px-6 py-16 overflow-hidden">
        <div className="hero-glow top-10 left-1/2 -translate-x-1/2" />
        <div className="section text-center">
          <Link href="/guide" className="text-gray-400 hover:text-indigo-400 text-sm mb-4 inline-block">
            Back to guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-400">Onshape</span> Guide
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Step-by-step tutorial for building a Gridfinity bin in Onshape.
          </p>
        </div>
      </section>

      {/* Steps */}
      <main className="px-6 pb-20 space-y-6">
        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">0</span>
              Install Wakatime OnShape
            </h2>
            <p className="card-content">
              Install the{" "}
              <a href="https://github.com/JeffreyWangDev/onshape-wakatime">
                Wakatime OnShape
              </a>{" "}
              browser extension. While you're at it, star the repo.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Create base
            </h2>
            <Image
              src="/onshape/img_0.png"
              alt="Create base"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Create a new sketch (select "Top Plane") and 3× 42mm squares using the
              "Rectangle" tool (found in the sketch toolbar).
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              Add constraints to base
            </h2>
            <Image
              src="/onshape/img_1.png"
              alt="Add constraints"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Add constraints to the squares to make them 42mm × 42mm and 5mm apart.
              You can do this by selecting the "Horizontal constraint" tool and then
              clicking on the edges of the squares.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              Extrude the base
            </h2>
            <Image
              src="/onshape/img_2.png"
              alt="Extrude base"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              When you finish your sketch (by clicking the green checkmark), click
              the "Extrude" button and extrude the base to 3.5mm.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              Main Body Walls
            </h2>
            <Image
              src="/onshape/img_3.png"
              alt="Main body walls"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Start a new sketch on top of the flat surface (the just extruded one).
              Draw the outer rectangle with a length of 138mm and width of 44mm
              (modify to fit your needs). Then, extrude it 29.6mm.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              Fillet the corners
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              <Image
                src="/onshape/img_4.png"
                alt="Fillet step 1"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
              <Image
                src="/onshape/img_5.png"
                alt="Fillet step 2"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
            </div>
            <p className="card-content">
              Using the "Fillet" button, add a fillet to the corners of the bin. The
              "Radius" should be 2mm.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              Hollow bin
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              <Image
                src="/onshape/img_7.png"
                alt="Hollow step 1"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
              <Image
                src="/onshape/img_8.png"
                alt="Hollow step 2"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
            </div>
            <p className="card-content">
              Create a sketch on the top face of the bin and draw a square with 2mm
              margin on each side, then remove 25mm of the bin. This will create a
              hollow bin.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              Create the Bottom Mounting Features
            </h2>
            <Image
              src="/onshape/img_9.png"
              alt="Bottom mounting"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Click directly on the flat bottom surface of your bin's main body and
              extrude it 2mm.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">8</span>
              Chamfer the base
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              <Image
                src="/onshape/img_10.png"
                alt="Chamfer step 1"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
              <Image
                src="/onshape/img_11.png"
                alt="Chamfer step 2"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
            </div>
            <p className="card-content">
              Create a sketch on the base and chamfer it 2mm.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">9</span>
              Add the label tab
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              <Image
                src="/onshape/img_15.png"
                alt="Label tab step 1"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
              <Image
                src="/onshape/img_16.png"
                alt="Label tab step 2"
                width={508}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
            </div>
            <p className="card-content">
              Position the label tab 3.5mm below the top edge and make it 2mm thick.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">10</span>
              Split the bin
            </h2>
            <Image
              src="/onshape/img_18.png"
              alt="Split bin"
              width={1024}
              height={400}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Add 1mm thick walls to the bin and split it into as many compartments
              as you want.
            </p>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="section pt-8">
          <div className="card bg-gray-800/60 border-indigo-500/30 text-center py-10">
            <h2 className="text-2xl font-bold text-white mb-2">All done?</h2>
            <p className="text-gray-400 mb-6">
              Export your design and submit it to get your filament grant!
            </p>
            <a
              href="https://forms.hackclub.com/shipfinity"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Submit Your Project
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
