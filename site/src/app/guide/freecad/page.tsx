import Image from "next/image";

export default function FreeCADGuide() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity Guide</h1>
      </div>

      <div className="box-out">
        <p className="box-title">0. Recommendation</p>
        <p className="box-in">
          To have a deeper understanding of how FreeCAD works, it is recommended
          to watch a tutorial (e.g.{" "}
          <a
            className="text-indigo-400 underline"
            href="https://www.youtube.com/watch?v=t_yh_S31R9g&list=PLWuyJLVUNtc3kYxQQiOriVJiTbQ0qNBXh"
          >
            this one
          </a>
          ) especially the Part Design workbench section.
        </p>
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
          Launch FreeCAD from your system. Ensure you have an up to date
          version.
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
          Go to <em>Tools &gt; Addon Manager</em> and search for "Wakatime”.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">3. Install the FreeCAD‑WakaTime Addon</p>
        <Image
          src="/freecad/img_2.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Install the FreeCAD-WakaTime Addon from the Addon Manager.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">4. Restart FreeCAD & Enable WakaTime</p>
        <Image
          src="/freecad/img_3.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          After restarting, <strong>enable FreeCAD-WakaTime</strong> by going to
          the "WakaTime" workbench, and pressing the Toggle Wakatime button.
          Then, wait for the console to show "[WakaTime] Activated."
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">5. Create a New Parametric Part</p>
        <Image
          src="/freecad/img_0.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Create a new <strong>Parametric Body</strong>.
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">6. Start the Bin design</p>
        <Image
          src="/freecad/gf-design.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          For this guide, we will be designing a 1x2 bin for holding sd cards
          and pens. We will be basing our design in the official{" "}
          <a
            className="text-indigo-400 underline"
            href="https://gridfinity.xyz/specification/"
          >
            gridfinity design specification
          </a>
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">7. Create base Sketch</p>
        <Image
          src="/freecad/img_5.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <Image
          src="/freecad/img_4.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Create a new sketch by pressing the "New Sketch" button and Selecting
          the top face (XY Plane).
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">8. Set Bin Dimensions</p>
        <Image
          src="/freecad/img_6.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Define the bin size according to your needs (e.g. 1x2). To calculate
          the width of the bin, you should multiply the number of units by 42mm.
          For example, a 1x2 bin would be (1*42) mm wide and (2*42) mm long.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">9. Extrude the Sketch</p>
        <div className="flex space-x-4 my-4">
          <Image
            src="/freecad/img_7.png"
            alt="FreeCAD"
            width={1024}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Now that we have the base shape of the bin, we can extrude it to give
          it height. Use the "Pad" tool and set the desired height. It is
          recommended to set the height to multiples of 7mm + 4.4mm to the final
          height so it aligns with the gridfinity specification.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">10. Fillet the Edges</p>
        <Image
          src="/freecad/img_8.png"
          alt="FreeCAD"
          width={1024}
          height={400}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Now, using the Fillet tool, select the four lateral edges of the bin,
          and apply a 3.75mm fillet to them.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">11. Top lip</p>
        <p className="box-in">
          <Image
            src="/freecad/img_9.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          Select the top face of the bin, and press the "Pocket" tool. Set the
          "length" to 1.90 mm and the "taper angle" to -45º.
        </p>
        <p className="box-in">
          <div className="grid grid-cols-2 gap-4 my-4">
            <Image
              src="/freecad/img_10.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain w-full h-auto"
            />
            <Image
              src="/freecad/img_11.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain w-full h-auto"
            />
          </div>
          Then, to the resulting face, create a new "Pocket" of 1.8mm and 0º.
        </p>
        <p className="box-in">
          <Image
            src="/freecad/img_12.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          Finally, create another "Pocket" of 0.7mm and -45º. This will create
          the characteristic lip of the gridfinity bins.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">12. Bottom of the bin</p>
        <p className="box-in">
          <Image
            src="/freecad/img_13.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          To create the bottom of the bin, select the bottom face, and create a
          new Sketch. Then, using the external geometry tool, click on the face,
          select the resulting edge, and using the "Offset" tool, crete a 2.15mm
          offset.
        </p>
        <p className="box-in">
          <Image
            src="/freecad/img_14.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          Next, exit the sketch, and create a 2.6mm Pocket.
        </p>
        <p className="box-in">
          <div className="grid grid-cols-2 gap-4 my-4">
            <Image
              src="/freecad/img_15.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
            <Image
              src="/freecad/img_16.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
          </div>
          After that, click again on the face, and create a new sketch. Create a
          rectangle (37.7 x 2.15 mm) that is in the middle of the body (like in
          the image). Once again, exit the sketch, and create a 2.6mm Pocket.
        </p>
        <p className="box-in">
          <Image
            src="/freecad/img_17.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/freecad/img_18.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/freecad/img_19.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          Next, fillet the lateral edges of the squares that we just created
          with a radius of 1.6mm; chamfer the top faces of the squares with
          0.8mm; and finally, create a 2.14mm chamfer on the next face.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">13. Magnet and screw holes</p>
        <p className="box-in">
          <div className="grid grid-cols-2 gap-4 my-4">
            <Image
              src="/freecad/img_20.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
            <Image
              src="/freecad/img_21.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
          </div>
          To add the magnets and screw holes, select the bottom square face, and
          create a new sketch. Then, using the "Circle from Center" tool, create
          a 6.5mm circle with its center 4.8mm away from the square's edge.
          Pocket it 2mm, and press the hole face that has been done and press
          the "Hole" tool. Set the Diameter to 3mm, and Depth to 2.75mm.
        </p>
        <p className="box-in">
          <Image
            src="/freecad/img_22.png"
            alt="FreeCAD"
            width={1024}
            height={400}
            className="border border-gray-700 rounded-lg object-contain"
          />
          Finally, using the Linera Pattern tool, select BOTH the magnet and
          screw hole features, and set both directions spacing to 26mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">Base bin done</p>
        <p className="box-in">
          Now your base bin is done! You can stop following the guide here and
          start customizing your bin by adding dividers, holes, or any other
          feature you want, or you can continue following the guide if you would
          like to know how you can do so.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">14. SD card holes</p>
        <p className="box-in">
          <div className="grid grid-cols-2 gap-4 my-4">
            <Image
              src="/freecad/img_23.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
            <Image
              src="/freecad/img_24.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
          </div>
          To add the SD card holes, we will first, select the top face of the bin, and create a new sketch. Then, we will create a 2.4x21mm rectangle that is 1.5mm away from the borders.
          <br />
          Then, will use the Linear pattern tool to create a total of 8 occurrences. 
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">15. Pen holes</p>
        <p className="box-in">
            <Image
              src="/freecad/img_25.png"
              alt="FreeCAD"
              width={1024}
              height={400}
              className="border border-gray-700 rounded-lg object-contain"
            />
          To add the pen holes, the process is the same as the SD card holes, but instead of a 2.4x21mm rectangle, we will create a 12mm diameter circle that is 1.5mm away from the borders.
          
        </p>
      </div>

      <div className="box-out text-center" id="submit">
        <h2 className="box-title">All done?</h2>
        <p className="box-in">
          Export your design and submit it to get your filament grant!
          <br />
          <br />
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
