import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Responsive, Container } from 'semantic-ui-react'
import styles from './Header.scss';

const breakPointSize = 767
const Header = () => (
  <Menu inverted style={{
    paddingLeft: '1rem',
    paddingRight: '1rem',
    margin: 0,
  }}>
    <Responsive as={Container} maxWidth={breakPointSize}>
      <Dropdown closeOnChange  item simple text='Menu'>
        <Dropdown.Menu style={{backgroundColor: '#000'}} >
          <Dropdown.Item>
            <Link to="/redux">redux</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/preference">preference</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/about">about</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/signin">signin</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Responsive>

    <Menu.Item name='browse'>
      <Link to="/">Engage</Link>
    </Menu.Item>

    <Responsive as={Container} minWidth={breakPointSize}>
      <Menu.Menu position='right'>
        <Menu.Item name='redux'>
          <Link to="/redux">redux</Link>
        </Menu.Item>
        <Menu.Item name='preference'>
          <Link to="/preference">preference</Link>
        </Menu.Item>
        <Menu.Item name='about'>
          <Link to="/about">about</Link>
        </Menu.Item>
        <Menu.Item name='signin'>
          <Link to="/signin">signin</Link>
        </Menu.Item>
      </Menu.Menu>
    </Responsive>
    
  </Menu>
)

export default Header;
