import React from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import "./profile.css";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { TbHandFingerRight } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMiniPencil } from "react-icons/hi2";
const Profile = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Search main="Profile" secondmains="Profile"></Search>
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <div style={{ marginLeft: "300px" }}>
        {/* bg section */}
        <div
          style={{
            margin: "10px",
            width: "95%",
            height: "280px",
            borderRadius: "10px",
            backgroundImage:
              "url('https://demos.creative-tim.com/material-dashboard-react/static/media/bg-profile.af1219a742e09fc7b612.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "5px 5px 25px gray",
          }}
        ></div>

        {/* profile section */}
        <div
          style={{
            border: "2px solid white",
            width: "90%",
            position: "relative",
            left: "35px",

            top: "-40px",
            borderRadius: "10px",
            boxShadow: "4px 4px 30px gray",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
              <img
                className="pic"
                src="data:image/jpeg;base64,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"
                alt=""
              ></img>
              <h4 className="name">
                Himanshu Kumar Barnawal
                <br />
                <b>Software Developer</b>
              </h4>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D3D3D3",
                height: "50px",
                borderRadius: "10px",
                padding: "10px",
                marginTop: "18px",
                marginRight: "10px",
              }}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <button
                  className="profile_btn"
                  style={{
                    height: "40px",
                    width: "100px",
                    border: "none",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  {" "}
                  <MdHome />
                  App
                </button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <button
                  className="profile_btn"
                  style={{
                    height: "40px",
                    width: "100px",
                    border: "none",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  <BiMessageDots /> Message
                </button>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <button
                  className="profile_btn"
                  style={{
                    height: "40px",
                    width: "100px",
                    border: "none",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  <IoSettingsOutline /> Setting
                </button>
              </NavLink>
            </div>
          </div>
          <br />
          <br />
          {/* after profile section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div style={{ borderRight: "1px solid gray", width: "30%" }}>
              <h5 style={{ color: "gray", fontSize: "20px", float: "left" }}>
                platform settings
              </h5>
              <br />
              <br />
              <p style={{ color: "#ff5733", fontSize: "25px" }}>Account</p>
              <li>Email me when someone follows me</li>
              <li>Email me when someone answers on my post</li>
              <li>Email me when someone mentions me</li>
              <p style={{ color: "#ff5733", fontSize: "25px" }}>Application</p>
              <TbHandFingerRight />
              <mark>New launches and projects</mark>
              <br />
              <TbHandFingerRight /> <mark>Monthly product updates</mark>
              <br />
              <TbHandFingerRight />
              <mark>Subscribe to newsletter</mark>
              <br />
            </div>
            <div style={{ borderRight: "1px solid gray", width: "30%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "20px",
                }}
              >
                <h5 style={{ color: "gray", fontSize: "20px", float: "left" }}>
                  profile information
                </h5>
                <HiMiniPencil style={{ color: "gray" }} />
              </div>
              <br />
              <br />
              <p>
                Hi, I’m Himanshu, Decisions: If you can’t decide, the answer is
                no. If two equally difficult paths, choose the one more painful
                in the short term (pain avoidance is creating an illusion of
                equality).
              </p>
              <div class="user-info">
                <p>
                  <strong>Full Name:</strong>Himanshu K. Barnawal
                </p>
                <p>
                  <strong>Mobile:</strong>{" "}
                  <a style={{ color: "black" }} href="tel:+9798106520">
                    9798106520
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    style={{ color: "black" }}
                    href="mailto:barnawalhimanshu0@gmail.com"
                  >
                    barnawalhimanshu0@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Location:</strong> Ahmedabad
                </p>
                <p>
                  <strong>Social:</strong>
                  {"  "}
                  <FaLinkedinIn
                    style={{ color: "#ff5733", cursor: "pointer" }}
                  />{" "}
                  <FaGithub style={{ color: "#ff5733", cursor: "pointer" }} />{" "}
                  <FaFacebookSquare
                    style={{ color: "#ff5733", cursor: "pointer" }}
                  />{" "}
                  <FaYoutube style={{ color: "#ff5733", cursor: "pointer" }} />
                  {"  "}
                  <FaTwitter style={{ color: "#ff5733", cursor: "pointer" }} />
                </p>
              </div>
            </div>
            <div style={{ width: "30%" }}>
              <h5 style={{ color: "gray", fontSize: "20px", float: "left" }}>
                conversations
              </h5>{" "}
              <br />
              <br />
              <table>
                <tbody>
                  {/* User 1 */}
                  <tr>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px 0",
                      }}
                    >
                      <img
                        src="https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg"
                        alt="User Pictue"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <strong
                        style={{
                          fontSize: "12px",
                          color: "black",
                          marginRight: "10px",
                        }}
                      >
                        Sophie B.
                      </strong>
                      <button
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontSize: "12px",
                          marginLeft: "93px",
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontSize: "12px" }}>
                        Hi! I need more information..
                      </p>
                    </td>
                  </tr>

                  {/* User 2 */}
                  <tr>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px 0",
                      }}
                    >
                      <img
                        src="https://demos.creative-tim.com/material-dashboard-react/static/media/ivana-square.f7bc23b269d1d2509c82.jpg"
                        alt="User Piture"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <strong
                        style={{
                          fontSize: "12px",
                          color: "black",
                          marginRight: "10px",
                        }}
                      >
                        Anne Marie
                      </strong>
                      <button
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontSize: "12px",
                          marginLeft: "85px",
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontSize: "12px" }}>
                        Awesome work, can you..
                      </p>
                    </td>
                  </tr>

                  {/* User 3 */}
                  <tr>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px 0",
                      }}
                    >
                      <img
                        src="https://demos.creative-tim.com/material-dashboard-react/?_ga=2.182032417.729214523.1743504643-1286314504.1743159618#/profile"
                        alt="User Pictue"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <strong
                        style={{
                          fontSize: "12px",
                          color: "black",
                          marginRight: "10px",
                        }}
                      >
                        Ivanna
                      </strong>
                      <button
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontSize: "12px",
                          marginLeft: "110px",
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontSize: "12px" }}>About files I can..</p>
                    </td>
                  </tr>

                  {/* User 4 */}
                  <tr>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px 0",
                      }}
                    >
                      <img
                        src="https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg"
                        alt="Us icture"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <strong
                        style={{
                          fontSize: "12px",
                          color: "black",
                          marginRight: "10px",
                        }}
                      >
                        Peterson
                      </strong>
                      <button
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontSize: "12px",
                          marginLeft: "100px",
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontSize: "12px" }}>
                        Have a great afternoon..
                      </p>
                    </td>
                  </tr>

                  {/* User 5 */}
                  <tr>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px 0",
                      }}
                    >
                      <img
                        src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
                        alt="User Pictue"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <strong
                        style={{
                          fontSize: "12px",
                          color: "black",
                          marginRight: "10px",
                        }}
                      >
                        Nick Daniel
                      </strong>
                      <button
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                          fontSize: "12px",
                          marginLeft: "90px",
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ fontSize: "12px" }}>
                        Hi! I need more information..
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <h3 style={{ padding: "10px" }}>Projects</h3>
          {/* {project section start} */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            {/* 1st project */}
            <div>
              <div
                style={{
                  margin: "10px",
                  width: "200px",
                  height: "100px",
                  borderRadius: "10px",
                  backgroundImage:
                    "url('https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "5px 5px 25px gray",
                }}
              ></div>

              <div>
                <h4>project #1</h4>
                <h5>E-Commerce Website</h5>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Fully Built in React Using Naviagtion <br />
                  from product, addto cart and Adding <br />
                  Address to Order Completion
                </p>
                <button
                  className="project"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    color: "lime",
                    border: "2px solid orange",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    href="https://snazzy-kitten-e6a2b1.netlify.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            {/* 2nd project */}
            <div>
              <div
                style={{
                  margin: "10px",
                  width: "200px",
                  height: "100px",
                  borderRadius: "10px",
                  backgroundImage:
                    "url('https://private-user-images.githubusercontent.com/129401939/428584585-2a22003a-76cb-4cdf-89a6-c9d3f32f56e9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxMTU0NDUsIm5iZiI6MTc0NDExNTE0NSwicGF0aCI6Ii8xMjk0MDE5MzkvNDI4NTg0NTg1LTJhMjIwMDNhLTc2Y2ItNGNkZi04OWE2LWM5ZDNmMzJmNTZlOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwOFQxMjI1NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZTc0NWYzOWUwMWY4NzBjYzQ5MTc5MWUzNDM1NjQ5MWY0MDVkZjk5NDY5MmQyYTgzMDNiMmU0NGYzMDE3OGJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RypuPTNqixpwkADDwIxSLgLesDS-SlMqQR6uMjUtfIc')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "5px 5px 25px gray",
                }}
              ></div>
              <div>
                <h4>project #2</h4>
                <h5>🍽️ MealNest</h5>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Fully Responsive using React
                  <br /> and Api To Find Meal With
                  <br /> their names.
                </p>
                <button
                  className="project"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    color: "lime",
                    border: "2px solid orange",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    href="https://superlative-cocada-0cbbc2.netlify.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            {/* 3rd project */}
            <div>
              <div
                style={{
                  margin: "10px",
                  width: "200px",
                  height: "100px",
                  borderRadius: "10px",
                  backgroundImage:
                    "url('https://private-user-images.githubusercontent.com/129401939/431652702-c2cd8fb9-407d-4f69-a9f9-40323a2cdfec.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxNzA1NTgsIm5iZiI6MTc0NDE3MDI1OCwicGF0aCI6Ii8xMjk0MDE5MzkvNDMxNjUyNzAyLWMyY2Q4ZmI5LTQwN2QtNGY2OS1hOWY5LTQwMzIzYTJjZGZlYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwOVQwMzQ0MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NmI1N2E4MWU5ZmE5MDNlODkxOTc5YjJjM2NmZGVmODJkNTk5OWRiNDJhNTdlNWU0ZmUxZmQ0MzM5NmU4NTM4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Bdajtj20POOvQ2891watPmvvBaZA0FcWyoF7juKN2VE')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "5px 5px 25px gray",
                }}
              ></div>
              <div>
                <h4>project #3</h4>
                <h5>Saving Tracker</h5>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Fully Responsive user can add their <br />
                  sallary and his spending amount in <br /> month it will
                  calculate his/her saving
                </p>
                <button
                  className="project"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    color: "lime",
                    border: "2px solid orange",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    href="https://lucky-madeleine-f3dac6.netlify.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            {/* 4th project */}
            <div>
              <div
                style={{
                  margin: "10px",
                  width: "200px",
                  height: "100px",
                  borderRadius: "10px",
                  backgroundImage:
                    "url('https://private-user-images.githubusercontent.com/129401939/431657135-9e3c35e2-bcdd-4e93-8fa9-3287ec6fd379.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxNzE5OTYsIm5iZiI6MTc0NDE3MTY5NiwicGF0aCI6Ii8xMjk0MDE5MzkvNDMxNjU3MTM1LTllM2MzNWUyLWJjZGQtNGU5My04ZmE5LTMyODdlYzZmZDM3OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwOVQwNDA4MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZmUwMDJjNzRiNmI0ZjJmNjI3NjI0OWU0YmRjMWViNjY4OTQ2ZDM1N2YwMGZlMmU1NTUyOWY5ZmY0MGM1ZGE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NfjjfV1TytxkMAXgT0MLGFdexxnpSWWfUHopJC3vvqo')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "5px 5px 25px gray",
                }}
              ></div>
              <div>
                <h4>project #4</h4>
                <h5>News App</h5>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Fully Built in React Using Naviagtion from product, add to
                  cart and Adding Address to Order Completion
                </p>
                <button
                  className="project"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    color: "lime",
                    border: "2px solid orange",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    href="https://67f5f1ea41896cf18d784279--gorgeous-pixie-5f4c1e.netlify.app/"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
