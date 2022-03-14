import React from 'react';
import PropTypes from 'prop-types';

const Props_File = (props) => {
    return <div>
            <h1 style={{color:"darkblue"}}> Hello ! This is Props Cheeckpoint : </h1>
            <h1 className='name'>
                My Name is {props.fullName}</h1> <br/>
                <h2>I am {props.profession} </h2><br/>
                <p style={{width:"60%" , margin:"auto"}}> {props.bio} </p> <br/>
            <button style={{padding:"5px", margin:"10px" , color:"rgb(221, 24, 83)", backgroundColor:"rgb(245, 245, 220)" , borderRadius:"10px"}} onClick={props.getName}> Name of Profile User </button>
    </div>;
    };
Props_File.defaultProps ={
    fullName:"karim nakbi",
    profession:" Web DEveloper",
    bio:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat laborum tempore, quis soluta aut temporibus quasi provident voluptates delectus nisi, dolorem quibusdam nemo dolore. Praesentium numquam neque hic? Facere, opti"   
}


Props_File.propTypes={
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,

}


export default Props_File;