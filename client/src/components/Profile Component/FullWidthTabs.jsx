import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import DisplayPosts from '../DisplayPosts';
import PostForm from '../Post Components/PostForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ items, users ,collab }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [collabPosts , setCollabPosts] =useState([]);

  useEffect(() => {
    if (items) {
      setPosts(items);
    }
  }, [items]);

  useEffect(() => {
    if (collab) {
      setCollabPosts(collab);
    }
  }, [collab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const deleteItem = (postId) => {
    setPosts(posts.filter((post) => post._id !== postId));
  };

  const editModeOn = (item) => {
    setEditMode(true);
    setSelectedPost(item);
  };

  const handleFormSubmit = (editedPost) => {
    fetch(`http://localhost:8000/api/trips/${editedPost._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post._id === data._id ? data : post))
        );
        setEditMode(false);
        setShowPopUp(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1000 }} className='bg-gray-100 mx-auto mt-44 w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className='sm:overflow-x-auto'
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Collaborator Posts" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className=' '>
          <div className='mx-auto'>
            {posts && (
              <DisplayPosts
                items={posts}
                onDeleteProp={(postId) => deleteItem(postId)}
                showPopUp={() => setShowPopUp(!showPopUp)}
                onEdit={(item) => editModeOn(item)}
              />
            )}
            {showPopUp && (
              <PostForm
                onClickProp={() => {
                  setShowPopUp(!showPopUp);
                  setEditMode(false);
                }}
                onSubmitProp={handleFormSubmit}
                users={users}
                item={selectedPost}
                editMode={editMode}
              />
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {collab && (
              <DisplayPosts
                items={collab}
                onDeleteProp={(postId) => deleteItem(postId)}
                showPopUp={() => setShowPopUp(!showPopUp)}
                onEdit={(item) => editModeOn(item)}
              />
            )}
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}
