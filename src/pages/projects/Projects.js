import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <h2>Chat Bot AI Video</h2>
                <video width="640" height="480" controls autoplay>
                  <source
                    src={require(`../../assests/chatbot_ai_video.mp4`)}
                    type="video/mp4"
                  ></source>
                  Your browser does not support the video tag.
                </video>
                <div className="projects-list">
                <p>
                <ul >
                <li>The Chat API Assistant allows users to interact with an AI-powered chatbot by following a structured process.</li>
                <li>Users rst create an Assistant, representing the entity that responds to messages.</li>
                <li>Conversations are organized into Threads, with one Thread per user initiated upon conversation start.</li>
                <li>Messages, containing text and optionally les, are added to Threads, providing the input for the Assistant.</li>
                <li>The Assistant runs asynchronously, processing messages and appending responses to Threads. Users can check the status of runs and
                retrieve the Assistant's responses to display in the frontend UI.</li>
                <li>The backend of the Chat API Assistant is built using a SpringBoot Rest Controller, which communicates with the AI engine to
retrieve responses to user queries. Additionally, it persists chat history in a database using JPA, storing messages, responses,
timestamps, and user identiers for future reference and analysis</li>
              </ul>
                </p></div>

                <h2>Snake Game Video</h2>
                <video width="640" height="480" controls autoplay>
                  <source
                    src={require(`../../assests/SnakeGame.mp4`)}
                    type="video/mp4"
                  ></source>
                  Your browser does not support the video tag.
                </video>
                <div className="projects-list">
                <p>
                <ul >
                <li>.</li>
                
              </ul>
                </p></div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
