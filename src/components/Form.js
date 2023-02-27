import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    const newDate = new Date(date)
    let random = seededRandom(newDate.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const Form = () => {
    const [availableTime, setAvailableTimes] = useState(null)
    const [checkDate,setCheckDate] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        for: "",
        table: "",
        specialRequests: "",
    })
    let navigate = useNavigate()

    useEffect(() => {
        let availableTimes;
        if (checkDate) {
            console.log(checkDate)
            availableTimes = (fetchAPI(checkDate));
            setAvailableTimes(availableTimes)
            console.log("Returning")
        }
    },[checkDate]);
    console.log(availableTime)
    const handleChange = e => {
        if (e.target.name === 'date') {
            setCheckDate(e.target.value)
        }
        setFormData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }


    const handleClick = (e) => {
        e.preventDefault()
        const returned = submitAPI(formData)
        console.log(returned)
        if (returned) {
            navigate('/', {state:{name:formData.name,date:formData.date}})
        }
    }



  return (
    <>
    <div className="flex flex-col text-center text-white bg-[#495E57] p-8">
        <h1 className="text-4xl">Create a Reservation</h1>
        <p className="italic text-lg">Fill out the form below with all required fields to create a reservation. You will be updated on the status of your reservation.</p>
    </div>
    <div className="flex h-[65vh] p-20">
        <form className="flex flex-[0.5] mx-auto gap-5 flex-col">
            <h1 className="text-3xl pt-5">Reservation Form</h1>
            <hr className="w-80"/>
            <div className="flex flex-col">
                <label>Name</label>
                <input className="bg-gray-200 p-4" type="text" onChange={handleChange} name="name"/>
            </div>
            <div className="flex flex-col">
                <label>Date</label>
                <input type="date" className="bg-gray-200 p-4" onChange= {handleChange} name="date"/>
            </div>
            <div className="flex flex-col">
                <label>Time</label>
                <select type="time" className="bg-gray-200 p-4" onChange={handleChange} name="time">
                    {availableTime && availableTime.map((time) =>
                        <option>{time}</option>
                    )}
                </select>
                {!availableTime && <p className="text-red-400">Please select a date to get a list of available times.</p>}

            </div>
            <div className="flex flex-col h-40">
                <label>For</label>
                <select className="bg-gray-200 p-4" placeholder="Please Select"  onChange={handleChange} name="for">
                    <option>Party</option>
                    <option>Wedding</option>
                    <option>Casual</option>
                </select>
            </div>
            <div className="flex flex-col h-40">
                <label>Table</label>
                <select className="bg-gray-200 p-4"  onChange={handleChange} name="table">
                    <option>Table</option>
                    <option>Booth</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label>Special Requests</label>
                <textarea className="bg-gray-200 " type="text"  onChange={handleChange} name="specialRequests"/>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded py-2 px-4" onClick={handleClick}>Submit Reservation</button>
        </form>
    </div>
    </>
  )
}

export default Form