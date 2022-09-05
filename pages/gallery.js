import { client } from "../lib/client";
import Youtube from "../components/Youtube";

export default function Gallery({ videoData }) {
  return (
    <div className='h:screen max-w-[1240px] mx-auto p-4 mt-16 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      <p>COMING SOON!</p>
      {videoData?.map((video) => {
        <iframe
          width='560'
          height='315'
          src='https://www.youtube-nocookie.com/embed/lwVATw4k0Mg?controls=0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>;
      })}
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
