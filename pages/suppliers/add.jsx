import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddSupplierPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveSupplier = async (data) => {
        
        const response = await fetch('/api/suppliers', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // serialisation
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
        const result = await response.json();   // deserialise
        if (result.error) {
            alert("Error: " + result.error)
        } else {
            alert("Supplier saved")
            window.location.href = "/suppliers"
        }
        console.log(result)
        setData(JSON.stringify(data))
    }

    return (
        <div style={{ margin: '1rem' }}>
            <form onSubmit={handleSubmit(saveSupplier)}>
                <h1>New Supplier</h1>
                <label htmlFor="name">Supplier name</label><br />
                <input id="name" {...register("name", { required: true })} placeholder="Supplier Name" /><br />

                <label htmlFor="address">Address</label>
                <input id="address" {...register("address", { required: true })} placeholder="Address"/>
                <br />
                <label htmlFor="phonenumber">Phone number</label><br />
                <input id="phonenumber" {...register("phonenumber")} placeholder=" Phone number" /><br />
                <input type="submit" />
                <p>{data}</p><br />
            </form>
        </div>
    );
}