import Image from "next/image";
import Link from "next/link";

export default function FreeCADGuide() {
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
            <span className="text-indigo-400">FreeCAD</span> Guide
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Step-by-step tutorial for building a Gridfinity bin in FreeCAD.
          </p>
        </div>
      </section>

      {/* Steps */}
      <main className="px-6 pb-20 space-y-6">
        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              Open FreeCAD
            </h2>
            <Image
              src="/freecad/img_0.png"
              alt="FreeCAD startup"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Launch FreeCAD from your system. Ensure you have an up to date version.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              Open the Addon Manager
            </h2>
            <Image
              src="/freecad/img_1.png"
              alt="Addon Manager"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Go to <em>Tools &gt; Addon Manager</em> and search for "Gridfinity".
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              Install the Gridfinity Workbench
            </h2>
            <Image
              src="/freecad/img_2.png"
              alt="Gridfinity Workbench"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              In the Addon Manager, select <strong>Gridfinity Workbench</strong> and click "Install."
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              Install FreeCAD‑WakaTime
            </h2>
            <Image
              src="/freecad/img_3.png"
              alt="WakaTime addon"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Also install the FreeCAD-WakaTime Addon from the Addon Manager. While you're at it, star the <a href="https://github.com/Pegoku/FreeCAD-WakaTime">repo</a>.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
              Restart & Enable WakaTime
            </h2>
            <Image
              src="/freecad/img_4.png"
              alt="Enable WakaTime"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              After restarting, <strong>enable FreeCAD-WakaTime</strong> from the FreeCAD-WakaTime Workbench. Check the console for a load confirmation.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
              Create a New Parametric Part
            </h2>
            <Image
              src="/freecad/img_5.png"
              alt="New parametric part"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Create a new <strong>Parametric Part</strong>.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
              Create a New Blank Bin
            </h2>
            <Image
              src="/freecad/img_6.png"
              alt="Blank bin"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Select the Gridfinity Workbench and create a Blank Bin.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">8</span>
              Set Bin Dimensions
            </h2>
            <Image
              src="/freecad/img_7.png"
              alt="Bin dimensions"
              width={1024}
              height={768}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Define the bin size according to your needs (e.g., <em>1×3 units</em>).
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">9</span>
              Sketch on the Top Face
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
              <Image
                src="/freecad/img_8.png"
                alt="Sketch on top"
                width={768}
                height={768}
                className="rounded-lg border border-gray-700/50 flex-1 min-w-[200px]"
              />
              <Image
                src="/freecad/img_10.png"
                alt="Sketch details"
                width={256}
                height={200}
                className="rounded-lg border border-gray-700/50"
              />
            </div>
            <p className="card-content">
              Select the top face, create a sketch, draw your shape with the Polyline tool, and add dimension constraints (0.5~1mm clearance is recommended).
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">10</span>
              Add External Geometry & Symmetry
            </h2>
            <Image
              src="/freecad/img_12.png"
              alt="External geometry"
              width={1024}
              height={400}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Use External Geometry to reference horizontal and vertical axes. Add horizontal/vertical constraints, it should be unable to move (all green).
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">11</span>
              Close Sketch & Create Pocket
            </h2>
            <Image
              src="/freecad/img_14.png"
              alt="Create pocket"
              width={1024}
              height={400}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Close the sketch and use the "Pocket" tool with the required depth for your piece.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">12</span>
              Apply a 15° Draft <span className="text-gray-500 text-sm font-normal">(optional)</span>
            </h2>
            <Image
              src="/freecad/img_15.png"
              alt="Draft angle"
              width={1024}
              height={400}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Sketch a 15° triangle on an external sketch and use a "Pocket" with "Up to face" to ease removal (optional).
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">13</span>
              Add a Chamfer <span className="text-gray-500 text-sm font-normal">(optional)</span>
            </h2>
            <Image
              src="/freecad/img_17.png"
              alt="Chamfer"
              width={1024}
              height={400}
              className="rounded-lg border border-gray-700/50 my-4"
            />
            <p className="card-content">
              Finally, apply a chamfer on the insertion edge for better finish and usability (optional).
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
