import Link from "next/link";

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative px-6 py-16 overflow-hidden">
        <div className="hero-glow top-10 left-1/2 -translate-x-1/2" />
        <div className="section text-center">
          <Link href="/" className="text-gray-400 hover:text-indigo-400 text-sm mb-4 inline-block">
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Getting <span className="text-indigo-400">Started</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            New to CAD? Follow these steps to design your first Gridfinity bin.
          </p>
        </div>
      </section>

      {/* Steps */}
      <main className="px-6 pb-20 space-y-8">
        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Think of an idea
            </h2>
            <p className="card-content">
              To build with Gridfinity, start by asking: what item do you always
              lose and need a home for? Maybe it's screws, craft supplies, or
              electronics— imagine a custom bin that keeps those things organized
              and easy to grab. What would look really cool on your workspace grid?
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Choose your CAD software
            </h2>
            <div className="card-content">
              <p className="mb-4">
                Choose and install/open your CAD tool (FreeCAD, Onshape, etc.).
                Then install WakaTime to track your design hours:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="https://github.com/Pegoku/FreeCAD-WakaTime">
                    FreeCAD-WakaTime
                  </a>
                </li>
                <li>
                  <a href="https://github.com/JeffreyWangDev/onshape-wakatime">
                    Onshape WakaTime
                  </a>
                </li>
                <li>
                  <a href="https://github.com/iamawatermelo/wakapi-anyide">
                    WakaTime AnyIDE
                  </a>{" "}
                  <span className="text-gray-500 text-sm">(for other tools)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              <span className="bg-indigo-500/20 text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Start designing!
            </h2>
            <p className="card-content mb-6">
              Now that your project is set up, begin designing your Gridfinity bin.
              If you're new to CAD, pick one of these guides:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/guide/freecad"
                className="group p-5 bg-gray-700/50 border border-gray-600/50 rounded-xl hover:border-indigo-500/50 hover:bg-gray-700 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400 group-hover:text-indigo-300">
                  FreeCAD Guide
                </h3>
                <p className="text-gray-400 text-sm">
                  A step-by-step tutorial for building a Gridfinity bin in FreeCAD.
                </p>
              </Link>
              <Link
                href="/guide/onshape"
                className="group p-5 bg-gray-700/50 border border-gray-600/50 rounded-xl hover:border-indigo-500/50 hover:bg-gray-700 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-400 group-hover:text-indigo-300">
                  Onshape Guide
                </h3>
                <p className="text-gray-400 text-sm">
                  A step-by-step tutorial for building a Gridfinity bin in Onshape.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to submit */}
        <div className="section pt-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Done designing?</p>
            <a
              href="https://forms.hackclub.com/t/e4RhUQhpuUus"
              className="btn btn-primary"
            >
              Submit Your Project
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
