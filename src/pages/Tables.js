import * as React from 'react';
import Table from '@mui/joy/Table';
import './table.css'; // Import the updated CSS file
import { FaProjectDiagram, FaEllipsisV } from "react-icons/fa"; 
import { BsGithub } from "react-icons/bs";
import { SiAsana } from "react-icons/si";
import { FaAtlassian } from "react-icons/fa6";
import { AiFillSpotify } from "react-icons/ai";
import { FaSlack } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import man from '../component/images/profile.png'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';

function createData(author, email, functionRole, status, employed, date) {
  return { author, email, functionRole, status, employed, date };
}

const rows = [
  createData('John Michael', 'john@creative-tim.com', 'Manager', 'Organization', 'online', '23/04/18'),
  createData('Alexa Liras', 'alexa@creative-tim.com', 'Programator', 'Developer', 'offline', '11/01/19'),
  createData('Laurent Perrier', 'laurent@creative-tim.com', 'Executive', 'Projects', 'online', '19/09/17'),
  createData('Michael Levi', 'michael@creative-tim.com', 'Programator', 'Developer', 'online', '24/12/08'),
  createData('Richard Gran', 'richard@creative-tim.com', 'Manager', 'Executive', 'offline', '04/10/21'),
  createData('Miriam Eric', 'miriam@creative-tim.com', 'Programator', 'Developer', 'offline', '14/09/20'),
];

export default function Tables() {
  return (

    <div>
      <Header></Header>
      <Search main="Tables" secondmains="Tables"></Search>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>


    <div className="table-container">

      <div style={{width:"90%",backgroundColor:"#3993ee",display:"flex",borderRadius:"10px"
      ,marginLeft:"50px",padding:"10px",color:"white",marginTop:"-50px",boxShadow:"0px 0px 10px #3993ee"}}>
 
      <h3>Authors Table</h3>
      </div>
      <br/>
      
     <div>
      <Table>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Author</th>
            <th>Function</th>
            <th>Status</th>
            <th>Employed</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
              <img src={man} alt="User Avatar" className="user-avatar" />
                <strong>{row.author}</strong>
                <br />
                <small style={{ color: 'gray' }}>{row.email}</small>
              </td>
              <td>{row.functionRole}</td>
              <td>{row.status}</td>
              <td>
                <span className={`status-button ${row.employed.toLowerCase()}`}>
                  {row.employed}
                </span>
              </td>
              <td>{row.date}</td>
              <td>
                <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>

    <br/><br/>
    <br/><br/>
    



    <div className="project-table-container">
    <div style={{width:"90%",backgroundColor:"purple",display:"flex",borderRadius:"10px"
      ,marginLeft:"50px",padding:"10px",color:"white",marginTop:"-50px",boxShadow:"0px 0px 10px purple"}}>
 
      <h3>Projects Table</h3>
      </div>
      <br/>

      <div>
      <Table className="project-table">
        <thead>
          <tr>
            <th className="project-header">Project</th>
            <th className="project-header">Budget</th>
            <th className="project-header">Status</th>
            <th className="project-header">Completion</th>
            <th className="project-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="project-name">
              <SiAsana className="project-icon-style"  style={{color:"pink"}}/>
              <strong>Asana</strong>
            </td>
            <td className="project-row">$2,500</td>
            <td className="project-row">
              <span className="project-status-badge status-working">Working</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-60"></div>
              </div>
              60%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="project-name">
              <BsGithub className="project-icon-style" style={{color:"black"}} />
              <strong>Github</strong>
            </td>
            <td className="project-row">$5,000</td>
            <td className="project-row">
              <span className="project-status-badge status-done">Done</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-100"></div>
              </div>
              100%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="project-name">
              <FaProjectDiagram className="project-icon-style" />
              <strong>Atlassian</strong>
            </td>
            <td className="project-row">$3,400</td>
            <td className="project-row">
              <span className="project-status-badge status-canceled">Canceled</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-30"></div>
              </div>
              30%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="project-name">
              <AiFillSpotify className="project-icon-style" style={{color:"green"}} />
              <strong>Spotify</strong>
            </td>
            <td className="project-row">$14,000</td>
            <td className="project-row">
              <span className="project-status-badge status-working">Working</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-80"></div>
              </div>
              80%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td className="project-name">
              <FaSlack className="project-icon-style" style={{color:"purple"}} />
              <strong>Slack</strong>
            </td>
            <td className="project-row">$1,000</td>
            <td className="project-row">
              <span className="project-status-badge status-canceled">Canceled</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-0"></div>
              </div>
              0%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>

          {/* Row 6 */}
          <tr>
            <td className="project-name">
              <FaBinoculars className="project-icon-style" style={{color:"red",fontSize:"30px"}} />
              <strong>Invesion</strong>
            </td>
            <td className="project-row">$2,300</td>
            <td className="project-row">
              <span className="project-status-badge status-done">Done</span>
            </td>
            <td className="project-row">
              <div className="progress-wrapper">
                <div className="progress-fill progress-100"></div>
              </div>
              100%
            </td>
            <td className="project-row">
              <FaEllipsisV className="project-menu-icon" />
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>

    <Footer></Footer>
    </div>
  );
}
