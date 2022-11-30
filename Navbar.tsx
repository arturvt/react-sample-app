import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Navbar() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      centered
    >
      <Tab label="Home" component={Link} to={'/'} />
      <Tab label="Blogs" component={Link} to="/blog" />
      <Tab label="Info" component={Link} to={'/info'} />
    </Tabs>
  );
}

export default Navbar;
