
const MilestoneInfo = ({content}) => {
    return (
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 p-2 font-serif ">
            <div className="collapse-title text-xl font-medium">
                {content.name}
            </div>
            <div className="collapse-content">
                Module: Commming Sooon
                Module: Commming Sooon
                Module: Commming Sooon
            </div>
        </div>
        // <div className="milestone border-b">
        //     <div className="flex">
        //         <div className="checkbox"><input type="checkbox" /></div>
        //         <div>
        //             <p>
        //                 Milestone 1 name
        //                 <span><i className="fas fa-chevron-down"></i></span>
        //             </p>
        //         </div>
        //     </div>
        //     <div className="hidden_panel">
        //         <div className="module border-b">
        //             <p>Module Name</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MilestoneInfo;