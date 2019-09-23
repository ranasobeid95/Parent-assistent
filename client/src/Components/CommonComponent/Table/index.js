import React from "react";
import data from "./data";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./index.css";

export const Table = () => {
    return (
        <table className="studentTable">
            <thead className="studentTable__title">
                <tr>
                    <th className="studentTable__title1">
                        Teacher Name
                    </th>
                    <th className="studentTable__title2">
                        Subject
                    </th>
                </tr>
            </thead>
            <tbody className="studentTable__content" >
                {data.map(e => {
                    return (<tr>
                        <Router>
                            <td className="studentTable__content1" >
                                {e.name}
                                <p><Link to="#" className = "studentTable__link">view profile</Link></p>
                            </td>
                            <td className="studentTable__content2" >
                                {e.subject}
                                <p><Link to="#" className = "studentTable__link">view subject</Link></p>
                            </td>
                        </Router>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )



}