
import { NavLink } from "react-router-dom";

export default function Create() {
    
    return (
        <div className="create-container">
            <nav className="nav-return">
                <NavLink to="/">
                    <button>Return to Home</button>
                </NavLink>
            </nav>
            

            <div className="form-container">
            {/* {message && <p className="message-create" >{message}</p>} */}
            <p className="error-form">
                {/* {error.message} */}
            </p>
                <form>
                    <label htmlFor="name">
                        Name:
                        <input type="text"  name="name"  placeholder="Enter your name..." />
                    </label>
                   

                    <label htmlFor="lastName">
                        Last name:
                        <input type="text"  name="lastName"  placeholder="Enter your Lastname..." />
                    </label>
                    

                    <label htmlFor="nationality">
                        Nationality:
                        <input type="text"  name="nationality"  placeholder="Example: Mexican" />
                    </label>

                    <label htmlFor="birthdate">
                        Birthdate:
                        <input type="date"  name="birthdate"  placeholder="xxxx-xx-xx" />
                    </label>

                    <label htmlFor="image">
                        Image:
                        <input type="text"  name="image"  placeholder="image.jpg" />
                    </label>

                    <label htmlFor="description">
                        Description:
                        <input type="text"  name="description"  placeholder="Enter your description..." />
                    </label>

                    {/* <div className="teams-form">
                        <label>
                            Team:
                            <select onChange={handleChange} disabled={team.length >= 3}>
                                <option value="">Teams</option>
                                {allTeams?.map((team, index) => (
                                    <option key={index} value={team}>
                                        {team}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div> */}

                    {/* <div className="team">
                        {team?.map((tea, index) => (
                            <p className="selectedTeam" key={index} value={tea} onClick={() => handleTeamRemove(index)}>
                                {" "}
                                {tea}
                            </p>
                        ))}
                    </div> */}

                    <input type="submit" className="btn-create" value="Submit" />
                    
                </form>
            </div>
        </div>
    );
}
