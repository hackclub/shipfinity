import Image from "next/image";

export default function OnShapeGuide() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity Guide</h1>
      </div>
      <div className="box-out">
        <p className="box-title">0. Install Wakatime OnShape</p>
        <p className="box-in">
          Install the{" "}
          <a href="https://github.com/JeffreyWangDev/onshape-wakatime">
            Wakatime OnShape
          </a>{" "}
          browser extension. While you're at it, star the repo.
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">1. Create base</p>
        <Image
          src="/onshape/img_0.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Create a new sketch (select "Top Plane") and 3x 42mm squares using the
          "Rectangle" tool (found in the sketch toolbar)
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">2. Add constraints to base</p>
        <Image
          src="/onshape/img_1.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Add constraints to the squares to make them 42mm x 42mm and 5mm apart.
          You can do this by selecting the "Horizontal constraint" tool and then
          clicking on the edges of the squares.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">3. Extrude the base</p>
        <Image
          src="/onshape/img_2.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          When you finish your sketch (by clicking the green checkmark), click
          the "Extrude" button and extrude the base to 3.5mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">4. Main Body Walls</p>
        <Image
          src="/onshape/img_3.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Start a new sketch on top of the flat surface (the just extruded one).
          Draw the outer rectangle with a length of 138mm and width of 44mm
          (modify to fit your needs). Then, extrude it 29.6mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">5. Fillet the corners</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_4.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/onshape/img_5.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Using the "Fillet" button, add a fillet to the corners of the bin. The
          "Radius" should be 2mm
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">6. Hollow bin</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_7.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/onshape/img_8.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Create a sketch on the top face of the bin and draw a square with 2mm
          margin on each side, then remove 25mm of the bin. This will create a
          hollow bin.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">7. Create the Bottom Mounting Features</p>
        <Image
          src="/onshape/img_9.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Click directly on the flat bottom surface of your bin's main body and
          extrude it 2mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">8. Chamfer the base</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_10.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/onshape/img_11.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Create a sketch on the base and chamfer it 2mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">9. Add the label tab</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_15.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain max-w-full h-auto" // changed
          />
          <Image
            src="/onshape/img_16.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain max-w-full h-auto" // changed
          />
        </div>
        <p className="box-in">
          Position the label tab 3.5mm below the top edge and make it 2mm thick.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">10. Split the bin</p>
        <Image
          src="/onshape/img_18.png"
          alt="FreeCAD"
          width={1024}
          height={400}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Add 1mm thick walls to the bin and split it into as many compartments
          you want.
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
