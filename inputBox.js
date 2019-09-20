import React from "react";

export default function InputBox(props){
  return (
    <input type={props.type} name={props.name} className={props.className} onChange={props.onChange} />
  );
}