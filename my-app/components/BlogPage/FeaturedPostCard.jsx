import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-[300px] lg:h-[360px] text-white">
    <img src={post.image.url} alt={post.title} />
    <div className="absolute w-full h-full opacity-40 bg-black dark:opacity-70" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="opacity-80 mb-2">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="mb-4 font-semibold text-xl text-center">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="smallauthor"
          src={post.author.photo.url}
        />
        <p className="ml-3">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
