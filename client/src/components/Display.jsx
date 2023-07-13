import { Card, CardActionArea, CardContent, CardHeader, CardMedia } from "@mui/material";
import { object } from "prop-types";
import React, { useEffect, useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
// eslint-disable-next-line react/prop-types
function Display({ places }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [fakeImages, setFakeImages] =useState([]);


  const toggleAddress = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

/**
 * The function `getPicsUpdate` is an asynchronous function that fetches data from a specified API
 * endpoint and updates the state with the fetched data.
 */
  const getPicsUpdate = async (locationId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/places/${locationId}/findlocationmage`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      setFakeImages([...fakeImages, { idx: locationId, caption: data?.data.data['0']?.caption, url: data?.data.data['0']?.images?.original?.url }]);
    } catch (error) {
      console.error(error);
    }
  };



  if (!places) {
    // Display a loading state or return null
    return <p className="text-center">Loading...</p>;
  }

  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto my-10">
  {places.map((item) => (
    <Card className="pr-4" key={item.location_id}>
      <CardHeader title={item.name} subheader={item.bearing} />
      <CardMedia
        component="img"
        height="194"
        onMouseEnter={async () => await getPicsUpdate(item.location_id, item.location_id)}
        image={fakeImages.some((img) => img.idx === item.location_id) ? fakeImages.find((img) => img.idx === item.location_id).url : "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1200&fit=crop&crop=faces"}
        className="backdrop-blur-2xl object-none object-center ml-2"
        alt={fakeImages.some((img) => img.idx === item.location_id) ? fakeImages.find((img) => img.idx === item.location_id).caption : 'loading..'}
      />
      <CardContent>
        <div className="flex items-center">
          <CiLocationArrow1 className="mr-2" />
          <div className="flex-grow">
            {item.address_obj &&
              Object.entries(item.address_obj).map(([key, value]) => (
                <span key={key}>
                  {value.length > 10 && expandedIndex !== item.location_id
                    ? `${value.substring(0, 10)}...`
                    : value},
                </span>
              ))}
          </div>
        </div>
      </CardContent>
      <CardActionArea className="mx-auto">
        <div className="flex justify-center my-6">
          {Object.values(item.address_obj).some(
            (value) => value.length > 10
          ) && (
            <button
              className="text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => toggleAddress(item.location_id)}
            >
              {expandedIndex === item.location_id ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </CardActionArea>
    </Card>
  ))}
</div>




  );
}

export default Display;
