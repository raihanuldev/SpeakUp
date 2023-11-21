import { useEffect, useState } from 'react';
import './content.css';
import MilestoneInfo from './milestoneInfo/MilestoneInfo';
import { useLocation } from 'react-router-dom';

const CouresContent = () => {
    const location = useLocation();
    const couresInfo = location.state?.item;
    // Fake Data for coures Content..
    const [data, setData] = useState([]);
    // console.log(data);
    

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(result => setData(result));
    }, [])

    return (
        <div className="main h-screen bg-black text-white">
            
            {/* <!-- course details start --> */}
            <div className="milestoneDetails">
                <img className="milestoneImage" src={couresInfo.image} alt="" />

                <h1 className="title text-2xl">{couresInfo.name || "Testing"}</h1>
                <p className="details">{couresInfo.details} </p>
            </div>
            {/* <!-- course details end --> */}

            {/* <!-- all milestones & modules start --> */}
            <div>
                <div className="milestones">
                    {/* every single milestone will render here */}
                    {
                        data.map(milestone => <MilestoneInfo key={milestone.id} content={milestone} />)
                    }
                </div>
                <div className="doneList">
                    {/* <!-- done list will load here --> */}
                </div>
            </div>
            {/* <!-- all milestones and modules end --> */}

        </div>

    );
};

export default CouresContent;