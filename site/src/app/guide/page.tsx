import Link from "next/link";

export default function GuidesPage() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">YSWS Guides</h1>
      </div>

      <div className="box-out">
        <p className="box-title">First, think of an idea!</p>
        <p className="box-in">
          To build with Gridfinity, start by asking: what item do you always
          lose and need a home for? Maybe it's screws, craft supplies, or
          electronics— imagine a custom bin that keeps those things organized
          and easy to grab. What would look really cool on your workspace grid?
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">Next, choose your CAD software of choice</p>
        <div className="box-in">
          Choose and install/open your CAD tool (FreeCAD, Onshape, etc.).
          Then install WakaTime to track your design hours:
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>
              <a
                href="https://github.com/Pegoku/FreeCAD-WakaTime"
                className="text-indigo-400 underline"
              >
                FreeCAD-WakaTime
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
                WakaTime AnyIDE
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box-out">
        <p className="box-title">Start designing!</p>
        <p className="box-in">
          Now that your project is set up, begin designing your Gridfinity bin.
          If you're new to CAD, I recommend FreeCAD or Onshape:
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
              A step-by-step tutorial for building a Gridfinity bin in FreeCAD.
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
              A step-by-step tutorial for building a Gridfinity bin in Onshape.
            </p>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
