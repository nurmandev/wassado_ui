import React from 'react'

export default function Button({ text, href, onClick, className }) {
  return (
    <a href={href}
        className={"duration-200 px-4 py-2 bg-hotel rounded-full text-white hover:bg-hotel-dark cursor-pointer "+className}
        onClick={onClick}
    >
        <span className='align-middle my-auto'>{text}</span>
    </a>
  )
}
