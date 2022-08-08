import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex items-center flex-col space-y-5">
          <Image
            src={"/assets/Icon.jpg"}
            width={100}
            height={100}
            alt="Avatar"
            className="rounded-full"
          />
          <section id="about" className="flex flex-col items-center space-y-1">
            <h1 className="font-semibold text-3xl text-gray-100">About Me</h1>
            <p className="text-gray-400 text-lg w-[23rem] lg:max-w-[50rem] lg:w-full">
              Hello, I am a developer from Indonesia 👋 I am born on October 6,
              2007 in Jakarta ( 15 y.o ). I am currently studying in Mentari
              Intercultural School Bintaro, Senior Year. I got into programming
              in the start of the Covid-19 Pandemic. My hobbies are programming,
              games, biking. I am the youngest in my family with 2 older
              sisters.
            </p>
          </section>
        </div>

        <section
          id="projects"
          className="flex flex-col items-center mt-80 space-y-4"
        >
          <h1 className="font-semibold text-3xl text-gray-100">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Project
              title="eazyurl.xyz"
              description="Shorten a very longggg URL so you can remember.."
              redirectURL="https://www.eazyurl.xyz/"
            />
          </div>
        </section>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
