import React, {useState} from 'react';

// Components:
import CreateForm from './CreateForm/CreateForm';
import Info from './Info/Info';

const Create = () => {
    const [showInfo, setShowInfo] = useState(true);

    return (<>
        {showInfo && (<>
            <Info setShowInfo={setShowInfo}/>
        </>)}
        <CreateForm/>
    </>);
}

export default Create;
