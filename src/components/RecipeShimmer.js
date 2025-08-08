const RecipeShimmer = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-8 mt-20">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className=" h-40 w-5/12 md:h-96 bg-gray-200 animate-pulse rounded-md"></div>

        <div className="flex flex-col gap-4 w-full md:w-7/12">
          <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-5 w-1/2 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-20 w-full bg-gray-200 animate-pulse rounded"></div>
          <div>
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-4"></div>
            <div className=" grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {Array.from({ length:8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-2 rounded-xl shadow text-center"
                >
                  <div className="w-8 h-8 mx-auto mb-2 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-3 w-3/4 mx-auto mb-1 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-3 w-1/2 mx-auto bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecipeShimmer;
