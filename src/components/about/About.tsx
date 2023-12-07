import "./about.styles.scss";

const About = () => {
  return (
    <div className="text-container">
      <p className="paragraph">
        {" "}
        Hi, I'm Felix! Soon to be Fullstack developer from Lund, Sweden with
        solid knowledge in web development. Currently studying at{" "}
        {
          <a>
            <span className="link-in-text">Teknikhögskolan</span>
          </a>
        }{" "}
        in Lund.
        <br />
        <br />
        I'm Currently living in Lund, Sweden. I've always had a passion for
        technology and especially programming since I was 10. That's when my
        grandpa gave me my first book about C++ and I was immediately hooked.
        Since then, I've taught myself many languages and software in my quest
        to become the ultimate tech warrior.
        <br />
        <br />
        Currently, I'm looking for a job as a developer in order to get hands on
        experience from the industry but also to grow as a developer.
        <br />
        <br />
        Aside from tech, I love hunting, being outdoors in the forest, playing
        golf, and skiing.
      </p>
    </div>
  );
};

export default About;
