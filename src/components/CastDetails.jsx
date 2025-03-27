import React from "react";
import { useParams } from "react-router-dom";

const CastDetails = () => {
  return (
    <div className="min-h-screen flex flex-col px-20 pb-20">
      <div className="w-full h-screen flex flex-col md:flex-row gap-5">
        <div className="flex items-center h-full w-[25%]">
          <img
            className="aspect-[2/3]"
            src="https://image.tmdb.org/t/p/w500/e77LbvRk5Qu3qtsBlpgr74GnPao.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 h-full w-[75%]">
          <h5>Daisy Ridley</h5>
          <p className="text-md">
            Daisy Jazz Isobel Ridley (born 10 April 1992) is an English actress,
            who rose to prominence for her role as Rey in the Star Wars sequel
            trilogy: The Force Awakens (2015), The Last Jedi (2017), and The
            Rise of Skywalker (2019). She also appeared in the mystery film
            Murder on the Orient Express (2017), played the title character of
            the romantic drama Ophelia (2018), and has done occasional voice
            acting, notably the live-action/animated film Peter Rabbit (2018)
            and video games such as 12 Minutes. Description above from the
            Wikipedia article Daisy Ridley, licensed under CC-BY-SA, full list
            of contributors on Wikipedia.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center h-[85vh] gap-5">
        <div className="flex h-[50%] w-full flex-col items-start gap-2">
          <h3>Movies</h3>
          <div className="flex gap-3 h-full w-full overflow-x-auto">
            <div className="flex aspect-[2/3]">
              <img
                src="https://image.tmdb.org/t/p/w500/pYJAsA9trJgRkoRow6AVgN9fBds.jpg"
                alt=""
              />
            </div>
            <div className="flex aspect-[2/3]">
              <img
                src="https://image.tmdb.org/t/p/w500/pYJAsA9trJgRkoRow6AVgN9fBds.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex h-[50%] flex-col items-start gap-2">
          <h3>Tv Shows</h3>
          <div className="flex gap-3 h-full overflow-x-auto">
            <div className="flex aspect-[2/3]">
              <img
                src="https://image.tmdb.org/t/p/w500/pYJAsA9trJgRkoRow6AVgN9fBds.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
