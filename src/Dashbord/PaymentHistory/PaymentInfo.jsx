import jsPDF from "jspdf";

const PaymentInfo = ({ item, index }) => {
    console.log(item);

    // invoice generator 
    const createInvoice = () => {
        const doc = new jsPDF('a4');
        doc.addFont('arial')

        // Set text color for Course Code
        doc.setTextColor(0, 0, 255); // Blue color
        doc.text(20, 20, ` Course Code: ${item._id}`);

        // Set text color for Transaction Code
        doc.setTextColor(255, 0, 0); // Red color
        doc.text(20, 40, ` Transaction Code: ${item.transaction}`);

        // Set text color for Transaction Date
        doc.setTextColor(0, 128, 0); // Green color
        doc.text(20, 60, ` Transaction Date: ${item.date}`);
        // Set text color for Transaction Code
        doc.setTextColor(255, 0, 0); // Red color
        doc.text(20, 80, ` Email: ${item.email}`);
        // Set text color for the thank you message
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(20, 140, 'We Wise for good day');
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(20, 160, 'Raihanul Islam');

        // Save the PDF with a specified name
        doc.save(`Invoice ${item._id}.pdf`);
    };


    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{item.transaction}</td>
            <td>{item.couresId}</td>
            <td>{item.date} </td>
            <td><button onClick={createInvoice} className="btn btn-outline">invoice</button> </td>
        </tr>
    );
};

export default PaymentInfo;