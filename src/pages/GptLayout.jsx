import React from "react";
import { useState } from "react";

const GptLayout = () => {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const textarea = e.target;
    setContent(textarea.value);
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
  };
  return (
    <section className="h-screen flex" style={{ backgroundColor: "#212121" }}>
      <aside
        className="h-full w-1/5 flex flex-col text-white px-3"
        style={{
          backgroundColor: "#171717",
        }}
      >
        <nav className=" h-12 flex justify-between items-center">
          <span className="material-symbols-outlined">dock_to_right</span>
          <span className="flex gap-3">
            <i className="text-lg fa-solid fa-magnifying-glass"></i>
            <i className="text-lg fa-solid fa-pen-to-square"></i>
          </span>
        </nav>
        <button className="flex gap-3 items-center text-xs text-start rounded-md p-2 hover:bg-gray-800">
          <i className="fa-solid fa-circle-dot text-md"></i> ChatGPT
        </button>
        <button className="flex gap-3 items-center text-xs text-start rounded-md p-2 hover:bg-gray-800">
          <i className="fa-solid fa-arrows-turn-to-dots text-md"></i> Explore
          GPTs
        </button>
      </aside>

      <main className="relative w-full flex flex-col items-center justify-between gap-3 ">
        <nav className="absolute top-0 left-1/5 flex justify-between items-center w-full px-4 py-2.5">
          <h2 className="text-white text-sm pt-2">
            ChatGPT <i className="fa-solid fa-angle-down"></i>
          </h2>
          <button className="">
            <img
              className="rounded-full hover:bg-[#2f2f2f] h-7"
              src="https://lh3.googleusercontent.com/a/AEdFTp668bwZt-VdMN12R-9L7WsSzLnQo5QnljQB5TYQ7w=s96-c"
              alt=""
              srcset=""
            />
          </button>
        </nav>
        <div
          className="h-full w-full flex flex-col gap-3 items-center justify-center mt-4
        "
        >
          <h1 className="text-white text-2xl">What can I help with?</h1>
          <div
            className="flex w-3/5 flex-col justify-center p-3  rounded-3xl "
            style={{
              background: "#2f2f2f",
            }}
          >
            <textarea
              className="text-sm text-white border-0 focus:outline-none focus:ring-0"
              value={content}
              onChange={handleInput}
              style={{
                background: "#2f2f2f",
                overflow: "hidden",
                resize: "none",
              }}
              rows="1"
              placeholder="Message ChatGPT"
            ></textarea>

            <div className="flex justify-between items-center pt-4">
              <div className=" flex gap-1">
                <button
                  style={{ borderColor: "#424242", borderWidth: "1px" }}
                  className="rounded-full hover:bg-[#676767] px-2.5 py-1 text-white text-xs"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>

                <button
                  style={{ borderColor: "#424242", borderWidth: "1px" }}
                  className="rounded-full hover:bg-[#676767] px-2 py-1.5 text-white text-xs"
                >
                  <i className="fa-solid fa-globe"></i> Search
                </button>

                <button
                  style={{ borderColor: "#424242", borderWidth: "1px" }}
                  className="rounded-full hover:bg-[#676767] px-2 py-1.5 text-white text-xs"
                >
                  <i className="fa-regular fa-lightbulb"></i> Reason
                </button>
              </div>

              <button
                style={{ borderColor: "#424242", borderWidth: "1px" }}
                className="rounded-full hover:bg-[#2f2f2f] bg-white px-2 py-1 text-black text-md"
              >
                <i className="fa-solid fa-chart-simple"></i>
              </button>
            </div>
          </div>

          <div className="flex gap-2 py-2">
            <button
              style={{ borderColor: "#424242", borderWidth: "1px" }}
              className="rounded-full hover:bg-[#2f2f2f] px-2 py-1.5 text-white text-xs flex gap-2 items-center justify-center"
            >
              <i className="fa-solid fa-image text-green-600"></i> Create image
            </button>

            <button
              style={{ borderColor: "#424242", borderWidth: "1px" }}
              className="rounded-full hover:bg-[#2f2f2f] px-2 py-1.5 text-white text-xs flex gap-2 items-center justify-center"
            >
              <i className="fa-solid fa-file-lines text-orange-500"></i>{" "}
              Summarize text
            </button>

            <button
              style={{ borderColor: "#424242", borderWidth: "1px" }}
              className="rounded-full hover:bg-[#2f2f2f]  px-2 py-1.5 text-white text-xs flex gap-2 items-center justify-center"
            >
              <i className="fa-solid fa-gift text-blue-400"></i> Surprise me
            </button>

            <button
              style={{ borderColor: "#424242", borderWidth: "1px" }}
              className="rounded-full hover:bg-[#2f2f2f]  px-2 py-1.5 text-white text-xs flex gap-2 items-center justify-center"
            >
              <i className="fa-regular fa-lightbulb text-yellow-500"></i> Make a
              plan
            </button>

            <button
              style={{ borderColor: "#424242", borderWidth: "1px" }}
              className="rounded-full hover:bg-[#2f2f2f]  px-2 py-1.5 text-white text-xs flex gap-2 items-center justify-center"
            >
              More
            </button>
          </div>
        </div>

        <p className="text-center text-white" style={{ fontSize: "9.5px" }}>
          ChatGPT can make mistakes. Check important info.
        </p>
      </main>
    </section>
  );
};

export default GptLayout;
