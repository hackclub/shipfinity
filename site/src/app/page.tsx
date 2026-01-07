import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity</h1>
        <p className="mt-4 text-gray-300">
          A Hack Club YSWS where you ship a Gridfinity bin, and we'll send you
          it (or filament)!
        </p>
        <br />
        <Image
          src="/bin3.png"
          alt="bin3"
          className="border border-gray-700 rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="box-out">
        <h2 className="box-title">What is Gridfinity?</h2>
        <p className="box-in">
          Gridfinity is a modular, open-source grid storage system designed for
          workshops and other workspaces to help with organization. It uses a
          standardized grid pattern (42x42mm) and modular bins that can be
          customized to fit various tools, parts, or supplies. The system is
          highly flexible, allowing users to create tailored storage solutions
          that maximize efficiency and minimize clutter.
        </p>
      </div>
      <br />
      <div className="box-out">
        <h2 className="box-title">What are the requirements?</h2>
        <p className="box-in">
          1. Spend at least (TBD) hours designing the bins <br />
          2. Your submission must be unique. You may be asked to clarify why
          your bin is better/different if a similar 3D model already exists{" "}
          <br />
          3. Your submission must have a purpose <br />
          4. You must be 18 or under.
        </p>
      </div>

      {/* Main Content */}
      <main className="px-6 pb-20 space-y-8">
        <div className="section">
          <div className="card">
            <h2 className="card-title">
              What is Gridfinity?
            </h2>
            <p className="card-content">
              Gridfinity is a modular, open-source grid storage system designed for
              workshops and other workspaces to help with organization. It uses a
              standardized grid pattern (42×42mm) and modular bins that can be
              customized to fit various tools, parts, or supplies. The system is
              highly flexible, allowing users to create tailored storage solutions
              that maximize efficiency and minimize clutter.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              Requirements
            </h2>
            <ul className="card-content space-y-2">
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">1.</span>
                Spend at least 4 hours designing the bins
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">2.</span>
                Your submission must be unique. You may be asked to clarify why
                your bin is better/different if a similar 3D model already exists
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">3.</span>
                Your submission must have a purpose
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">4.</span>
                You must be 18 or under
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              What will I get?
            </h2>
            <ul className="card-content space-y-2">
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">1.</span>
                You'll receive a grant locked to filament vendors at $4/hour of
                your design time
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">2.</span>
                When the event ends, a week-long voting will determine the best
                bins
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">3.</span>
                The top 5 vote-getting participants will each receive an extra
                grant equal to (Total hours spent by all participants / 5)
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              What have people already made?
            </h2>
            <p className="card-content mb-4">
              There are lots of community-made bins and collections which can be
              found in pages like{" "}
              <a href="https://thangs.com/category/Gridfinity/Bins">Thangs</a> or{" "}
              <a href="https://www.printables.com/search/models?q=tag%3Agridfinity">
                Printables
              </a>
            </p>
            <p className="text-gray-400 mb-3">A few remarkable examples:</p>
            <ul className="card-content space-y-2">
              <li>
                <a href="https://www.printables.com/model/301673-gridfinity-tool-holder-collection">
                  Gridfinity tool holder collection
                </a>{" "}
                — A collection of tool holders for the Gridfinity system
              </li>
              <li>
                <a href="https://www.printables.com/model/1200145-gridfinity-collection">
                  Pegoku's Gridfinity collection
                </a>{" "}
                — A collection of Pegoku's (YSWS author) Gridfinity bins
              </li>
              <li>
                <a href="https://www.printables.com/model/719729-gridfinity-complete-kitchen-collection-w-modular-e">
                  Gridfinity Kitchen Collection
                </a>{" "}
                — A complete set of kitchenware bins for Gridfinity
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="card">
            <h2 className="card-title">
              How do I start?
            </h2>
            <p className="card-content">
              Already familiar with CAD and Gridfinity? Simply open your preferred
              editor and start creating a new project!
            </p>
            <p className="card-content mt-3">
              New to CAD?{" "}
              <Link href="/guide">Check out our beginner's guide</Link> to get
              started. Don't forget to join the{" "}
              <a href="https://hackclub.enterprise.slack.com/archives/C08EEU7T4GM">
                #shipfinity
              </a>{" "}
              channel on Slack!
            </p>
          </div>
        </div>

        <div className="section pt-8" id="submit">
          <div className="card bg-gray-800/60 border-indigo-500/30 text-center py-10">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to ship?</h2>
            <p className="text-gray-400 mb-6">
              Finished your bin? Submit your project and get your filament grant!
            </p>
            <a
              href="https://forms.hackclub.com/t/e4RhUQhpuUus"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Submit Your Project
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="section text-center text-gray-500 text-sm">
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
        </div>
      </footer>
    </div>
  );
}
