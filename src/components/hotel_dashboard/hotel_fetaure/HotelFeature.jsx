import React, { useEffect, useState } from "react";
import axiosInstance from "../../authentication/axiosInstance";
import AddFeature from "./integrate/AddFeature";
import FeatureLists from "./integrate/FeatureLists";
import { ToastContainer } from "react-toastify";
function HotelFeature() {
  const [featureLists, setFeatureLists] = useState([]);
  const [dataBySlug, setDataBySlug] = useState("");
  const [hId, setHId] = useState("");
  const fetchFeatureLists = async () => {
    try {
      const res = await axiosInstance.get(`/hotel/user-room-feature/`);
      console.log(res.data);
      setFeatureLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchHotelInfo = async () => {
    try {
      const res = await axiosInstance.get(`/hotel/`);
      setHId(res.data[0].id);
    } catch (err) {
      console.log(err);
    }
  };
  const featchFeatureBySlug = (slug) => {
    axiosInstance
      .get(`/hotel/room-feature/${slug}/`)
      .then((res) => {
        console.log(res.data);
        setDataBySlug(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchHotelInfo();
    fetchFeatureLists();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col p-10 gap-10 max-w-lg">
        <AddFeature
          dataBySlug={dataBySlug}
          hId={hId}
          fetchFeatureLists={fetchFeatureLists}
          setDataBySlug={setDataBySlug}
        />
        <FeatureLists
          featureLists={featureLists}
          fetchFeatureLists={fetchFeatureLists}
          featchFeatureBySlug={featchFeatureBySlug}
        />
      </div>
    </>
  );
}

export default HotelFeature;
