import React, {useState} from 'react';

// Components:
import Attendance from 'pages/Create/AttendanceModal/Attendance/Attendance';
import Confirm from 'pages/Create/AttendanceModal/Confirm/Confirm';

const AttendanceModal = ({setIsOpen}) => {
    const [isConfirm, setIsConfirm] = useState(false);

    return (<>
        {isConfirm
            ? <Confirm setIsOpen={setIsOpen} setIsConfirm={setIsConfirm}/>
            : <Attendance setIsOpen={setIsOpen} setIsConfirm={setIsConfirm}/>
        }
    </>);
}

export default AttendanceModal;
