import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Nav from "../component/Nav";
import FilterInvestment from "../component/FilterInvestment";

const InvestmentList = () => {

    const [ investments, setInvestments ] = useState([]);
    const [ filterValue, setFilterValue ] = useState("all");

    const getInvestments = async() => {
        const response = await axios.get('http://localhost:3000/investments');
        setInvestments(response.data);
    }
    const deleteInvestment = async(id) => {
        try {
            await axios.delete(`http://localhost:3000/investments/${id}`)
            getInvestments();
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getInvestments();
    }, [])

    const onFilterSelected = (value) => {
        setFilterValue(value)
    }

    const filteredInvestment = investments.filter((el) => {
        if(filterValue === "active"){
            return el.state === true;
        } else if(filterValue === "inactive"){
            return el.state === false;
        } else {
            return el
        }
    })

    return(
        <div className="app">
            <Nav />
            <div className="wrap_list">
                <h1>Investments List</h1>
                <FilterInvestment filterSelected={onFilterSelected}/>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Performance</th>
                            <th>Duration</th>
                            <th>Finish Date</th>
                            <th>Investment Capital</th>
                            <th>State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInvestment.map((invest, i) => (
                            <tr key={invest.id}>
                                <td>{i + 1}</td>
                                <td>{invest.name}</td>
                                <td>{invest.performance} %</td>
                                <td>{invest.duration}</td>
                                <td>{dateFormat(invest.finishDate, "fullDate")}</td>
                                <td>€ {invest.investCapital}</td>
                                <td>
                                    <input 
                                        type="button" 
                                        className={invest.state ? "state" : "state stop"} 
                                        value={invest.state ? "active" : "inactive"}
                                    />
                                </td>
                                <td>
                                    <Link to={`/investments/${invest.id}/edit`} className="btn_edit">Edit</Link>
                                    <button onClick={() => deleteInvestment(invest.id)} className="btn_delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentList