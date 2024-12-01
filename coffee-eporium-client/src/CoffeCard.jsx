import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee }) => {
  const { _id, name, supplier, category, chef, details, taste, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div class="border-2 rounded-lg border-pink-400 bg-base-100 shadow-xl flex items-center justify-evenly">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>{category}</p>
          <p>{chef}</p>
          <p>{details}</p>
          <p>{taste}</p>
          <div class="card-actions justify-end">
            <div class="join join-vertical space-y-2">
              <Link to={`/updatecoffee/${_id}`}>
                 <button class="btn join-item bg-blue-400">Update</button>
              </Link>
              
              <button class="btn join-item bg-green-600">Add</button>
              <button
                class="btn join-item bg-red-400 font-extrabold"
                onClick={() => handleDelete(_id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
