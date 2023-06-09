
const MyClasses = () => {
    return (
        <div>
            <h2 className="text-center font-semibold text-3xl">MY CLASSES</h2>
            <p>
                My Classes: Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button.

                Total Enrolled Students: Initially it will be zero. If any student has successfully booked the Class, show the total number of students.

                Feedback:

                There will be no feedback if the Class is in pending or approved status.
                If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column.

            </p>
        </div>
    );
};

export default MyClasses;