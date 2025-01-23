/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet } from 'react-native';
import './Header.css';



//Interface para las props del Header
interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps): JSX.Element {
  return (

    <div className="header">

      <div className="menuIcon">
        <div className="dash" ></div>
        <div className="dash"></div>
        <div className="dash"></div>
      </div>

      <h2 className="headerTitle">{title}</h2>

      <div className="fa fa-search searchIcon">

      </div>
    </div>

  );

}


export default Header; 
