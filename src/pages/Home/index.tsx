import Models from "./components/models";
import Top from "./components/top";

const Home = () => {
  return (
    <>
      <Top />
      <div className="text-center text-4xl font-bold py-10 bg-gradient-to-b from-gray-500 to-white">
        Elegance In Motion
      </div>
      <Models />
    </>
  );
};

export default Home;
