import Image from "next/image";

export default function FreeCADGuide() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity Guide</h1>
      </div>

      <div className="box-out">
        <p className="box-title">1. Open FreeCAD</p>
          <Image
            src="/freecad/img_0.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Launch FreeCAD from your system. Ensure you have an up to date version.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">2. Open the Addon Manager</p>
          <Image
            src="/freecad/img_1.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Go to <em>Tools &gt; Addon Manager</em> and search for “Gridfinity”.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">3. Install the Gridfinity Workbench</p>
          <Image
            src="/freecad/img_2.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          In the Addon Manager, select <strong>Gridfinity Workbench</strong> and click “Install.”
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">4. Install the FreeCAD‑WakaTime Addon</p>
          <Image
            src="/freecad/img_3.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Also install the FreeCAD-WakaTime Addon from the Addon Manager. While you're at it, star the <a className="text-indigo-400 underline" href="https://github.com/Pegoku/FreeCAD-WakaTime">repo</a>.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">5. Restart FreeCAD & Enable WakaTime</p>
          <Image
            src="/freecad/img_4.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          After restarting, <strong>enable FreeCAD-WakaTime</strong> from the FreeCAD-WakaTime Workbench. Check the console for a load confirmation.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">6. Create a New Parametric Part</p>
          <Image
            src="/freecad/img_5.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Create a new <strong>Parametric Part</strong>. 
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">7. Create a New Blank Bin</p>
          <Image
            src="/freecad/img_6.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Select the Gridfinity Workbench and create a Blank Bin
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">8. Set Bin Dimensions</p>
          <Image
            src="/freecad/img_7.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Define the bin size according to your needs (e.g., <em>1×3 units</em>).
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">9. Sketch on the Top Face</p>
          <div className="flex space-x-4 my-4">
            <Image
              src="/freecad/img_8.png"
              alt="FreeCAD"
              width={768}
              height={768}
              className="border border-gray-700 rounded-lg object-contain"
            />
            <Image
              src="/freecad/img_10.png"
              alt="FreeCAD"
              width={256}
              height={200}
              className="border border-gray-700 rounded-lg object-contain"
            />
          </div>     
        <p className="box-in">
          Select the top face, create a sketch, draw your shape with the Polyline tool, and add dimension constraints (0.5~1mm clearance is recommended).
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">10. Add External Geometry & Symmetry</p>
          <Image
            src="/freecad/img_12.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Use External Geometry to reference horizontal and vertical axes. Add horizontal/vertical constraints, it should be unable to move (all green).
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">11. Close Sketch & Create Pocket</p>
          <Image
            src="/freecad/img_14.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Close the sketch and use the “Pocket” tool with the required depth for your piece.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">12. Apply a 15° Draft (optional)</p>
          <Image
            src="/freecad/img_15.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Sketch a 15° triangle on an external sketch and use a “Pocket” with “Up to face” to ease removal (optional).
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">13. Add a Chamfer (optional)</p>
          <Image
            src="/freecad/img_17.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
        <p className="box-in">
          Finally, apply a chamfer on the insertion edge for better finish and usability (optional).
        </p>
      </div>

      <div className="box-out text-center" id="submit">
        <h2 className="box-title">All done?</h2>
        <p className="box-in">
          Export your design and submit it to get your filament grant!
          <br /><br />
          <a
            href="https://forms.hackclub.com/t/e4RhUQhpuUus"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Submit Your Project
          </a>
        </p>
      </div>
    </div>
  );
}
