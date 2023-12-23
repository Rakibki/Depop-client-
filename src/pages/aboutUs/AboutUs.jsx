import aboutimg from "../../assets/image/about.jpg";
import about2 from "../../assets/image/about-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <img src={aboutimg} alt="" />

      <div className=" p-10">
        <h2 className="text-3xl">OUR STORY</h2>
        <p className="text-lg mt-6 mb-4 font-semibold">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <p>
          Saw wherein fruitful good days image them, midst, waters upon, saw.
          Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
          years itself so seed fifth for grass evening fourth shall you're unto
          that. Had. Female replenish for yielding so saw all one to yielding
          grass you'll air sea it, open waters subdue, hath. Brought second
          Made. Be. Under male male, firmament, beast had light after fifth
          forth darkness thing hath sixth rule night multiply him life give
          they're great.
        </p>

        <div className="grid grid-cols-2 mt-6 gap-5 items-center">
          <div>
            <img className="w-full" src={about2} alt="" />
          </div>
          <div>
            <h1 className="text-3xl mb-4 font-semibold">The Company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
