import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../pages/layout.css'
import { RiFindReplaceLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";






const Layout = () => {
    return (
        <div>
            <div className='find'>
                <a className='navbar-brand' href='#'>
                    <img src="//theme.hstatic.net/200000692427/1001117622/14/logo.png?v=4750" width={150}/>
                </a>
                <form class="example" action="searching_page.php">
                    <input type="text" placeholder="Nhập Tên Sản Phẩm Cần Tìm ..." name="search"/>
                    <button type="submit"><i><RiFindReplaceLine /></i></button>
                </form>
                <ul>
                    <li>
                        <Link to="/dangnhap">Tài Khoản <IoPersonCircleOutline /></Link>
                    </li>
                    <li>
                        <Link to="/cart">Giỏ Hàng <CiShoppingCart /></Link>
                    </li>
                </ul>
            </div>
            <nav className='bar'>
                <ul>
                    <li>
                        <Link to="/about-us">Giới Thiệu Nous</Link>
                    </li>

                    <li>
                        <Link to="/Product">Sản Phẩm</Link>
                    </li>
                    <li>
                        <Link to="/ProductDetail">Chi Tiết Sản Phẩm</Link>
                    </li>
                    <li>
                        <Link to="/contact">Hệ Thống Đại Lý</Link>
                    </li>
                    <li>
                        <Link to="/blog">Lớn Cùng Nous</Link>
                    </li>


                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;
