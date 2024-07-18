import React from 'react'
import Link from "next/link";

const Category = () => {
  return (
    <>
        <div className="py-6 pl-16 font-sans">
        <p className="font-semibold text-xl">Shop by categories</p>
        <p>Freshest meats and much more!</p>
      </div>
      <div className="flex flex-row ">
        <Link href="/category/chicken">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://thumbs.dreamstime.com/b/small-pieces-raw-chicken-meat-ceramic-plate-isolated-white-background-top-view-fillet-290268447.jpg"
            alt="chicken image"
            className="rounded-3xl w-44 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Chicken</p>
        </div>
        </Link>
        <Link href="/category/prawn">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://media.istockphoto.com/id/591792566/photo/fresh-raw-prawns-on-black-plate.jpg?s=612x612&w=0&k=20&c=Igr5qh9JNwLEkICGcZqhAxZe3ukonJf5RzlUpsgEqbc="
            alt="Prawns image"
            className="rounded-3xl w-44 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Prawns</p>
        </div>
        </Link>
        <Link href="/category/fish">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://goodfinds.ph/wp-content/uploads/2022/08/Seafood__0002_SalmonSlice_a.jpg"
            alt="Fish image"
            className="rounded-3xl w-44 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Fish</p>
        </div>
        </Link>
        <Link href="category/mutton">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://img.freepik.com/premium-photo/raw-mutton-meat-diced-goulash-stew-with-bone-rustic-plate-isolated-white-background_89816-44977.jpg"
            alt="Mutton image"
            className="rounded-3xl w-48 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Mutton</p>
        </div>
        </Link>
        <Link href="category/mushroom">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://s3.envato.com/files/250276826/918.jpg"
            alt="Mushroom image"
            className="rounded-3xl w-44 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Mushrooms</p>
        </div>
        </Link>
        <Link href="category/paneer">
        <div className="py-1 pl-10 w-60 h-60">
          <img
            src="https://media.istockphoto.com/id/1818864105/photo/plate-of-tofu-cheese-cubes.jpg?s=612x612&w=0&k=20&c=5dHC9vWIG-I8rfh7N1Nc91tDOGMeE5myaUHHpfOAPR4="
            alt="Paneer image"
            className="rounded-3xl w-44 h-44"
          />
          <p className="font-sans flex justify-center font-medium">Paneer</p>
        </div>
        </Link>
      </div>
    </>
  )
}

export default Category