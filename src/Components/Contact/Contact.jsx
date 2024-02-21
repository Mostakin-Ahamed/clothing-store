

const Contact = () => {
    return (
        <div className="bg-[#ffff] w-4/6 mx-auto space-y-4 my-10 p-8 drop-shadow-2xl">
            <h1 className="text-4xl text-center font-bold">want to say us something?</h1>
            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, suscipit!</p>
            <div className="flex flex-col justify-center items-center gap-4">
                <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs" />
                <button className="btn btn-outline ">Submit</button>
            </div>

        </div>
    );
};

export default Contact;