
const Cart = ({img}) => {
    return (
        <div className="card w-full bg-pink-100 py-2 shadow-xl">
            <div className="avatar mx-auto">
                <div className="w-12 rounded-full">
                    <img src={img} />
                </div>
            </div>
            <div className="mx-auto">
                <h2 className="card-title">Raihan Sharif</h2>
                <p>ex Student At SpeakUp</p>
            </div>
            <p className="py-4 mx-auto">Work with us. Learn with us. Improve with us.
</p>
        </div>
    );
};

export default Cart;