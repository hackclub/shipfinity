import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Hack Club YSWS
        </p>
        <h1 className="mt-2 text-4xl font-bold text-indigo-400">
          Shipfinity
        </h1>
        <p className="mt-4 max-w-2xl text-gray-300">
          Design a Gridfinity bin, get it printed.
        </p>
        <br />
        <Image
          src="/bin3.png"
          alt="Gridfinity bin"
          className="border border-gray-700 rounded-lg"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="box-out">
        <h2 className="box-title">What is Gridfinity?</h2>
        <p className="box-in">
          Gridfinity is a modular 42x42mm storage system used to organize desks,
          workshops, or any space where the bins fit. The goal is simple: learn
          the basics of CAD by shipping a real 3D model and publishing it. It
          will also give you an incentive to organize your spaces.
        </p>
      </div>

      <div className="box-out">
        <h2 className="box-title">The rules</h2>
        <div className="box-in">
          <ol className="box-list">
            <li>
              Spend at least 3 hours of design work. You can use Hackatime or a
              timelapse plus a five-sentence dev log.
            </li>
            <li>
              Design at least one unique bin with a clear use case, such as a
              holder for soldering tips or a bin for fasteners.
            </li>
            <li>Include photos or renders showing the final result.</li>
            <li>
              Publish the design files on a public model page, such as
              Printables.
            </li>
          </ol>
        </div>
      </div>

      <div className="box-out">
        <h2 className="box-title">What will I get?</h2>
        <div className="box-in">
          <div className="box-grid">
            <div className="box-card">
              <h3 className="font-semibold text-indigo-300">Base grant</h3>
              <p className="mt-2">
                You'll receive a base grant of $4 per hour of approved design
                time, primarily for filament or shipping for PrintingLegion.
              </p>
            </div>
            <div className="box-card">
              <h3 className="font-semibold text-indigo-300">Bonus pool</h3>
              <p className="mt-2">
                The remaining $1 per hour is banked into a community bonus pool.
                After the event, participants can vote for their favorite
                projects. The top 10% of participants will receive an additional
                bonus grant from the banked pool.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box-out">
        <h2 className="box-title">Need inspiration?</h2>
        <div className="box-in">
          <p className="text-gray-300">
            Make a unique Gridfinity bin with a real purpose. That could be a
            holder for soldering tips, a bin for fasteners, a desk organizer for
            pens and SD cards, or a custom tray for art tools.
          </p>
          <p className="mt-4">A few remarkable examples from the community:</p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            <li>
              <a href="https://www.printables.com/model/301673-gridfinity-tool-holder-collection">
                Gridfinity tool holder collection
              </a>{" "}
              - A collection of tool holders for the Gridfinity system.
            </li>
            <li>
              <a href="https://www.printables.com/model/1200145-gridfinity-collection">
                Pegoku's Gridfinity collection
              </a>{" "}
              - A collection of Pegoku's (YSWS author) Gridfinity bins.
            </li>
            <li>
              <a href="https://www.printables.com/model/719729-gridfinity-complete-kitchen-collection-w-modular-e">
                Gridfinity Kitchen Collection
              </a>{" "}
              - A complete set of Kitchenware bins for Gridfinity of all sizes +
              expandable and modular pieces.
            </li>
          </ul>
        </div>
      </div>

      <div className="box-out">
        <p className="box-title">How do I start?</p>
        <p className="box-in">
          Already familiar with CAD and Gridfinity? Simply open your preferred
          editor and start creating. <br /> New to CAD?{" "}
          <Link href="/guide">Read the beginner's guide</Link>. Don't forget to
          join the{" "}
          <a href="https://hackclub.enterprise.slack.com/archives/C08EEU7T4GM">
            #shipfinity
          </a>{" "}
          channel on Slack.
        </p>
      </div>

      <div className="box-out text-center" id="submit">
        <h2 className="box-title">Ready to ship?</h2>
        <p className="box-in">
          Finished your bin? Submit your project and get your filament grant.
          <br />
          <br />
          <a
            href="https://forms.hackclub.com/t/e4RhUQhpuUus"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Submit your project
          </a>
        </p>
      </div>

      <footer className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          Made by{" "}
          <a href="https://github.com/Pegoku" className="text-indigo-400">
            Pegoku
          </a>{" "}
          for{" "}
          <a href="https://hackclub.com" className="text-indigo-400">
            Hack Club
          </a>
        </p>
      </footer>
    </div>
  );
}
