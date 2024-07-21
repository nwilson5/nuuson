const Image200x = () => (
    <img
        src="/images/profile200x200.webp"
        srcSet="/images/profile200x200.webp 1x, 
          /images/profile300x300.webp 1.5x, 
          /images/profile400x400.webp 2x"
        alt="Nicholas Wilson"
        width="200"
        height="200"
        className="rounded-full mx-auto text-center my-4"
    />
);

export default Image200x;