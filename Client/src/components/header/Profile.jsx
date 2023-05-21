import { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/index.jsx';
import { memo } from 'react';
// import { useEffect } from 'react';



const Profile = () => {
    const [user, setUser] = useState("")
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null); };
    const dispatch = useDispatch()
    

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')).user)
    }, [])
    return (
        <>
            <Typography onClick={handleClick}>{user.fastname}</Typography>
            <Menu anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                <MenuItem onClick={handleClose}>{user.fullname}</MenuItem>
                <MenuItem onClick={() => { handleClose(), dispatch(logout()) }} sx={{ fontSize: "small" }}>
                    <PowerSettingsNewIcon fontSize="small" sx={{ marginRight: 1, color: "blue" }} /> Logout</MenuItem>
            </Menu>
        </>
    )
}

export default memo(Profile)
