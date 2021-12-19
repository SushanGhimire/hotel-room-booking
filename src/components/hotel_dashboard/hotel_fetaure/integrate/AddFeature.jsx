import React, { useState, useEffect } from "react";
import axiosInstance from "../../../authentication/axiosInstance";
import { toast } from "react-toastify";
function AddFeature({ fetchFeatureLists, hId, dataBySlug, setDataBySlug }) {
  const [feature, setFeature] = useState("");
  const [status, setStatus] = useState("PU");
  const [featureErr, setFeatureErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feature === "") {
      setFeatureErr("Add the Feature first.");
    } else {
      let val = {
        name: feature,
        status: status,
        hotel: hId,
      };
      console.log(val);
      setFeatureErr("", val);
      if (dataBySlug === "") {
        axiosInstance
          .post(`/hotel/room-feature/create/`, val)
          .then((res) => {
            console.log(res);
            fetchFeatureLists();
            setFeature("");
            setStatus("PU");
            toast.success("Room feature added sucessfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axiosInstance
          .patch(`/hotel/room-feature/${dataBySlug.slug}/`, val)
          .then((res) => {
            console.log(res);
            fetchFeatureLists();
            setFeature("");
            setStatus("PU");
            setDataBySlug("");
            toast.success("Room feature updated sucessfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  useEffect(() => {
    if (dataBySlug !== "") {
      setFeature(dataBySlug.name);
      setStatus(dataBySlug.status);
    }
  }, [dataBySlug]);
  return (
    <div className="">
      <div>
        <span className="font-semibold text-2xl">Add Hotel Room Feature</span>
      </div>
      <form action="" className="mt-10" onSubmit={handleSubmit}>
        <div className="gap-4">
          <label htmlFor="" className="text-lg">
            Feature
          </label>
          <input
            type="text"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            className="w-full"
            placeholder="Feature name"
            name=""
            id=""
          />
          <span className="text-alert text-sm">{featureErr}</span>
        </div>
        <div className="gap-4 mt-5">
          <label htmlFor="" className="text-lg">
            Status
          </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option hidden>Select the room status</option>
            <option value="DF">Draft</option>
            <option value="PU">Publish</option>
          </select>
          <span className="text-alert text-sm">{featureErr}</span>
        </div>

        <button className="bg-buttonBlue text-white px-6 py-2 mt-5 rounded-md">
          {dataBySlug === "" ? " Add Feature" : " Update Feature"}
        </button>
      </form>
    </div>
  );
}

export default AddFeature;
