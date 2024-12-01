import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const detail = e.target;
    const name=detail.name.value;
    const supplier=detail.supplier.value;
    const category=detail.category.value;
    const chef=detail.chef.value;
    const details=detail.details.value;
    const taste=detail.taste.value;
    const photo=detail.photo.value;
    const coffeeDetails={name,supplier,category,chef,details,taste,photo}
    fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(coffeeDetails)
    })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
  };
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-4">Add a coffee</h1>
      <form action="" onSubmit={handleForm}>
        <div className="flex justify-between items-center w-2/3 mx-auto">
          <div className="space-y-3">
            <label class="input input-bordered flex items-center gap-2">
              Name
              <input type="text" name="name" class="grow" placeholder="Name" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="supplier"
                class="grow"
                placeholder="Supplier"
              />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                class="grow"
                placeholder="Category"
              />
            </label>
            <input
              type="submit"
              value="Add Coffee"
              className="btn bg-cyan-600 text-white font-bold"
            />
          </div>

          <div className="space-y-3">
            <label class="input input-bordered flex items-center gap-2">
              Chef
              <input type="text" name="chef" class="grow" placeholder="Chef" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="details"
                class="grow"
                placeholder="Details"
              />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                name="taste"
                class="grow"
                placeholder="Taste"
              />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              Photo
              <input
                type="text"
                name="photo"
                class="grow"
                placeholder="Taste"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
