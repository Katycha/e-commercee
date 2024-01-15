import Post from "@/components/Post";

const Posts = () => {
  return (
    <section className="md:tw-px-48">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-px-[30px] md:tw-flex md:tw-flex-row tw-gap-x-2.5">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Posts;
