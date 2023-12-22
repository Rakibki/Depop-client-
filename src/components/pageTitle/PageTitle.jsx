import pageTitle from "../../assets/image/pageTitle.jpg";

const PageTitle = ({ text }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${pageTitle})`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
      className="w-full relative h-[200px]"
    >
      <div className="flex justify-center text-white items-center">
        <h1 className="text-3xl mt-16 z-20">Home / {text}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
