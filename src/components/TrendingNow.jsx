const TrendingNow = ({ movies }) => {
  return (
    <div className="py-15 bg-[#111827]">
      <h1 className="text-white text-4xl font-bold">Trending Now</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-9">
        {/* <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="">
            <img
              src="https://img.hulu.com/user/v3/artwork/120f28f3-7240-4066-9614-3a534d7cea76?base_image_bucket_name=image_manager&base_image=c019efbb-c2b9-47db-b4cb-03f28c644e01&size=458x687&format=webp"
              alt=""
              className="rounded-sm object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/40"></div>
          <div className="absolute inset-0 grid content-end py-9 px-9 text-white group-hover:opacity-100 opacity-0 duration-300 cursor-pointer transition-all">
            <h2 className="text-lg font-bold">Inception</h2>
            <div className="flex">
              <p className="text-sm">2008</p>
              <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
                PG-13
              </p>
            </div>
            <button className="bg-red-600 rounded-full md:px-25 px-9 py-1 mt-3 cursor-pointer hover:bg-red-700">
              Play
            </button>
          </div>
        </div>
         */}

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative items-center justify-center overflow-hidden cursor-pointer"
          >
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-sm object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/40"></div>
            <div className="absolute inset-0 grid content-end py-9 px-9 text-white group-hover:opacity-100 opacity-0 duration-300 cursor-pointer transition-all">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <div className="flex">
                <p className="text-sm">{movie.release_date?.slice(0, 4)}</p>
                <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
                  {movie.adult ? '18+' : 'PG-13'}
                </p>
              </div>
              <button className="bg-red-600 rounded-full md:px-25 px-9 py-1 mt-3 cursor-pointer hover:bg-red-700">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingNow
