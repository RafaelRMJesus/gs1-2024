import { Earth } from "lucide-react";

export const ExampleSection = () => {
  return (
    <div className="min-h-188 flex w-full px-60 gap-x-4 mt-[-1.5%]">
      <div className="h-176 w-full">
        <div className="bg-gray-900 w-full h-96 rounded-3xl p-2">
          <div className="bg-white rounded-2xl w-full h-full">
            <iframe
              id="video-pitch"
              src="https://www.youtube.com/embed/f78D4tEC608?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="mx-auto rounded-xl w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="bg-gray-900 w-full h-96 rounded-3xl p-2 mt-8">
          <div className="bg-white rounded-2xl w-full h-full">
            <iframe
              id="video-pitch"
              src="https://www.youtube.com/embed/f78D4tEC608?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="mx-auto rounded-xl w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* -----------------------------------------                  ------------------------------------------------------*/}
      <div className="bg-gray-900 w-full h-176 rounded-3xl p-6">
        <h1 className="font-bold text-4xl">
          Inovações tecnológicas permitem a transformação de descarte em
          biocombustível!
        </h1>
      </div>
    </div>
  );
};
