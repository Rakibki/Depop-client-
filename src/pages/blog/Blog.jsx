import PageTitle from "../../components/pageTitle/PageTitle";
import blog1 from "../../assets/image/blog-1.jpg";
import blog2 from "../../assets/image/blog-2.jpg";

const Blog = () => {
  return (
    <div>
      <PageTitle text={"Blog"} />

      <div className="grid my-16 items-center gap-3 grid-cols-2">
        <div className="card rounded-none bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Woman with good shoes is never be ugly place
            </h2>
            <p>
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <div className="card-actions justify-start mt-3">
              <div className="text-[#222222]">
                <button className="text-lg font-medium">
                  Continue Reading
                </button>
                <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="card rounded-none bg-base-100 shadow-xl">
          <figure>
            <img src={blog2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Woman with good shoes is never be ugly place
            </h2>
            <p>
              Midst one brought greater also morning green saying had good. Open
              stars day let over gathered, grass face one every light of under.
            </p>
            <div className="card-actions justify-start mt-3">
              <div className="text-[#222222]">
                <button className="text-lg font-medium">
                  Continue Reading
                </button>
                <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
