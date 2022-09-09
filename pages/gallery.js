import { client } from "../lib/client";
import YouTube from "../components/Youtube";

export default function Gallery({ videoData }) {
  return (
    <div>
      <h1 className='text-5xl font-bold text-primary text-center mt-12'>
        Gallery
      </h1>
      <div className='h:screen max-w-[1240px] mx-auto p-4 mt-12 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 '>
        {videoData.map((video) => (
          <YouTube videoId={video.videoId} description={video.description} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'yt_link']";
  const videoData = await client.fetch(query);

  return {
    props: { videoData },
  };
};
