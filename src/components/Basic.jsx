import { useState } from 'react';

export default function Basic() {
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [pn, setPn] = useState(0);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState(0);
    const [showInp, setShowInp] = useState(true);

    const handleSubmit = () => {
        setFirst(fn);
        setLast(ln);
        setPhone(pn);
        setShowInp(!showInp);
    }

    

    return (
        <div className="bg-peach shadow-md shadow-softsun p-6 rounded-lg">
            {showInp === true ? (
                <div>
                    <h3>Basic Details</h3>
                    <p>First Name:</p>
                    <input type="text"   className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder="First Name" value={fn} onChange={(e) => setFn(e.target.value)} />
                    <p>Last Name:</p>
                    <input type="text"    className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder="Last Name" value={ln} onChange={(e) => setLn(e.target.value)} />
                    <p>Phone Number:</p>
                    <input type="text"    className="bg-khoa border-2 border-softsun text-gray-700 p-2 rounded focus:border-lpurple focus:outline-none" placeholder="Phone Number" onChange={(e) => setPn(e.target.value)} />
                </div>
            ) : (
                <div>
                    <h3 className="text-center">{first} {last}</h3>
                    <p className="text-center">{phone}</p>
                </div>
            )}
            <button className="bg-lpurple text-gray-100 border-2 border-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-softsun" onClick={handleSubmit}>{showInp?'Submit':'Reset'}</button>
        </div>
    );
}
