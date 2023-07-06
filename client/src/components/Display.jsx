import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
// eslint-disable-next-line react/prop-types
function Display({ places }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  // const {data} =places.data;
  useEffect(() => {
    if (places) {
      // console.log("I am here in the display ", places);
      // console.log('I am address object ', places[0].address_object.street1);
    }
  }, [places]);

  const toggleAddress = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  if (!places) {
    // Display a loading state or return null
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto my-10">
      {places.map((item, idx) => (
        <Card className="pr-4" key={idx}>
          <CardHeader title={item.name} subheader={item.bearing} />
          <CardContent>
            <div className="flex items-center">
            <CiLocationArrow1 className="mr-2" />
              <div className="flex-grow">
                {item.address_obj &&
                  Object.entries(item.address_obj).map(([key, value]) => (
                    <span key={key}>
                      {value.length > 10 && expandedIndex !== idx
                        ? `${value.substring(0, 10)}...`
                        : value}
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
                  onClick={() => toggleAddress(idx)}
                >
                  {expandedIndex === idx ? "Show Less" : "Show More"}
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
