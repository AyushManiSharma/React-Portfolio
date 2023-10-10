import React from "react";
import portfolio from "";
import textEditor from "../assets/text-Editor.png";
import ReadMeGenerator from "../assets/ReadMeGenerator";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">

        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/AyushManiSharma/Professional-Portfolio">
                {" "}
                <img
                  src={portfolio}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Professional-Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Professional-Portfolio</h4>
              <p>
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/AyushManiSharma/Text-Editor">
                {" "}
                <img
                  src={textEditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/AyushManiSharma/README-Generator">
                {" "}
                <img
                  src={ReadMeGenerator}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ReadMeGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>ReadMeGenerator</h4>
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;