import "./about.styles.scss";

const About = () => {
  return (
    <div className="text-container">
      <p className="paragraph">
        {" "}
        Hi, I'm Felix! Soon to be Fullstack developer from Lund, Sweden with
        solid knowledge in web development. Currently studying at{" "}
        {
          <a
            href="https://teknikhogskolan.se/utbildningar/fullstackutvecklare-javascript/"
            target="_blank"
          >
            <span className="link-in-text">Teknikhögskolan</span>
          </a>
        }{" "}
        in Lund.
        <br />
        <br />
        I'm Currently living in Lund, Sweden. I've always had a passion for
        technology and especially programming since I was 13. That's when my
        grandpa gave me my first book about C++ and I was immediately hooked.
        Since then, I've taught myself many languages and software in my quest
        to become the best of the best.
        <br />
        <br />
        Aside from tech, I love hunting, cooking, playing
        golf, and skiing.
        <br />
        <br />
        Currently, I'm a freelance web developer and graphic designer.
      </p>
    </div>
  );
};

export default About;
