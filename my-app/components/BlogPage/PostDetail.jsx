import React from 'react';
import moment from 'moment';

function PostDetail({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-white text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p
            key={index}
            className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-white"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-white text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            loading="lazy"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="lg:shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative mb-12 w-full">
        <img
          src={post.image.url}
          alt="image"
          className="w-full object-cover h-[300px] object-center rounded-lg"
        />
      </div>
      <div className="px-5">
        <div className="flex items-center mb-8 w-full">
          <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-white ml-3">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="black"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle text-white opacity-70">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
          {post.title}
        </h4>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}

export default PostDetail;
