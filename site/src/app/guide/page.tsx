import Link from "next/link";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-800 p-6 text-gray-100 sm:p-10">
      <div className="flex flex-col items-center mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Guides and tutorials
        </p>
        <h1 className="mt-2 text-4xl font-bold text-indigo-400">
          How to ship
        </h1>
      </div>

      <div className="box-out">
        <p className="box-title">1. Think of an idea</p>
        <p className="box-in">
          To build with Gridfinity, start by asking: what item do you always
          lose and need a home for? Maybe it's screws, craft supplies, or
          electronics.
          <br />
          Imagine a custom bin that keeps those things organized
          and easy to grab. What would look really cool on your workspace grid?
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">2. Choose your CAD software</p>
        <div className="box-in">
          <p>
            Choose and install or open your CAD tool, such as FreeCAD, Onshape,
            or another CAD app. Then install and configure Hackatime/Wakatime to track your
            design hours.
          </p>
          <p className="mt-4 font-semibold text-indigo-300">Useful trackers:</p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
            <li>
              <a
                href="https://github.com/Pegoku/FreeCAD-WakaTime"
                className="text-indigo-400 underline"
              >
                FreeCAD-WakaTime Plugin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JeffreyWangDev/onshape-wakatime"
                className="text-indigo-400 underline"
              >
                Onshape WakaTime
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iamawatermelo/wakapi-anyide"
                className="text-indigo-400 underline"
              >
                WakaTime AnyIDE for other CAD software
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box-out">
        <p className="box-title">3. Start designing</p>
        <p className="box-in">
          Now that your project is set up, begin designing your Gridfinity bin.
          If you're new to CAD, pick one of the beginner-friendly guides below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Link
            href="/guide/freecad"
            className="block p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
              FreeCAD Guide
            </h2>
            <p className="text-gray-300">
              A step-by-step tutorial for building a Gridfinity bin in FreeCAD,
              a free and open source CAD tool.
            </p>
          </Link>
          <Link
            href="/guide/onshape"
            className="block p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
              Onshape Guide
            </h2>
            <p className="text-gray-300">
              A step-by-step tutorial for building a Gridfinity bin in Onshape,
              a browser-based CAD tool.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
