"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/favicon.png";
import Login from "./Login.jsx";
import { IoMdClose } from "react-icons/io";
import Ordercard from "./Ordercard";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const cartItems = useSelector((state)=> state.cart.cart);

  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price,0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="navbar bg-pink-50 px-8 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="h-10 w-10 mr-3">
              <Image src={logo} alt="Chikun deliveries" />
            </div>
          </Link>
          <Link href="/">
            <div className="text-xl font-semibold">
              Chikun
              <br />
              Deliveries
            </div>
          </Link>
          <div className="text-xl ml-20">Location</div>
        </div>
        <div className="flex items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-64"
            />
          </div>
          <div className="flex ml-4 space-x-2">
            <Link href="/stores">
              <button className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center">
                Shops
              </button>
            </Link>
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
              >
                Categories
              </div>
              {isClient && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-2 shadow"
                >
                  <Link href="/category/chicken">
                    <li>
                      <a>Chicken</a>
                    </li>
                  </Link>
                  <Link href="/category/mutton">
                    <li>
                      <a>Mutton</a>
                    </li>
                  </Link>
                  <Link href="/category/fish">
                    <li>
                      <a>Fish</a>
                    </li>
                  </Link>
                  <Link href="/category/prawn">
                    <li>
                      <a>Prawns</a>
                    </li>
                  </Link>
                  <Link href="/category/mushroom">
                    <li>
                      <a>Mushrooms</a>
                    </li>
                  </Link>
                  <Link href="/category/paneer">
                    <li>
                      <a>Paneer</a>
                    </li>
                  </Link>
                </ul>
              )}
            </div>
            <button
              onClick={() => setActiveCart(!activeCart)}
              className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
            >
              Cart
            </button>
            <div className="text-center">
              <button
                className="btn text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
                onClick={() => setShowModal(true)}
              >
                Login
              </button>
              {isClient && (
                <Login isVisible={showModal} onClose={() => setShowModal(false)}>
                  <div className="py-6 px-6 lg:px-8 text-left">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">
                      Login
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label
                          htmlFor="number"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400 block w-full p-2.5"
                          placeholder="123xxxx789"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="******"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-400 block w-full p-2.5"
                          required
                        />
                      </div>
                      <div className="text-right text-sm text-red-500">
                        <a href="">Forget Password?</a>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                          Login to your account
                        </button>
                      </div>
                      <div className="text-left text-sm">
                        <h2 className="text-gray-800">
                          Not registered?{" "}
                          <a className="text-blue-700" href="/signup">
                            Create account
                          </a>
                        </h2>
                      </div>
                    </form>
                  </div>
                </Login>
              )}
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-16 rounded-full bg-blue-400">
                  <div className="mt-2 text-lg">CR</div>
                </div>
              </div>
              {isClient && (
                <ul
                  tabIndex={0}
                  className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Address</a>
                  </li>
                  <li>
                    <a>Notifications</a>
                  </li>
                  <li>
                    <a>Payment Methods</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {isClient && (
        <div
          className={`fixed right-0 top-0 w-full lg:w-[25vw] bg-blue-100 h-full p-4 ${
            activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 z-50`}
        >
          <div className="flex justify-between items-center my-3 ">
            <span className="text-xl font-bold font-sans text-gray-800 ">
              Order Summary
            </span>
            <IoMdClose
              onClick={() => setActiveCart(!activeCart)}
              className="border-2 border-blue-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-orange-500 hover:border-orange-500 cursor-pointer"
            />
          </div>
          {
            cartItems.length > 0 ? 
            cartItems.map((item)=> {
              return <Ordercard key={item.id} 
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              gram={item.gram}
              qty={item.qty}
              />
            }): <h2 className="text-center text-xl font-bold text-blue-950">Your Cart is Empty</h2>
          }
          
          <div className="shadow-xl">
            <button className="bg-red-600 text-white p-3 rounded-md shadow-md absolute bottom-3 right-0 mr-5 hover:bg-red-700">
              Proceed to Checkout
            </button>
            <span className="flex flex-grid absolute bottom-6 left-0 ml-8 text-blue-950">
              <p className="font-bold">Total:</p>
              <p className="ml-2 font-bold">₹{totalPrice}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
