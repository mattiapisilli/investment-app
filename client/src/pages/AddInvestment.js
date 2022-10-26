import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../component/Nav";

const AddInvestment = () => {

    const [name, setName] = useState("")
    const [performance, setPerformance] = useState("")
    const [duration, setDuration] = useState("1 MESE")
    const [finishDate, setFinishDate] = useState("")
    const [state, setState] = useState("true")
    const [investCapital, setInvestCapital] = useState("")
    const navigate = useNavigate()

    const saveInvestment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/investments', {
                name,
                performance,
                duration,
                finishDate,
                state,
                investCapital
            });
            navigate("/investments/list")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="app">
            <Nav />
            <div className="wrap_list">
                <h1>Create Investment</h1>
                <p>N.B. inserisci i valori decimali con il punto "." e senza virgola</p>
                <form onSubmit={saveInvestment}>
                    <div className="field_form">
                        <label className="label">Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field_form">
                        <label className="label">Performance</label>
                        <input 
                            type="number" 
                            className="input" 
                            placeholder="Performance"
                            value={performance}
                            onChange={(e) => setPerformance(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field_form">
                        <label className="label">Duration</label>
                        <select 
                            className="select"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option value="1 MESE">1 MESE</option>
                            <option value="6 MESI">6 MESI</option>
                            <option value="12 MESI">12 MESI</option>
                            <option value="18 MESI">18 MESI</option>
                            <option value="24 MESI">24 MESI</option>
                            <option value="36 MESI">36 MESI</option>
                        </select>
                    </div>

                    <div className="field_form">
                        <label className="label">Finish Date</label>
                        <input 
                            type="date" 
                            className="input" 
                            placeholder="Finish Date"
                            value={finishDate}
                            onChange={(e) => setFinishDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field_form">
                        <label className="label">Investment State</label>
                        <select 
                            className="select"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>

                    <div className="field_form">
                        <label className="label">Invest Capital</label>
                        <input 
                            type="number" 
                            className="input" 
                            placeholder="Invest Capital"
                            value={investCapital}
                            onChange={(e) => setInvestCapital(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field_form">
                        <button type="submit" className="btn btn_submit">Save</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddInvestment;